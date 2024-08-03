import { BarLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="mt-4 flex justify-center items-center flex-col py-4">
              <BarLoader color="white" />
              <p className="text-white mt-4">Please wait a While ...</p>
            </div>
  )
}

export default Loading