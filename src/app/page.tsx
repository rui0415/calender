"use client"
import handleClick from "./action";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pb-8 pt-20 sm:pb-1 sm:pt-10 lg:pb-10 lg:pt-10">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Inovative Calender App
            </h1>
            <p className="mt-4 text-xl">
            Versatile and user-friendly calendar app designed to organize and
             manage all your daily schedules efficiently.
            </p>
          </div>
          <div>
            <div className="mt-10">

                <main className="flex py-5">
                <button onClick={()=>handleClick({state:"login"})} className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Log in</button>
                <button onClick={()=>handleClick({state:"signin"})} className="ml-8 pt-3"><span className="border-b-2 border-indigo-600">Sign in</span></button>
                </main>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}