import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { Zoom, Fade, Bounce, Slide } from 'react-reveal';
const TeamMember = ({ imageSrc, heading, pos, linkedIn, edu, desc }) => {

    return (
        <div className='p-4 mt-28 custom-team-bg border-2 custom-border team-member rounded-lg transition duration-300 ease-in-out transform hover:scale-105'>
            <Fade>
                <Bounce >
                    <div className='custom-team-bg border-2 custom-border ml-3 mt-[-6rem] p-[1rem] h-[10rem w-[10rem] rounded-full shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105'>
                        <Zoom>
                            <img src={imageSrc} className='h-[8rem] w-[8rem] rounded-full' alt='' />
                        </Zoom>
                    </div>
                </Bounce>
                <div className='p-4'>
                    <Slide bottom>
                        <h3 className='custom-text text-2xl mb-2'>{heading}</h3>
                        <h5 className="custom-text-secondary font-normal mb-3">{pos}</h5>
                    </Slide>
                    <ul className="flex gap-2 mb-3 pl-0">
                        <Zoom>
                            <li>
                                <a href="/" target="_blank" rel="noreferrer" className='text-[#316FF6] hover:text-[#254e9a] transition-all duration-300 ease-in-out transform hover:scale-105'>
                                    <Fade>
                                        <FaFacebookSquare size={25} />
                                    </Fade>
                                </a>
                            </li>
                        </Zoom>
                        <Bounce>
                            <li>
                                <a href={linkedIn} target='_blank' rel="noreferrer" className='text-[#0A66C2] hover:text-[#0d4d78] transition-all duration-300 ease-in-out transform hover:scale-105'>
                                    <Fade>
                                        <SiLinkedin size={25} />
                                    </Fade>
                                </a>
                            </li>
                        </Bounce>
                        <Zoom>
                            <li>
                                <a href="/" target="_blank" rel="noreferrer" className='text-[#14171A] hover:text-[#0d0f11] transition-all duration-300 ease-in-out transform hover:scale-105'>
                                    <Fade>
                                        <FaXTwitter size={25} />
                                    </Fade>
                                </a>
                            </li>
                        </Zoom>
                    </ul>
                    <Slide bottom>
                        <p className='custom-text text-base'>{edu}</p>
                        <p className='custom-text text-base'>{desc}</p>
                    </Slide>
                </div>
            </Fade>
        </div>
    );
};

export default TeamMember;
