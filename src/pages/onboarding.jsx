import React, { useState } from 'react'

const Onboarding = () => {
    const [username, setUsername] = useState(" ");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
  return (
    <div className='flex min-h-screen items-center justify-center bg-[#13131a]'>
      <div className="w-full max-w-md rounded-xl bg-[#1c1c24] p-8 shadow-lg">
        <h2 className='mb-2 text-center text-5xl font-bold'>🖐️</h2>
        <h2 className='mb-6 text-center text-2xl font-bold text-white'>Welcome!, Let's get started</h2>

        <form onSubmit={()=>{}}>
            <div className="mb-4">
                <label htmlFor="username" className='mb-2 block text-sm text-gray-300'>
                    Username
                </label>
                <input type="text" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} className='w-full rounded-lg bg-neutral-900 px-4 py-3 text-neutral-400 focus:outline-none'/>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Onboarding
