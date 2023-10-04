import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

const useStorage = (imag) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(imag.name);

    storageRef.put(imag).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalbytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [imag]);

  return { progress, url, error };
};

export default useStorage;
