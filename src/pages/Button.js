import React from 'react'

export const Button = ({children}) => {
  return (
    <button className='font-medium w-64 text-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... text-white rounded-xl dark:text-black'>
    {children}
    </button>
  )
}

