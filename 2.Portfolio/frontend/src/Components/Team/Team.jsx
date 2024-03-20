// Team.jsx

import React from 'react';
import TeamMember from './TeamMember';
import pp from './PP.jpg';
import sg from './SG.jpg';
import ss from './SS.jpg';

const teamMembers = [
  {
    imageSrc: pp,
    heading: 'Prem Patil',
    pos: 'CEO',
    likedIn: 'https://www.linkedin.com/in/prem-patil143/',
    edu: 'Education: Bachelor of Science (IT)',
    desc: 'The heart and Soul of the Company his Imagination brings this idea into reality',
  },
  {
    imageSrc: sg,
    heading: 'Shefali Goyal',
    pos: 'COO',
    linkedIn: 'https://www.linkedin.com/in/shefali-goyal-507a08211/',
    edu: 'Education:- Bachelor of Technology (CSE)',
    desc: 'Our COO handles the Operations activities just like a head of an Orchestra.',
  },
  {
    imageSrc: ss,
    heading: 'Saurabh Kadam',
    pos: 'CTO',
    linkedIn: 'https://www.linkedin.com/in/saurabh-kadam6998/',
    edu: 'Education:- Master Of Science (IT)',
    desc: 'Our CTO is a Technology Wizard harmonizing innovation and strategy for the betterment of the Company.',
  },
 ];

const Team = () => {
  return (
    <div className='p-6 min-h-screen w-full h-[90vh]'>
      <div className='flex justify-center items-center h-20 bg-cyan-600 border rounded-lg mb-4'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif py-4'>
          OUR TEAM
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mb-5 place-content-center content-stretch'>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            imageSrc={member.imageSrc}
            heading={member.heading}
            pos={member.pos}
            edu={member.edu}
            desc={member.desc}
            linkedIn={member.linkedIn}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
