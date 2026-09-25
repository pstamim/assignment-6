import React from 'react';
import { IExercise } from './types/exercise';
import Exercisecard from './sheard/exercisecard';


const getdatafetch = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await res.json()
    return data
}

const Home = async () => {
    const thelibrary = await getdatafetch()

    return (
        <div className='container mx-auto mt-15 '>
            <h1 className='text-4xl font-bold'>THE LIBRARY</h1>
            <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
            <div className='container mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-15 '>
                {thelibrary.map((exercise: IExercise) => {
                    return <Exercisecard key={exercise.id} exercise={exercise} />
                })}
            </div>
        </div>
    );
};

export default Home;