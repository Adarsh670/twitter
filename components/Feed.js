import { SparklesIcon } from '@heroicons/react/24/outline'
import React from 'react'
// import {
  
//   } from "@heroicons/react/24/outline";
const Feed = () => {
  return (
    <div className='xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
            <div className="hoverEffect flex items-center justify-center p-0 ml-auto">
              <SparklesIcon className="h-5"/>
            </div>
        </div>
    </div>
  )
}

export default Feed