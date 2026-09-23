import React from 'react';
import benner from '../../public/banner.png'
import Image from 'next/image';
const Banner = () => {
    return (


        <div className='flex justify-between container mx-auto mt-20 items-center bg-[#15171D] p-15 border-amber-500 rounded-2xl '>
            <div className='space-y-4'>

                <p className='text-[#C2F800] font-bold' >WORKOUT LIBRARY</p>
                <h1 className='text-5xl font-bold '>TRAIN WITH INTENT. LOG <br />
                    EVERY SET.</h1>
                <p className='text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                    into today's plan, and watch the week's work add up.</p>

                <button className='bg-[#C2F800] text-black font-bold px-5 py-2 rounded-xl cursor-pointer hover:bg-green-500 mt-5'>BROWSE WORKOUTS</button>
            </div>
            <div>
                <Image src={benner} alt='' />
            </div>
        </div>

    );
};

export default Banner;