import React from "react";
import useStorage from "../hooks/useStorage";


export default function ProgressBar({ file, setFile }) {
    const { url, progress } = useStorage(file);

  return (
  <div className='progress-bar' style={{ width: progress + '%' }}>

  </div>
  );
}
