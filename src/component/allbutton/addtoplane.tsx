'use client'

import React, { useContext } from 'react';

import { ExerciseContext } from '../context/Provider';
import { IoBookmarkOutline, IoCalendarOutline } from 'react-icons/io5';
import { IExercise } from '../types/exercise';
import { toast } from 'react-toastify';


const Addtoplane = ({ details }: { details: IExercise }) => {
    const { addplane, setaddplane } = useContext(ExerciseContext)
    const { saveExercise, setSaveExercise } = useContext(ExerciseContext)

    const isadded = addplane.some((exercise: IExercise) => exercise.id === details.id)

    const saveadd = saveExercise.some((saveexercise: IExercise) => saveexercise.id === details.id)

    const handlesave = () => {
        if (saveadd) {
            toast.error(`${details.name} Save Card already added`)
            return
        }
        setSaveExercise([...saveExercise, details])
        toast.success(`${details.name} Save Card added`)
    }
    const handleaddplane = () => {

        if (isadded) {
            toast.error(`${details.name} is already added`)
            return
        }
        setaddplane([...addplane, details])
        toast.success(`${details.name} is added`)
    }
    return (
        <div className='flex gap-5 items-center'>

            <button onClick={() => handleaddplane()}

                className="flex items-center gap-2 bg-[#C2F800] text-black px-4 py-2 rounded-lg cursor-pointer">
                <IoCalendarOutline />
                Add to today's plan
            </button>
            <button onClick={() => handlesave()}
                className="flex items-center gap-2 border border-slate-700 px-4 py-2 rounded-lg cursor-pointer">

                <IoBookmarkOutline />
                Save for later
            </button>

        </div>
    );
};

export default Addtoplane;