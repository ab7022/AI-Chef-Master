import React from 'react'

function Banner() {
  return (
    <div className='mt-36 max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-2 py-14 '>
        <h1 className='text-5xl font-bold text-primary mb-3'>Find your Job Today</h1>

        <form action="">
            <div>
                <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-withon:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full '>
                    <input type="text" name='title' id='title' placeholder='Hello Ji' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-800 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 ' />
                </div>
            </div>
        </form>




    </div>

  )
}

export default Banner

