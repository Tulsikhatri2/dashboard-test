"use client"

import Image from 'next/image'
import React from 'react'
import background from "../../../assets/background-image.jpeg"
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  return (
    <div>
  <div className="relative w-full h-screen flex flex-row justify-end font-mono">
    <Image
      src={background}
      alt="background image"
      layout="fill"
      objectFit="cover"
      sizes="(max-width: 1200px) 100vw, (max-height: 768px) 40vh, 33vw"
      className="z-[-2]"
    />
    <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[30%] h-[80%] bg-pink-200 bg-opacity-30 m-5 mt-[4.5%] rounded-lg
      flex flex-col items-center justify-center">
      <p className="text-white underline text-lg md:text-xl">Login</p>
      <form className='flex flex-col mt-5 w-full items-center'>
        <input
          type="text"
          placeholder="Username"
          className="bg-white text-neutral-700 text-sm rounded-3xl block p-2.5 w-64 m-3 
          focus:outline-none focus:ring-0 focus:shadow-black focus:shadow-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-white text-neutral-700 text-sm rounded-3xl block p-2.5 w-64 m-1 
          focus:outline-none focus:ring-0 focus:shadow-black focus:shadow-md"
        />
        <button
          type="submit"
          className='bg-slate-800 py-2 border border-transparent text-center text-sm
          text-white shadow-md focus:bg-slate-700 hover:shadow-black hover:shadow-sm
          focus:shadow-none active:bg-slate-700 hover:bg-gray-400 hover:text-black rounded-full
          w-[40%] mt-5'>
          Login
        </button>
      </form>

      <p className='mt-20 text-center'>
        <span>Not a user?</span>
        <span className='text-pink-400 cursor-pointer underline' 
          onClick={() => router.push("/auth/register")}> REGISTER</span>
      </p>
    </div>
  </div>
</div>

  )
}

export default Login