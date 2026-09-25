'use client'
import Image from 'next/image';
import React, { useContext } from 'react';
import logo from '../../public/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExerciseContext } from './context/Provider';

const Navber = () => {
    const pathname = usePathname()
    const { addplane, saveExercise } = useContext(ExerciseContext)

    return (

        <nav className=' pb-8 sticky top-0 z-50 border-b border-gray-800 bg-black'>

            <div className='flex justify-between container mx-auto mt-8 items-center'>
                <div className='flex gap-2 '>

                    <Image src={logo} alt=''
                        height={15}
                        width={30} />
                    <h1 className='text-xl font-bold'>FITLOG</h1>

                </div>
                <div>
                    <ul className='flex gap-3 items-center'>
                        <Link href='/homes'>
                            <li className={`font-bold px-5 py-2 rounded-3xl ${pathname === '/homes' ? 'bg-[#1A2312] text-[#C2F800]' : 'text-white'} `}>Workouts</li>
                        </Link>
                        <Link href='/myplane'>
                            <li className={`font-bold px-5 py-2 rounded-3xl ${pathname === '/myplane' ? 'bg-[#1A2312] text-[#C2F800]' : 'text-white'} `}>My Plan</li>
                        </Link>
                    </ul>
                </div>
                <div className='flex gap-5 items-center'>
                    <Link href='/myplane'>
                        <button className='flex items-center gap-3 hover: hover:bg-[#1d2027] hover:cursor-pointer px-4 py-2 rounded-2xl'>
                            <span className='text-xl font-bold cursor-pointer'>Plan</span>
                            <span className='flex items-center justify-center text-xl text-black font-bold bg-[#C2F800] rounded-full w-8 h-8 cursor-pointer '>{addplane.length}</span></button>
                    </Link>
                    <Link href='/myplane'>
                        <button className='flex items-center gap-3 hover: hover:bg-[#1d2027] px-4 py-2 rounded-2xl'>
                            <span className='text-xl font-bold cursor-pointer'>Saved</span>
                            <span className='flex items-center justify-center text-xl text-white font-bold bg-black rounded-full w-9 h-9 border border-[#2D313B] cursor-pointer '>{saveExercise.length}</span>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navber;