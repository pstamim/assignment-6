import React from 'react';
import benner from '../../public/banner.png'
import Image from 'next/image';
const Banner = () => {
    return (


        <div className='container mx-auto mt-20' >
            <div className='flex flex-col-reverse items-center justify-between gap-8 rounded-2xl border border-[#242833] bg-[#15171D] p-6 sm:p-8 md:flex-row md:p-10 lg:p-14'>

                <div className='space-y-4 w-full text-center md:w-1/2 md:text-left'>

                    <p className='text-[#C2F800] font-bold sm:text-base' >WORKOUT LIBRARY</p>
                    <h1 className='text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl '>TRAIN WITH INTENT. LOG <br className='hidden md:block' />
                        EVERY SET.</h1>
                    <p className='text-sm leading-6 text-[#9CA3AF] sm:text-base'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into today's plan, and watch the week's work add up.</p>

                    <button className='bg-[#C2F800] text-black font-bold px-5 py-2 rounded-xl cursor-pointer hover:bg-green-500 mt-5'>BROWSE WORKOUTS</button>
                </div>
                <div>
                    <Image src={benner} alt='' />
                </div>
            </div>
        </div>

    );
};

export default Banner;