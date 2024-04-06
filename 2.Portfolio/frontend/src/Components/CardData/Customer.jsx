import React from "react";
import { Fade, Slide } from "react-reveal";
import { v4 as uuidv4 } from "uuid";
import "animate.css";

const AnimatedCard = ({ imageUrl, imageAlt, heading, description, index }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} justify-center items-center w-full gap-8 md:gap-12 mx-auto my-12 px-4 sm:px-6 lg:px-8`}
    >
      <Fade left={index % 2 !== 0} right={index % 2 === 0}>
        <img
          src={imageUrl}
          className="w-full h-64 md:h-96 md:w-1/2 rounded-lg shadow-lg"
          alt={imageAlt}
        />
      </Fade>
      <div className="relative flex flex-col justify-center gap-6 md:gap-12 md:pt-0 items-center max-w-md md:max-w-[400px]">
        <Slide left={index % 2 === 0} right={index % 2 !== 0}>
          <h3 className="custom-text text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left">
            {heading}
          </h3>
        </Slide>
        <div className="w-[300px] h-[300px] z-1 rounded-full absolute top-[-25px] blur-3xl bg-[#8bfb451c]" />
        <Slide left={index % 2 === 0} right={index % 2 !== 0}>
          <p className="custom-text-secondary text-lg sm:text-lg md:text-xl text-center md:text-left">
            {description}
          </p>
        </Slide>
      </div>
    </div>
  );
};
const sectionData = [
  {
    heading: 'Customer-Centric Approach:',
    description: 'Our commitment is centered around putting customers first, ensuring their needs and satisfaction drive every decision we make.',
    imageUrl: "https://info.ehl.edu/hubfs/Customer%20centricity-1.jpeg",
  },
  {
    heading: 'Seamless User Experience:',
    description: 'We prioritize creating a seamless and enjoyable user experience, aiming to exceed customer expectations at every touchpoint',
    imageUrl: 'https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2020/03/omnichannel-seamless-retail-experience.jpg',
  },
  {
    heading: 'Responsive Customer Support:',
    description: 'Our dedicated support team is available around the clock to address your queries and provide timely assistance, ensuring you always feel supported.',
    imageUrl: 'https://media.istockphoto.com/id/1059548978/photo/technical-support-concept-business-person-touching-helpdesk-icon-on-screen-hotline-assistance.jpg?s=612x612&w=0&k=20&c=ur4WfDWZzBWZ4-k8UdZ5SPxJ9M4r1uRAsgFx6GoBs-4=',
  },
  {
    heading: 'Product Quality and Reliability:',
    description: 'Quality and reliability are at the core of what we do. We strive to deliver products that not only meet but exceed your expectations in terms of performance and durability',
    imageUrl: 'https://media.istockphoto.com/id/683334642/photo/quality-assurance-mechanism-of-metal-cogwheels-3d.jpg?s=612x612&w=0&k=20&c=A5xcmoGaxDN8igsXSQhW1WdHMB1JtDStAOId2uI-sO4=',
  },
];
const Customer = () => {
  return (
    <>
      <div className="h-full min-h-screen w-full">
        <div style={{ backgroundColor: 'rgba(0, 84, 79, 0.5)' }} className="flex justify-center items-center h-28">
          <h1 style={{ textShadow: '2px 0.5px 0.5px rgba(0, 0, 0, 0.5)' }} className='bg-green-500 text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-serif py-4 px-6 md:px-8 lg:px-10 xl:px-12 text-center md:text-left'>
            CUSTOMER PRIORITIES
          </h1>
        </div>

        <div className="mt-6">
          {sectionData.map((obj, index) => (
            <AnimatedCard key={uuidv4()} index={index} {...obj} />
          ))}
        </div>

      </div>
    </>
  );
};

export default Customer;