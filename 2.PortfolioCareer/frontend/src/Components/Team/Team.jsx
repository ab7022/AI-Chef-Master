import React from 'react';
import pp from './PP.jpg';
import sg from './SG.jpg';
import ss from './SS.jpg';
import cc from './CC.jpg';
import TeamMember from './TeamMember';

const Team = () => {
  return (
    <>
      <div className='p-6 bg-gradient-to-r from-cyan-300 to-neutral-50 min-h-screen w-full h-[1000px]'>
        <div className='flex justify-center items-center h-32 bg-cyan-600 border rounded-lg mb-8'>
          <h1 className='text-5xl font-bold text-white font-serif py-8'>OUR TEAM</h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-y-5 md:gap-x-6 mb-8 md:mb-32 mt-8 md:mt-24'>
          <TeamMember imageSrc={pp} heading='Prem Patil' pos='CEO' edu='Education:- B.Sc (IT)' desc='The heart and Soul of the Company his Imagination bring this idea into reality' />
          <TeamMember imageSrc={sg} heading='Shefali Goyal' pos='COO' edu='Education:- B.Tech (CSE)' desc='Our COO handles the Operations activities just like a head of an Orchestra.' />
          <TeamMember imageSrc={ss} heading='Saurabh Kadam' pos='CTO' edu='Education:- M.Sc (IT)' desc='Our CTO is a Technology Wizard harmonizing innovation and strategy for the betterment of the Company.' />
          <TeamMember imageSrc={cc} heading='Chenab Chavan' pos='CMO' edu='Education:- PGDM Entrepreneurship' desc='Our CMO is a marketing Champ he makes campaigns that resonates with clients and captivates their hearts and minds.' />
        </div>
      </div>
    </>
  );
};

export default Team;
