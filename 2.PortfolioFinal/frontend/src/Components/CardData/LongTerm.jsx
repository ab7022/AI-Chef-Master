import React from 'react';
import i1 from './i1.jpg';
import i2 from './i2.jpg';
import i3 from './i3.jpg';
import i4 from './i4.jpg';

const sectionData = [
  {
    title: 'STRATEGIC VISION:',
    content: 'We are committed to pushing culinary boundaries and expanding our influence in the market. With a focus on user-centric experiences and foresight into the future, our growth-oriented vision is a testament to our strategic goals and ambitions.',
    image: i1,
  },
  {
    title: 'B2B COLLABORATIONS:',
    content: 'Long Term Growth is synonymous with forging strong B2B collaborations, creating synergies with restaurants and culinary establishments. By providing a comprehensive suite of services, including order management, inventory control, analytics, invoicing, and menu designing, we empower our partners to streamline their operations and enhance overall efficiency.',
    image: i2,
  },
  {
    title: 'INNOVATION THROUGH DIVERSITY:',
    content: 'Diversification is the key to sustained success. By expanding our dish offerings, exploring new culinary frontiers, and staying attuned to emerging market trends, we ensure that our users always have exciting, relevant, and diverse options at their fingertips.',
    image: i3,
  },
  {
    title: 'LEADER IN CULINARY TECH:',
    content: 'Long Term Growth solidifies our position as a trailblazer in the culinary tech industry. By combining advanced technology with a deep understanding of user preferences and industry dynamics, we pave the way for sustained innovation, unparalleled user experiences, and lasting success.',
    image: i4,
  },
];

const LongTerm = () => {
  return (
    <>
      <div className='bg-cyan-300 min-h-screen md:pb-16'>
        <div className='flex justify-center items-center h-32 bg-cyan-600'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-serif py-4 px-6 md:px-8 lg:px-10 xl:px-12 text-center md:text-left'>
            Long Term Growth - Elevating Culinary Experiences, Expanding Horizons
          </h1>
        </div>

        <p className='text-2xl font-medium py-12 px-6 md:px-12 text-center md:text-left'>We are committed to pushing culinary boundaries and expanding our influence in the market. With a focus on user-centric experiences and foresight into the future, our growth-oriented vision is a testament to our strategic goals and ambitions.</p>

        {sectionData.map((section, index) => (
          <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} justify-center items-center w-full gap-8 md:gap-12 mx-auto my-12 px-4 sm:px-6 lg:px-8`}>
            <img className='h-72 w-full md:w-1/3 border-2 border-black rounded-lg md:ml-12' src={section.image} alt={`Section ${index + 1}`} />
            <div className='md:w-1/2 md:ml-20 flex flex-col justify-center gap-6 md:gap-12'>
              <h1 className='text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left'>{section.title}</h1>
              <p className='text-lg sm:text-lg  md:text-xl text-center md:text-left'>{section.content}</p>
            </div>
          </div>
        ))}

        <p className='text-2xl py-12 px-6 md:px-24 text-center md:text-left'>As we embark on this journey, the Long Term Growth encapsulates our dedication to creating a lasting impact, not just in the kitchens of individuals but across the entire culinary landscape. It is more than a strategy; it's a commitment to excellence, evolution, and enduring success.</p>
      </div>
    </>
  );
};

export default LongTerm;