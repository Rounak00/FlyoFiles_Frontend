import { useRef, useState, useEffect } from "react";
import "./App.css";
import { FaFileArrowUp } from "react-icons/fa6";
import { uploadFile } from "./services/api";
import { RiFileCopyFill } from "react-icons/ri";
import { BarLoader } from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Heading_Logo from './assets/Heading_Logo.svg'

const notify = () => toast("File Uploaded Successfully");

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  const fileRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      setResult("");
      if (file) {
        notify();
        setIsLoad(true);
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile(data);
        setIsLoad(false);
        setResult(response.path);
      }
    };
    getImage();
    
  }, [file]);

  const onUploadClick = () => {
    fileRef.current.click();
  };

  const copyF = async () => {
    try {
      await navigator.clipboard.writeText(result);
      alert("copied Successfully !!!");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
      <p className="h-32 w-64 ">
        <img src={Heading_Logo} alt="Heading_Logo" className="h-full w-full"/>
      </p>
      </div>
      <div className="flex justify-center items-center h-auto">
        <div className="w-[70%] h-[50vh] bg-[#012e45] flex justify-start items-center flex-col gap-4 max-md:w-[100vw]">
          <h1 className="pt-4 pb-4 font-bold text-[#b7cee0] text-center">
            FlyoFiles is a Simple File Sharing APP
            <br />
            Upload your file and share the Link
          </h1>
          <button
            onClick={onUploadClick}
            className="hover:bg-blue-500 text-white rounded-lg p-4 bg-blue-700"
          >
            Upload
          </button>
          <input
            type="file"
            ref={fileRef}
            className="hidden"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          {file && (
            <div className="h-[20%] min-w-[20%] w-auto bg-blue-700 shadow-xl rounded-xl flex justify-evenly items-center gap-6 text-white">
              <div className="pl-4">
                <FaFileArrowUp size={30} />
              </div>
              <div className="flex justify-center items-center pr-4 flex-col">
                <p className="line-clamp-1">{file.name}</p>
                <p>Size : {(file.size / 1024).toFixed(2)} mb</p>
              </div>
            </div>
          )}

          {isLoad && (
            <div className="mt-4 flex justify-center items-center flex-col">
              {console.log("Spinner working")}
              <BarLoader color="white" />
              <p className="text-white mt-4">Please wait a While ...</p>
            </div>
          )}
          {result && (
            <div className="mt-4 flex flex-row gap-4 max-md:flex-col max-sm:text-sm max-sm:items-center">
              <span className="text-[#cce2f4] font-semibold">Your Link : </span>
              <a href={result} target="_blank">
                <span className="text-[#cce2f4] font-bold max-sm:break-words">
                  {result}
                </span>
              </a>
              <span className="text-[#cce2f4] cursor-pointer " onClick={copyF}>
                <RiFileCopyFill size={25} />
              </span>
            </div>
          )}
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
