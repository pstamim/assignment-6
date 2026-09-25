import Image from 'next/image';

import logo from '../../../public/logo.png'

const Footer = () => {
    return (
        <footer className='bg-[#090A0D] mt-20 border-t border-gray-800 '>
            <div className='flex justify-between container mx-auto py-10'>
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