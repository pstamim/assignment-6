
import Addtoplane from '@/component/allbutton/addtoplane';
import { IExercise } from '@/component/types/exercise';
import Image from 'next/image';






interface Iparamsprops {
    params: Promise<{
        id: number
    }>
}

const getdatafetch = async () => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog`)
    const data = await res.json()
    return data
}

const page = async ({ params }: Iparamsprops) => {
    const { id } = await params;
    const exercisedata = await getdatafetch()

    const details = exercisedata.find((workerout: IExercise) => String(workerout.id) === String(id)) as IExercise

    return (
        <div className='container mx-auto px-5 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-center gap-8 py-10 md:flex-row md:items-start md:gap-10'>

                <div className='group w-full max-w-md overflow-hidden rounded-2xl border border-slate-700 bg-[#15171e] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mt-10 '>

                    <Image className='h-175 w-130 object-cover ' src={details.image} alt=''
                        height={600}
                        width={350} />
                </div>
                <div className='space-y-4 mt-10'>
                    <h1 className='text-5xl font-semibold'>{details.name}</h1>
                    <p className="max-w-md break-words text-slate-400">{details.description}</p>

                    <div className='flex gap-4 '>

                        {details.muscleGroups[0] && (
                            <p className="bg-[#C2F800] py-1 px-4 rounded-xl text-black font-bold">
                                {details.muscleGroups[0]}
                            </p>
                        )}

                        {details.muscleGroups[1] && (
                            <p className="bg-[#C2F800] py-1 px-4 rounded-xl text-black font-bold">
                                {details.muscleGroups[1]}
                            </p>
                        )}
                    </div>


                    <div className="w-full max-w-md overflow-hidden rounded-xl border border-slate-800 bg-[#15171e]">

                        <div className="flex justify-between border-b border-slate-800 px-4 py-3">
                            <span className="text-xs font-medium text-slate-400">EQUIPMENT</span>
                            <span className="text-sm text-slate-200">{details.equipment}</span>
                        </div>

                        <div className="flex justify-between border-b border-slate-800 px-4 py-3">
                            <span className="text-xs font-medium text-slate-400">DIFFICULTY</span>
                            <span className="text-sm text-slate-200">{details.difficulty}</span>
                        </div>

                        <div className="flex justify-between border-b border-slate-800 px-4 py-3">
                            <span className="text-xs font-medium text-slate-400">SETS</span>
                            <span className="text-sm text-slate-200">{details.sets}</span>
                        </div>

                        <div className="flex justify-between border-b border-slate-800 px-4 py-3">
                            <span className="text-xs font-medium text-slate-400">REPS</span>
                            <span className="text-sm text-slate-200">{details.reps}</span>
                        </div>

                        <div className="flex justify-between border-b border-slate-800 px-4 py-3">
                            <span className="text-xs font-medium text-slate-400">DURATION</span>
                            <span className="text-sm text-slate-200">{details.duration} min </span>
                        </div>

                        <div className="flex justify-between border-b border-slate-800 px-4 py-3">
                            <span className="text-xs font-medium text-slate-400">CALORIES</span>
                            <span className="text-sm text-slate-200">
                                {details.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex justify-between px-4 py-3">
                            <span className="text-xs font-medium text-slate-400">RATING</span>
                            <span className="text-sm text-slate-200">{details.rating}</span>
                        </div>

                    </div>
                    <h1 className='text-2xl font-bold'>INSTRUCTIONS</h1>
                    <ol className='list-decimal pl-5 space-y-2'>
                        {details.instructions.map((instruction, index) =>
                            <li key={index}>{instruction}</li>)}
                    </ol>
                    <div className='flex items-center gap-4'>
                        <Addtoplane details={details} />

                    </div>

                </div>
            </div>

        </div>
    );
};

export default page;