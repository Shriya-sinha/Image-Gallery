import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const Uploadform = () => {
  const [imag, setimag] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setimag(selected);
      setError(null);
    } else {
      setimag(null);
      setError("Please select an image file of type png or jpeg");
    }
  };
  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {imag && <div>{imag.name}</div>}
        {imag && <ProgressBar imag={imag} setimag={setimag} />}
      </div>
    </form>
  );
};

export default Uploadform;
