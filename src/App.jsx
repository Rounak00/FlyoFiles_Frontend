import { useRef, useState, useEffect } from "react";
import "./App.css";
import { uploadFile } from "./services/api";
import ResultSection from "./components/ResultSection";
import Loading from "./components/Loading";
import HeadingLogo from "./components/HeadingLogo";
import FileSection from "./components/FileSection";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <HeadingLogo/>
      <div className="flex justify-center items-center h-auto ">
        <div className="w-[70%] h-auto min-h-[30vh] bg-[#012e45] flex justify-start items-center flex-col gap-4 max-md:w-[100vw] ">
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
          {file && (<FileSection file={file}/>)}

          {isLoad && ( <Loading/>)}

          {result && ( <ResultSection result={result} copyF={copyF}/>)}
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
