import React from 'react';
import { IExercise } from '../types/exercise';
import Image from 'next/image';
import { IoMdTime } from 'react-icons/io';
import icon from '../../../public/Vector (1).png'
import { MdOutlineStarOutline } from 'react-icons/md';
import Link from 'next/link';

const Exercisecard = ({ exercise }: { exercise: IExercise }) => {
    return (
        <Link href={`/details/${exercise.id}`}>
            <div className='group w-full max-w-md overflow-hidden rounded-2xl border border-slate-700 bg-[#15171e] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl '>

                <Image className='overflow-hidden w-full h-64 object-cover' src={exercise.image} alt=''
                    height={450}
                    width={350} />

                <div className='space-y-2 p-5'>

                    <div className='flex gap-4 '>

                        {exercise.muscleGroups[0] && (
                            <p className="bg-[#C2F800] py-1 px-4 rounded-xl text-black font-bold">
                                {exercise.muscleGroups[0]}
                            </p>
                        )}

                        {exercise.muscleGroups[1] && (
                            <p className="bg-[#C2F800] py-1 px-4 rounded-xl text-black font-bold">
                                {exercise.muscleGroups[1]}
                            </p>
                        )}
                    </div>
                    <h1 className='text-2xl font-bold'>{exercise.name}</h1>
                    <p className='text-[#9CA3AF]'>{exercise.equipment}</p>
                    <div className="divider" />
                    <div className='flex gap-4'>

                        <div className='flex items-center gap-1'>
                            <IoMdTime />
                            <p className='text-[#9CA3AF]'>{exercise.duration} min</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Image src={icon} alt=''/>
                            <p className='text-[#9CA3AF]'>{exercise.caloriesBurned} kcal</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MdOutlineStarOutline />
                            <p className='text-[#9CA3AF]'>{exercise.rating}</p>
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default Exercisecard;