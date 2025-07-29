import React from 'react'

const Navbar = () => {
  return (
    <div className='max-w-6xl mx-auto mt-2'>
    <div className='flex justify-between  '>
        <h1 className='text-2xl p-4'>Logo</h1>
        <nav className='flex border-2 items-center rounded-2xl p-4 border-[#31165C]' >
            <p className='NavLink'>Home</p>
            <p className='NavLink'>services</p>
            <p className='NavLink'>Projects</p>
            <p className='NavLink'>Blog</p>
            <p className='NavLink'>about</p>
            <button className='relative ml-2 py-2 px-3 rounded-lg  font-medium text-sm
              bg-gradient-to-b from-[#190d2e] to-[#4a208a]  shadow-[0px_0px_12px_0px_#8c45ff] 
              '>
                <span className='text-lg'>Contact Now</span>
        </button>

        </nav>
    </div>
    </div>

  )
}

export default Navbar