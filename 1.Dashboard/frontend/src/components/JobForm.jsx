import React from 'react'
// import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom';

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

function JobForm(props) {

   


  return (
    <>
    <div>
    <h2 className='font-bold relative text-2xl md:text-4xl lg:text-5xl z-10 py-8 pt-20 text-center'>
      AI CHEF MASTER</h2>
      <h2 className='text-center text-2xl'>Backend Developer Internship</h2>
      <h2 className='text-center text-1xl'>Remote Job | Posted Date:-</h2>
      <div className='flex justify-around'>
      <button className="bg-green-600 hover:bg-green-700 group  relative px-8 py-3 overflow-hidden font-medium rounded-xl border  text-xl md:text-2xl shadow-2xl  mr-8 my-8 ">
      
      <span className=" text-white">I am Interested</span>
      </button>
      <button className="bg-green-600 hover:bg-green-700 group  relative px-8 py-3 overflow-hidden font-medium rounded-xl border  text-xl md:text-2xl shadow-2xl  mr-8 my-8 pl-500">
      
      <span className=" text-white">Refer a friend</span>
      </button>
    </div>
    <div className='text-center'>
    <FacebookShareButton
          url={"https://facebook.com"}
          className="Demo__some-network__share-button mx-3"
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>

    <EmailShareButton
          url={"https://facebook.com"}
          className="Demo__some-network__share-button mx-3"
        >
          <EmailIcon size={40} round />
        </EmailShareButton>

    <LinkedinShareButton
          url={"https://linkedin.com"}
          className="Demo__some-network__share-button mx-3"
        >
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>

    <PinterestShareButton
          url={"https://facebook.com"}
          className="Demo__some-network__share-button mx-3"
        >
          <PinterestIcon size={40} round />
        </PinterestShareButton>

    <TelegramShareButton
          url={"https://facebook.com"}
          className="Demo__some-network__share-button mx-3"
        >
          <TelegramIcon size={40} round />
        </TelegramShareButton>   

    <WhatsappShareButton
          url={"https://facebook.com"}
          className="Demo__some-network__share-button mx-3"
        >
          <WhatsappIcon size={40} round />
        </WhatsappShareButton> 
        </div>
        <p className='px-6'>Industry</p>
        <p className='px-6'>Technology</p>
        <p className='px-6'>Remote Job</p>
<div className='px-6'>


        <div className=''>
        <h1 className='text-2xl px-5 font-bold my-7'>About Us</h1>
        <p className='px-3 text-slate-700 my-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quis unde quia velit? Impedit ab, saepe cupiditate nostrum iste fugit voluptate, blanditiis, dignissimos incidunt libero dolorum doloremque. Doloribus laborum, rerum explicabo cupiditate dolorum numquam rem ex iste vel temporibus laboriosam labore itaque sunt consequatur non vero totam quas! Itaque eum porro eveniet officia veritatis eaque, fugit velit. Magni architecto ex amet sequi. Ea aperiam assumenda repellendus exercitationem excepturi culpa nulla, impedit necessitatibus quibusdam doloremque explicabo dignissimos non blanditiis maiores tenetur ex corrupti dolore molestiae quasi odit. Doloribus nulla enim minima ex quidem tempore ab accusantium in a, ea laborum est!</p>
        </div>

        <div>
        <h1 className='text-2xl px-4 font-bold my-7'>Job Decription</h1>
        <p className='px-3 text-slate-700 my-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nisi cum delectus reprehenderit exercitationem omnis id saepe, maiores consequuntur eum quidem est facilis animi provident obcaecati nulla sint illo impedit. Commodi deleniti provident fugiat architecto id soluta. Vel odit quo laborum animi id voluptate totam, neque, adipisci repellendus veniam quam iure magni dicta earum rem exercitationem excepturi, aliquam maxime eligendi. Nisi, soluta aspernatur ut architecto, aliquam ducimus natus porro laborum nesciunt consequatur recusandae consequuntur iste dignissimos, quaerat quae. Atque voluptate enim asperiores, ullam quos iste explicabo sed magni nostrum ex ducimus velit dignissimos pariatur quaerat incidunt natus saepe a maxime.</p>
        </div>

        <div>
        <h1 className='text-2xl px-5 font-bold my-7'>Job Responsibility</h1>
        <p className='px-3 text-slate-700 my-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium quasi aliquam, possimus architecto rem labore repellendus, eius unde magnam atque. Voluptatum consequuntur labore, maiores velit ipsum autem reprehenderit iusto minus impedit quidem ea vel tempora natus omnis consectetur assumenda incidunt mollitia adipisci dolores nesciunt! Iste nam minus tempore nihil fugiat perspiciatis necessitatibus, molestiae itaque non a adipisci eos reiciendis quisquam odio natus aperiam nesciunt, quaerat ducimus quod! Itaque voluptas officiis sed id placeat, iure repellendus laudantium, eligendi iusto aliquid optio omnis quia corrupti totam, nostrum mollitia voluptatem quibusdam labore non eos! Ab doloribus ratione esse necessitatibus quia? Cum, laboriosam?</p>
        </div>

        <div>
        <h1 className='text-2xl px-5 font-bold my-7'>Qualifications</h1>
        <p className='px-5 text-slate-700 my-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum temporibus reprehenderit beatae laboriosam neque, doloribus in eveniet inventore et sunt blanditiis dolor, sit dignissimos praesentium a. Perspiciatis laudantium magni illum autem corrupti ea a sequi itaque sapiente modi aspernatur repudiandae et distinctio praesentium dolorem, optio eum, porro cum blanditiis excepturi commodi saepe. Sit, ipsam quasi voluptas eaque reiciendis rerum doloremque! Ratione eaque minus quia cum adipisci labore voluptatem iste. Nisi explicabo eius cumque sequi soluta ad, harum quas dolor id similique unde illum quia accusamus omnis architecto, nulla ducimus libero doloribus laborum. Explicabo tempora ut earum eveniet. Perspiciatis, hic?</p>
        </div >
        </div>
        <ul className='px-5 mx-[6rem]  flex md:flex-row flex-col justify-around text-2xl text-blue-600 list-disc'>
        <a href="/"><li>View all jobs</li></a>
        <a href="/"><li>Visit website</li></a>
        <a href="/"><li>News</li></a>
        <a href="/"><li>Articles</li></a>
        </ul>
      <div className='flex justify-around'>
      <Link to='/jobopenings'>
      <button className="bg-green-600 hover:bg-green-700 group  relative px-8 py-3 overflow-hidden font-medium rounded-xl   text-xl md:text-2xl shadow-2xl  mr-8 my-8">
      <span className=" text-white">I am Interested</span>
      </button>
      </Link>
    </div>
   
    </div>
    </>
  )
}

export default JobForm