import PropTypes from 'prop-types';
import { RiFileCopyFill } from "react-icons/ri";

const ResultSection = (props) => {
    const {result,copyF}=props
  return (
    <div className="mt-4 flex flex-row gap-4 max-md:flex-col max-sm:text-sm max-sm:items-center py-8 px-4">
              <span className="text-[#cce2f4] font-semibold">Your Link: </span>
              <a href={result} target="_blank">
                <span className="text-[#cce2f4] font-bold  max-sm:text-sm break-all">
                  {result}
                </span>
              </a>
              <span className="text-[#cce2f4] cursor-pointer " onClick={copyF}>
                <button className="border-white rounded-[100%] border-2 "><RiFileCopyFill size={25} className="p-[5px]"/></button>
              </span>
            </div>
  )
}
ResultSection.propTypes={
    result:PropTypes.any,
    copyF:PropTypes.func,
}

export default ResultSection