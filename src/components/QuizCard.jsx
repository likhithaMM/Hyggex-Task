import React from 'react'
import Light from '../light.png'
import Volume from "../volume.png"
import Refresh from '../refresh.png'
import LeftArrow from '../leftarrow.png'
import RightArrow from '../rightarrow.png'
import Maxis from '../maxis.png'
import Clippath from '../Clip path group.png'
import plus from '../Vector.svg'
import { useState } from 'react'
import { Icon } from '@iconify/react';
const QuizCard = () => {
    const [filterButton, setFilterButton] = useState("study")
    const [boxOne, setBoxOne] = useState(false)
    const [boxSec, setBoxSec] = useState(false)
    const [boxThird, setBoxThird] = useState(false)
    return (
        <div>
            <div>
                <ul className=' h-10 flex items-center justify-center '>
                    <li className={`px-2 py-2 cursor-pointer ${filterButton === "study" ? `font-bold border-b-2 text-blue-900 border-blue-900` : null}`} onClick={() => setFilterButton("study")}>Study</li>
                    <li className={`px-2 py-2 cursor-pointer ${filterButton === "quiz" ? `font-bold border-b-2 text-blue-900 border-blue-900` : null}`} onClick={() => setFilterButton("quiz")}>Quiz</li>
                    <li className={`px-2 py-2 cursor-pointer ${filterButton === "test" ? `font-bold border-b-2 text-blue-900 border-blue-900` : null}`} onClick={() => setFilterButton("test")}>Test</li>
                    <li className={`px-2 py-2 cursor-pointer ${filterButton === "game" ? `font-bold border-b-2 text-blue-900 border-blue-900` : null}`} onClick={() => setFilterButton("game")}>Game</li>
                    <li className={`px-2 py-2 cursor-pointer ${filterButton === "others" ? `font-bold border-b-2 text-blue-900 border-blue-900` : null}`} onClick={() => setFilterButton("others")}>Others</li>
                </ul>
            </div>
            {/*2*/}
            {filterButton === "study" && (
                <div className=" p-4 rounded-3xl shadow-md mx-auto max-w-md mt-8 space-y-4 h-56 flex items-center justify-center relative" style={{backgroundImage: 'linear-gradient(to right, #06286E, #164EC0)'}}>
                    {/* Icon 1 - Top left */}
                    <img src={Light} className="absolute top-5 left-6 w-4 h-5" alt="Icon 1" />
                    {/* Icon 2 - Top right */}
                    <img src={Volume} className="absolute top-1 right-5 w-4 h-4" alt="Icon 2" />
                    <div className="max-w-screen-xl mx-auto">
                        <p className="text-white font-medium">9 + 6 + 7x - 2x - 3</p>
                    </div>
                </div>
            )}
            {filterButton === "quiz" && (
                <div className=" p-4 rounded-3xl shadow-md mx-auto max-w-md mt-8 space-y-4 h-56 flex items-center justify-center relative" style={{backgroundImage: 'linear-gradient(to right, #06286E, #164EC0)'}}>
                    {/* Icon 1 - Top left */}
                    <img src={Light} className="absolute top-5 left-6 w-4 h-5" alt="Icon 1" />
                    {/* Icon 2 - Top right */}
                    <img src={Volume} className="absolute top-1 right-5 w-4 h-4" alt="Icon 2" />
                    <div className="max-w-screen-xl mx-auto">
                        <p className="text-white font-medium">Quiz</p>
                    </div>
                </div>
            )}
            {filterButton === "test" && (
                <div className=" p-4 rounded-3xl shadow-md mx-auto max-w-md mt-8 space-y-4 h-56 flex items-center justify-center relative" style={{backgroundImage: 'linear-gradient(to right, #06286E, #164EC0)'}}>
                    {/* Icon 1 - Top left */}
                    <img src={Light} className="absolute top-5 left-6 w-4 h-5" alt="Icon 1" />
                    {/* Icon 2 - Top right */}
                    <img src={Volume} className="absolute top-1 right-5 w-4 h-4" alt="Icon 2" />
                    <div className="max-w-screen-xl mx-auto">
                        <p className="text-white font-medium">Test</p>
                    </div>
                </div>
            )}
            {filterButton === "game" && (
                <div className=" p-4 rounded-3xl shadow-md mx-auto max-w-md mt-8 space-y-4 h-56 flex items-center justify-center relative" style={{backgroundImage: 'linear-gradient(to right, #06286E, #164EC0)'}}>
                    {/* Icon 1 - Top left */}
                    <img src={Light} className="absolute top-5 left-6 w-4 h-5" alt="Icon 1" />
                    {/* Icon 2 - Top right */}
                    <img src={Volume} className="absolute top-1 right-5 w-4 h-4" alt="Icon 2" />
                    <div className="max-w-screen-xl mx-auto">
                        <p className="text-white font-medium">Game</p>
                    </div>
                </div>
            )}
            {filterButton === "others" && (
                <div className=" p-4 rounded-3xl shadow-md mx-auto max-w-md mt-8 space-y-4 h-56 flex items-center justify-center relative" style={{backgroundImage: 'linear-gradient(to right, #06286E, #164EC0)'}}>
                    {/* Icon 1 - Top left */}
                    <img src={Light} className='absolute top-5 left-6 w-4 h-5 cursor-pointer' alt="Icon 1" />
                    {/* Icon 2 - Top right */}
                    <img src={Volume} className="absolute top-1 right-5 w-4 h-4" alt="Icon 2" />
                    <div className="max-w-screen-xl mx-auto">
                        <p className="text-white font-medium">Others</p>
                    </div>
                </div>
            )}
            {/*3*/}
            <div className=" h-20 flex items-center justify-between mx-auto max-w-md  " >
                <img src={Refresh} className='w-5 h-5 cursor-pointer' alt='li' />
                <img src={LeftArrow} className='w-5 h-5 cursor-pointer' alt='li' />
                <p className='text-base font-bold text-[#06286E] font-customFont '>{`01/10`}</p>
                <img src={RightArrow} className='w-5 h-5 cursor-pointer' alt='li'/>
                <img src={Maxis} className='w-5 h-5 cursor-pointer' alt='li' />
            </div>
            {/*4*/}
            <div className='flex max-w-[1240px] mx-auto px-4 justify-between '>
                <div className='flex  '>
                    <div className='p-4 rounded-3xl shadow-2xl'>
                        <img src={Clippath} className='w-5 h-4' alt='li' />
                    </div>
                    <div className='pl-4'>
                        <p className='text-xs'>Published by</p>
                        <p className='text-2xl font-bold font-customFont' style={{backgroundImage: 'linear-gradient(to right, #06286E, #164EC0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',fontFamily: 'Montserrat, sans-serif'}}>HyggeX</p>
                    </div>
                </div>
                <div className='flex pt-2'>
                    <img src={plus} className='w-15 h-6 pr-4 pt-1 cursor-pointer' alt='li'></img>
                    <p className='text-xl font-bold font-customFont ' style={{backgroundImage: 'linear-gradient(to right, #06286E, #164EC0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Create Flash Card</p>
                </div>
            </div>

                <h1 className=' text-2xl font-bold max-w-[1240px] mx-auto px-4 mt-[2rem]' style={{backgroundImage: 'linear-gradient(to right, #06286E, #164EC0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>FAQ</h1>
            <div className='max-w-[1240px] mx-auto px-4 mb-[6rem]'>
                <div className={`pt-[1rem] px-[1rem]  mt-8 cursor-pointer rounded-md border-[#06286B] border-2 w-[80%] relative ${boxOne ? `pb-[6rem]` : `pb-[1rem]`}`} onClick={() => setBoxOne(!boxOne)}>
                    <p>Can education flashcards be used for all age groups?</p>
                    <div className="absolute right-4 top-[1rem]">
                        <Icon icon="ep:arrow-down-bold" />
                    </div>
                </div>
                <div className={`pt-[1rem] px-[1rem]  mt-8 cursor-pointer rounded-md border-[#06286B] border-2 w-[80%] relative ${boxSec ? `pb-[6rem]` : `pb-[1rem]`}`} onClick={() => setBoxSec(!boxSec)}>
                    <p>How do education flashcards work?</p>
                    <div className="absolute right-4 top-[1rem]">
                        <Icon icon="ep:arrow-down-bold" />
                    </div>
                </div>
                <div className={`pt-[1rem] px-[1rem]  mt-8 cursor-pointer rounded-md border-[#06286B] border-2 w-[80%] relative ${boxThird ? `pb-[6rem]` : `pb-[1rem]`}`} onClick={() => setBoxThird(!boxThird)}>
                    <p>Can education flashcards be used for test preparation?</p>
                    <div className="absolute right-4 top-[1rem]">
                        <Icon icon="ep:arrow-down-bold" />
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default QuizCard
