import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ imag, setImag }) => {
  const { url, progress } = useStorage(imag);
  return (
    <div className="progress-bar" style={{ width: progress + "%" }}>
      progress
    </div>
  );
};

export default ProgressBar;
