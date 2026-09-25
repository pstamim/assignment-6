'use client'


import React, { createContext, ReactNode, useState } from 'react';
import { IExercise } from '../types/exercise';

interface IExerciseprops {
    addplane: IExercise[]
    setaddplane: React.Dispatch<React.SetStateAction<IExercise[]>>
    saveExercise: IExercise[]
    setSaveExercise: React.Dispatch<React.SetStateAction<IExercise[]>>

}

export const ExerciseContext = createContext<IExerciseprops>({
    addplane: [],
    setaddplane: () => { },
    saveExercise: [],
    setSaveExercise: () => { },

})

const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [addplane, setaddplane] = useState<IExercise[]>([])
    const [saveExercise, setSaveExercise] = useState<IExercise[]>([])


    const shearddata = {
        addplane,
        setaddplane,
        saveExercise,
        setSaveExercise

    }


    return (
        <ExerciseContext.Provider value={shearddata}>{children}</ExerciseContext.Provider>
    );
};

export default ContextProvider;