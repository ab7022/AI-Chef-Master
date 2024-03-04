import React from 'react'
// import Customer from './Customer'
// import RD from './RD'
// import Footer from '../Footer/Footer'
// import img2 from '../Team/img2.jpg';
import i1 from './i1.jpg'
import i2 from './i2.jpg'
import i3 from './i3.jpg'
import i4 from './i4.jpg'

const LongTerm = () => {
  return (
    <>
      <div className='bg-cyan-300 min-h-screen md:pb-16'>
        <div className='flex justify-center items-center h-32 bg-cyan-600'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-serif py-4 px-6 md:px-8 lg:px-10 xl:px-12 text-center md:text-left'>
            Long Term Growth - Elevating Culinary Experiences, Expanding Horizons
          </h1>
        </div>

        <p className='text-2xl font-medium py-12 px-6 md:px-12 text-center md:text-left'>We are committed to pushing culinary boundaries and expanding our influence in the market. With a focus on user-centric experiences and foresight into the future, our growth oriented vision is a testament to our strategic goals and ambitions.</p>

        <div className='flex flex-col-reverse md:flex-row justify-center items-center py-16 px-6 md:px-0'>
          <div className='md:w-1/2'>
            <h1 className='text-3xl font-bold py-5 text-center md:text-left'>STRATEGICVISION:</h1>
            <p className='text-xl mb-8 text-center md:text-left'>We are committed to pushing culinary boundaries and expanding our influence in the market. With a focus on user-centric experiences and foresight into the future, our growth oriented vision is a testament to our strategic goals and ambitions</p>
          </div>
          <img className='h-72 w-full md:w-1/3 border-2 border-black rounded-lg md:ml-12' src={i1} alt="long term" />
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center py-16 px-6 md:px-0'>
          <img className='h-72 w-full md:w-1/3 border-2 border-black rounded-lg' src={i2} alt="long term" />
          <div className='md:w-1/2'>
            <h1 className='text-3xl font-bold py-5 text-center md:text-left md:ml-20'>B2BCOLLOBORATIONS:</h1>
            <p className='text-xl mb-8 text-center md:text-left md:ml-20'>Long Term Growth is synonymous with forging strong B2B collaborations, creating synergies with restaurants and culinary establishments. By providing a comprehensive suite of services, including order management, inventory control, analytics, invoicing, and menu designing, we empower our partners to streamline their operations and enhance overall efficiency.</p>
          </div>
        </div>

        <div className='flex flex-col-reverse md:flex-row justify-center items-center py-16 px-6 md:px-0'>
          <div className='md:w-1/2'>
            <h1 className='text-3xl font-bold py-5 text-center md:text-left'>INOVATION THROUGH DIVERSITY:</h1>
            <p className='text-xl mb-8 text-center md:text-left'>Diversifications the key to sustained success. By expanding our dish offerings, exploring new culinary frontiers, and staying attuned to emerging market trends, we ensure that our users always have exciting,relevant, and diverse options at their fingertips.</p>
          </div>
          <img className='h-72 w-full md:w-1/3 border-2 border-black rounded-lg md:ml-12' src={i3} alt="long term" />
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center py-16 px-6 md:px-0'>
          <img className='h-72 w-full md:w-1/3 border-2 border-black rounded-lg' src={i4} alt="long term" />
          <div className='md:w-1/2'>
            <h1 className='text-3xl font-bold py-5 text-center md:text-left md:ml-20'>LEADERIN CULINARY TECH:</h1>
            <p className='text-xl mb-8 text-center md:text-left md:ml-20'>Long Term Growth solidifies our position as a trailblazer in the culinary tech industry .By combining advanced technology with a deep understanding of user preferences and industry dynamics, we pave the way for sustained innovation, unparalleled user experiences, and lasting success.</p>
          </div>
        </div>
        <p className='text-2xl py-12 px-6 md:px-24 text-center md:text-left'>As we embark this journey, the Long Term Growth encapsulates our dedication to creating ala sting impact, not just in the kitchens of individuals but across the entire culinary landscape. It is more than a strategy; it s a commitment to excellence, evolution, and enduring success.</p>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default LongTerm