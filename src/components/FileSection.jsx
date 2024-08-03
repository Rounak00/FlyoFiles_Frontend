import { FaFileArrowUp } from "react-icons/fa6"
import PropTypes from 'prop-types'

const FileSection = ({file}) => {
  return (
    <div className="h-[20%] min-w-[20%] w-auto bg-blue-700 shadow-xl rounded-xl flex justify-evenly items-center gap-6 text-white ">
              <div className="pl-4">
                <FaFileArrowUp size={30} />
              </div>
              <div className="flex justify-center items-center pr-4 flex-col">
                <p className="line-clamp-1">{file.name}</p>
                <p>Size : {(file.size / 1024).toFixed(2)} mb</p>
              </div>
            </div>
  )
}
FileSection.propTypes={
    file:PropTypes.object
}

export default FileSection