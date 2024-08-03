import Heading_Logo from '../assets/Heading_Logo.svg'

const HeadingLogo = () => {
  return (
    <div className="flex justify-center items-center">
      <p className="h-32 w-64 ">
        <img src={Heading_Logo} alt="Heading_Logo" className="h-full w-full"/>
      </p>
      </div>
  )
}

export default HeadingLogo