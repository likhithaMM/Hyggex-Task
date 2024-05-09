import React from 'react'
import Clippath from '../Clip path group.png'
import HomeIcon from '../Vector.png'
import Breadcrumb from "./Breadcrumb";

const Navbar = () => {
  return (
    <div>
    <div className='flex justify-between items-center h-28 max-w-[1240px] mx-auto px-4 text-black'>
      <img className="h-auto max-w-xs bg-white pr-2 w-9 " src={Clippath} alt="Clippath"></img>
      <h1 className='cursor-pointer w-full text-3xl font-semibold font-montserrat' style={{backgroundImage: 'linear-gradient(to right, #06286E, #164EC0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',fontFamily: 'Montserrat, sans-serif'}}>Hygge<b>X</b>.</h1>
      <ul className='flex items-center'>
        <li className='p-4 cursor-pointer'>Home</li>
        <li className='p-4 cursor-pointer'>Flashcard</li>
        <li className='p-4 cursor-pointer'>Contact</li>
        <li className='p-4 cursor-pointer'>FAQ</li>
        <div className="bg-gradient-to-r from-blue-900 to-blue-400  rounded-3xl justify-center items-center flex px-[2.5rem] h-[2.5rem] cursor-pointer" style={{backgroundImage: 'linear-gradient(to bottom, #06286E, #164EC0)'}}>
              <p className="text-white">Login</p>
        </div>
      </ul>
      </div>
      <div className='h-14 max-w-[1240px] mx-auto px-4'>
      <Breadcrumb segments={[
  { icon: HomeIcon }, // No label is provided
  "Flashcard",
  "Mathematics",
  "Relations and Functions"
]}  />
      </div>
      <div className='h-12 max-w-[1240px] mx-auto px-4 font-bold text-2xl'  style={{backgroundImage: 'linear-gradient(to right, #06286E, #164EC0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
        <h2>Relations and Functions ( Mathematics )</h2>
      </div>
    </div>
    
    
  )
}

export default Navbar