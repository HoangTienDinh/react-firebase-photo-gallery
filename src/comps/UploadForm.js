import React from "react";

export default function UploadForm() {
  const changeHandler = (e) => {
    console.log("change here");
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
    </form>
  );
}
