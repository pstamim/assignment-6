'use client'
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import logo from '../../public/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExerciseContext } from './context/Provider';
import { IoClose, IoMenu } from 'react-icons/io5';

const Navber = () => {
    const pathname = usePathname()
    const { addplane, saveExercise } = useContext(ExerciseContext)
    const [openmanu, setopenmanu] = useState<boolean>(false)

    return (

        <nav className='border-b border-[#242833] bg-[#090A0D]'>

            <div className='container mx-auto px-5'>
                <div className='flex h-20 items-center justify-between '>
                    <div className='flex items-center gap-2'>

                        <Image src={logo} alt=''
                            height={15}
                            width={30} />
                        <h1 className='text-xl font-bold'>FITLOG</h1>

                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex gap-1 items-center lg:gap-3 '>
                            <Link href='/homes'>
                                <li className={`font-bold px-5 py-2 rounded-3xl ${pathname === '/homes' ? 'bg-[#1A2312] text-[#C2F800]' : 'text-white'} `}>Workouts</li>
                            </Link>
                            <Link href='/myplane'>
                                <li className={`font-bold px-5 py-2 rounded-3xl ${pathname === '/myplane' ? 'bg-[#1A2312] text-[#C2F800]' : 'text-white'} `}>My Plan</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='hidden items-center gap-1 md:flex lg:gap-3'>
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
                    <div className='md:hidden'>
                        <button
                            onClick={() => setopenmanu(!openmanu)}
                            className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[#2D313B] text-white transition hover:bg-[#1d2027] md:hidden'
                        >
                            {
                                openmanu ? (
                                    <IoClose size={25} />
                                ) : (
                                    <IoMenu size={25} />
                                )

                            }

                        </button>
                    </div>

                </div>

            </div>
            {openmanu && (
                <div className='border-t border-[#242833] py-4 sm:hidden'>
                    <div className='flex flex-col gap-2'>

                        <Link href='/homes'
                            onClick={() => setopenmanu(false)}>
                            <li className={`font-bold px-5 py-2 rounded-3xl ${pathname === '/homes' ? 'bg-[#1A2312] text-[#C2F800]' : 'text-white'} `}>Workouts</li>
                        </Link>
                        <Link href='/myplane'
                            onClick={() => setopenmanu(false)}>
                            <li className={`font-bold px-5 py-2 rounded-3xl ${pathname === '/myplane' ? 'bg-[#1A2312] text-[#C2F800]' : 'text-white'} `}>My Plan</li>
                        </Link>
                        <Link href='/myplane'
                            onClick={() => setopenmanu(false)}>
                            <button className='flex items-center gap-3 hover: hover:bg-[#1d2027] hover:cursor-pointer px-4 py-2 rounded-2xl'>
                                <span className='text-xl font-bold cursor-pointer'>Plan</span>
                                <span className='flex items-center justify-center text-xl text-black font-bold bg-[#C2F800] rounded-full w-8 h-8 cursor-pointer '>{addplane.length}</span></button>
                        </Link>
                        <Link href='/myplane'
                            onClick={() => setopenmanu(false)}>
                            <button className='flex items-center gap-3 hover: hover:bg-[#1d2027] px-4 py-2 rounded-2xl'>
                                <span className='text-xl font-bold cursor-pointer'>Saved</span>
                                <span className='flex items-center justify-center text-xl text-white font-bold bg-black rounded-full w-9 h-9 border border-[#2D313B] cursor-pointer '>{saveExercise.length}</span>
                            </button>
                        </Link>

                    </div>

                </div>
            )}
        </nav>
    );
};

export default Navber;