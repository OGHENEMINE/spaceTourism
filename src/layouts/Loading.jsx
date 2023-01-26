import React from 'react'

function Loading() {
  return (
    <div className='bg-gray-600 text-white gap-1 text-2xl font-medium h-screen tracking-wider w-full flex flex-col items-center justify-center'>
    <span className='inline-block rounded-full animate-spin w-5 h-5 border-4 border-t-transparent border-white'></span>
    <p className='animate-pulse'>Loading</p>
    </div>
  )
}

export default Loading