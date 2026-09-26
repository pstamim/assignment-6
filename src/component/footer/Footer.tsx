import Image from 'next/image';

import logo from '../../../public/logo.png'

const Footer = () => {
    return (
        <footer className='bg-[#090A0D] mt-20 border-t border-gray-800 '>
            <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-5 py-8 text-center sm:flex-row sm:px-6 sm:py-10 sm:text-left'>
                <div className='flex gap-2 '>

                    <Image src={logo} alt=''
                        height={15}
                        width={30} />
                    <h1 className='text-xl font-bold'>FITLOG</h1>
                </div>
                <div className='text-[#6B7280]'>
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </div>
            </div>
        </footer>
    );
};

export default Footer;