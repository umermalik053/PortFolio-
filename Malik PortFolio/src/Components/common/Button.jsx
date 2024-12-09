import React from 'react'

const Button = ({text,link}) => {
  return (
    <div>
      <a   href="https://drive.google.com/uc?export=download&id=1BhbBlvSVWTLp87_OkiX3QWqMGSorlvlv"
      download >
      <button onClick={() => window.open(link, "_blank")} className=" bg-[#34D399] hover:bg-[#279f73] text-[14px] px-[15px] py-[7px] rounded-md mt-[20px] sm:text-[14px] sm:px-[20px] sm:py-[8px]" >{text}</button>
      </a>
     
    </div>
   
  )
}

export default Button
