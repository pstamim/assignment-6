import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png'

const Navber = () => {
    return (
        <nav className=' border-b border-[#15171D] pb-8'>

            <div className='flex justify-between container mx-auto mt-8 items-center'>
                <div className='flex gap-2 '>

                    <Image src={logo} alt=''
                        height={15}
                        width={30} />
                    <h1 className='text-xl font-bold'>FITLOG</h1>
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <li><a className='bg-[#1A2312] text-[#C2F800] px-5 py-2 rounded-3xl' href="">Workouts</a></li>
                        <li><a href="">My Plan</a></li>
                    </ul>
                </div>
                <div className='flex gap-5'>
                    <p>Plan</p>
                    <p>Saved</p>
                </div>
            </div>
        </nav>
    );
};

export default Navber;