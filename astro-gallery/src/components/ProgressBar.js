import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ imag, setImag }) => {
  const { url, progress } = useStorage(imag);

  useEffect(() => {
    if (url) {
      setImag(null);
    }
  }, [url, setImag]);
  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
