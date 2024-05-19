import React from 'react'

function ProgressBar({progress}) {
  return (
    <div className='bg-gray-400 w-full h-4  mt-3 rounded-full'>
        <div className='p-1 bg-primary h-4 rounded-full ' style={{width:`${progress}%`}}>
        
        </div>
        {`${Number(progress).toFixed(0)}%`}
    </div>
  )
}

export default ProgressBar