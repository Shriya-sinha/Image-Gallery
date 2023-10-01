import React from "react";

const Uploadform = () => {
  const [imag, setImag] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.types)) {
      setImag(selected);
    } else {
      setImag(null);
      setError("Please select an image file of type png or jprg");
    }
  };
  return (
    <form>
      <input type="file" onChange={changeHandler} />
    </form>
  );
};

export default Uploadform;
