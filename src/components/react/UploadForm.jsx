import ProgressBar from "@components/react/ProgressBar";

import { ERROR_MSG_IMAGE_TYPE, IMAGE_TYPES } from "@utils/enums/enums";
import { useState } from "react";

const types = IMAGE_TYPES;

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  
  const handleChange = (e) => {
    let [selected] = e.target.files;
    let errorMsg = types.includes(selected?.type) ? "" : ERROR_MSG_IMAGE_TYPE;

    selected = !errorMsg ? selected: null;

    setFile(selected);
    setError(errorMsg);
  }

  return (
    <form className="flex flex-col items-center w-full">
      <label
        htmlFor="upload"
        className="flex w-36 h-10 px-4 rounded-md items-center bg-pink-400 text-sm text-white shadow-md transition ease-in-out hover:scale-105 duration-75 cursor-pointer"
      >
        <input
          type="file"
          title="upload"
          placeholder="upload"
          id="upload"
          onChange={handleChange}
          className="w-0 h-0"
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
        <span className="ml-2 text-xs font-semibold">Upload image</span>
      </label>
      { 
        error &&
        <div className="flex max-w-screen-sm mt-6 p-2 border-l-8 border-l-red-400 rounded-md shadow-md bg-pink-100 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <span className="flex items-center ml-2 text-xs text-red-400 font-semibold">{error}</span>
        </div>
      }
      { file && <div className="my-2"> {file.name} </div> }
      { file && <ProgressBar file={file} setFile={setFile} /> }
    </form>
)
}

export default UploadForm
