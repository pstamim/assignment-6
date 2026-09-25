'use client'
import { ExerciseContext } from '@/component/context/Provider';
import icon from '../../../public/Vector (1).png'
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineStarOutline } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';
import { IExercise } from '@/component/types/exercise';
import { toast } from 'react-toastify';


const Page = () => {
    const { addplane, setaddplane, saveExercise, setSaveExercise } = useContext(ExerciseContext)
    const [addtab, setaddtab] = useState('Today’s Plan')

    const [sortby, setSortby] = useState('duration')

    const handleremove = (id: number) => {
        if (addtab === 'Today’s Plan') {
            setaddplane(addplane.filter((exercise: IExercise) => exercise.id !== id))
            toast.error("Remove today's plan")
        } else {
            setSaveExercise(saveExercise.filter((exercise: IExercise) => exercise.id !== id))
            toast.error('Remove Save latter')
        }

    }

    const display = addtab === 'Today’s Plan' ? addplane : saveExercise
    const sortedDisplay = [...display].sort((a, b) => {

        if (sortby === 'duration') {
            return a.duration - b.duration;
        }

        if (sortby === 'calories') {
            return a.caloriesBurned - b.caloriesBurned;
        }

        if (sortby === 'rating') {
            return a.rating - b.rating;
        }

        return 0;

    });
    return (
        <div className='flex justify-between container mx-auto mt-10 '>
            <div className='space-y-3'>

                <h1 className='text-4xl font-bold'>MY PLAN</h1>
                <p className='text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>

                <div className='flex justify-center gap-100 mt-10 border border-slate-800 bg-[#13161D] rounded-2xl p-10 pr-100 '>
                    <div>
                        <p className='text-[#8A92A0]'>Exercises</p>
                        <h1 className='text-5xl font-bold text-[#C2F800]'>{sortedDisplay.length}</h1>
                    </div>
                    <div className='border-l border-[#242833] pl-5'>
                        <p className='text-[#8A92A0] border-l border-slate-800'>Minutes</p>
                        <h1 className='text-5xl font-bold'>{sortedDisplay.map(time => time.duration).reduce((acc, sum) => {
                            return acc + sum
                        }, 0)}</h1>
                    </div>
                    <div className='border-l border-[#242833] pl-5'>
                        <p className='text-[#8A92A0]'>Calories</p>
                        <h1 className='text-5xl font-bold'>{sortedDisplay.map(calorise => calorise.caloriesBurned).reduce((acc, sum) => {
                            return acc + sum
                        }, 0)}</h1>
                    </div>
                </div>
                <div className='flex justify-between'>

                    <div className='flex  w-fit items-center rounded-xl border border-[#242833] bg-[#12151b] p-1 mt-10'>
                        <button onClick={() => setaddtab('Today’s Plan')}
                            className={`rounded-lg px-5 py-2 cursor-pointer text-xs font-medium transition ${addtab === 'Today’s Plan' ? "bg-[#20252e] text-white" : "text-slate-500 hover:text-white"}`}>Today’s Plan</button>
                        <button onClick={() => setaddtab('Saved')}
                            className={`rounded-lg px-5 py-2 cursor-pointer text-xs font-medium transition
                            ${addtab === 'Saved' ? 'bg-[#20252e] text-white' : "text-slate-500 hover:text-white"}
                         hover:text-white`}>Saved</button>
                    </div>

                    <div className="flex items-center gap-3">
                        <label className="text-sm text-[#8A92A0]">sortby</label>
                        <select
                            value={sortby}
                            onChange={(e) => setSortby(e.target.value)}
                            className="cursor-pointer rounded-xl border border-slate-800 bg-[#13161D] px-4 py-3 text-sm text-white outline-none focus:border-[#C2F800]">

                            <option value="duration">duration</option>
                            <option value="calories">calories</option>
                            <option value="rating">rating</option>

                        </select>
                    </div>
                </div>

                <div className='flex flex-col gap-4 mt-10'>
                    {sortedDisplay.length === 0 ? (
                        <div className="flex min-h-[285px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-[#0D0F12] p-6 text-center">
                            <h2 className="text-2xl font-bold text-white">
                                NOTHING HERE YET  </h2>
                            <p className="mt-2 text-sm text-[#8A92A0]">
                                Browse the library and add a lift to get today moving. </p>
                            <Link href="/homes">
                                <button className="mt-6 rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#b0e600] cursor-pointer">
                                    Go to workouts</button>
                            </Link>
                        </div>

                    ) : (
                        sortedDisplay.map((exercise) => <div className='flex items-center justify-between rounded-2xl border border-slate-800 bg-[#14171D] p-5' key={exercise.id}>
                            <div className='flex justify-between items-center gap-5'>

                                <div className='h-20 w-32 shrink-0 overflow-hidden rounded-2xl'>

                                    <Image src={exercise.image} alt=''
                                        height={200}
                                        width={120}
                                        className='h-full w-full object-cover' />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='text-2xl font-bold'>{exercise.name}</h1>
                                    <p className='text-[#9CA3AF]'>{exercise.equipment}</p>

                                    <div className='flex gap-5 items-center'>

                                        <div className='flex items-center gap-1'>
                                            <IoMdTime className='text-[#C2F800]' />
                                            <p className='text-[#9CA3AF]'>{exercise.duration} min</p>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <Image className='text-[#C2F800] text-xl' src={icon} alt='' />
                                            <p className='text-[#9CA3AF]'>{exercise.caloriesBurned} kcal</p>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <MdOutlineStarOutline className='text-[#C2F800] text-xl' />
                                            <p className='text-[#9CA3AF]'>{exercise.rating}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4'>

                                <Link href={`/details/${exercise.id}`}>
                                    <button className='rounded-full border border-slate-600 px-5 
                                py-2 text-sm text-white cursor-pointer'>View Details</button>
                                </Link>
                                {addtab === "Today’s Plan" && (

                                    <button className='rounded-full bg-[#C2F800] cursor-pointer px-5 py-2 text-sm font-bold text-black'> ✓Mark as Done</button>
                                )}
                                <button onClick={() => handleremove(exercise.id)}
                                    className='flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-[#1d2027] hover:text-white cursor-pointer'>
                                    <IoClose size={20} /></button>

                            </div>
                        </div>)

                    )}

                </div>
            </div>

        </div>
    );
};

export default Page;