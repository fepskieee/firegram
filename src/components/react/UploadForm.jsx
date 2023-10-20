
const UploadForm = props => {
  
  return (
    <form>
      <label 
        htmlFor="upload"
        className="block text-center w-8 h-8 border-2 rounded-full border-pink-500 font-bold text-pink-500 shadow-lg transition ease-in-out hover:scale-110 duration-75 cursor-pointer"
      >
        <input
          type="file"
          name="upload"
          id="upload"
          className="w-0 h-0"
        />
        <span>+</span>
      </label>
    </form>
  )
}

export default UploadForm
