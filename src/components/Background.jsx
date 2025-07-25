import React from 'react'

function Background() {
  return (
      <>
          <div className=' fixed z-[2] w-full h-screen'>
             <div className='absolute top-[5%] w-full py-10 flex justify-center text-xl text-zinc-800'>Documents</div>
             <h1 className=' absolute top-1/2 left-1/2 -translate-x-[45%] translate-y-[100%] font-semibold text-zinc-200 text-[13vw] leading-none tracking-tighter'>DOCS .</h1>
          </div>
    </>
  )
}

export default Background
