import React from "react";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
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

function BackenddeveloperPage(props) {
  return (
    <>
      <div className="text-center">
        <h2 className="font-bold relative text-2xl md:text-4xl lg:text-5xl z-10 py-8 pt-20 text-center">
          AI CHEF MASTER
        </h2>
        <h2 className="text-center text-2xl">Backend Developer Internship</h2>
        <h2 className="text-center text-1xl">Remote Job | Posted Date:-</h2>
        <div className="flex justify-around">
          <button className="bg-green-600 hover:bg-green-700 group relative px-8 py-3 overflow-hidden font-medium rounded-xl border text-xl md:text-2xl shadow-2xl mr-8 my-8">
            <span className="text-white">I am Interested</span>
          </button>
          <button className="bg-green-600 hover:bg-green-700 group relative px-8 py-3 overflow-hidden font-medium rounded-xl border text-xl md:text-2xl shadow-2xl mr-8 my-8 pl-5">
            <span className="text-white">Refer a friend</span>
          </button>
        </div>
        <div className="flex justify-center space-x-3 my-5">
          <FacebookShareButton
            url={"https://facebook.com"}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={40} />
          </FacebookShareButton>
          <EmailShareButton
            url={"https://facebook.com"}
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={40} />
          </EmailShareButton>
          <LinkedinShareButton
            url={"https://linkedin.com"}
            className="Demo__some-network__share-button"
          >
            <LinkedinIcon size={40} />
          </LinkedinShareButton>
          <PinterestShareButton
            url={"https://facebook.com"}
            className="Demo__some-network__share-button"
          >
            <PinterestIcon size={40} />
          </PinterestShareButton>
          <TelegramShareButton
            url={"https://facebook.com"}
            className="Demo__some-network__share-button"
          >
            <TelegramIcon size={40} />
          </TelegramShareButton>
          <WhatsappShareButton
            url={"https://facebook.com"}
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={40} />
          </WhatsappShareButton>
        </div>
        <p className="px-3">Industry</p>
        <p className="px-3">Technology</p>
        <p className="px-3">Remote Job</p>
        <div>
          <h1 className="text-2xl px-5 font-bold my-7">About Us</h1>
          <p className="px-3 text-slate-700 my-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            cupiditate architecto magnam provident. Aut ipsa amet quod
            temporibus explicabo quasi a, adipisci rerum officiis, nihil,
            similique impedit accusantium rem voluptate dolorem aspernatur
            eveniet provident vero hic ut accusamus assumenda fugiat. A sint
            accusantium perspiciatis iure deserunt quis, ab laudantium veniam
            laborum consequuntur est illo voluptatum odit quos rerum aut saepe.
            Voluptatem aperiam minus sequi aspernatur pariatur qui dignissimos
            sunt magni nisi, dolor, asperiores dolorem necessitatibus, rem
            commodi temporibus illo ipsa incidunt laboriosam! Consequatur non,
            laudantium suscipit hic distinctio, quaerat tempora sint
            perspiciatis, ex amet dolore quod aperiam neque ratione cum.
          </p>
        </div>
        <div>
          <h1 className="text-2xl px-4 font-bold my-7">Job Description</h1>
          <p className="px-3 text-slate-700 my-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus repudiandae nemo commodi corporis, dicta dolorum
            officia neque, dolores magni provident iste laudantium! Dolorum
            asperiores excepturi at voluptas, maxime veritatis veniam
            consectetur id ipsum qui quos vitae necessitatibus, minus corrupti
            sunt deleniti. Maiores at fugit eaque provident quod quis cum
            distinctio in voluptatibus ullam, eum et reprehenderit sint ipsam
            quibusdam cumque magnam tempora ipsum ab, nemo, deserunt id veniam
            sunt incidunt! Temporibus repellat eos dignissimos commodi deleniti
            totam facilis accusamus dolor ullam ipsam? Dolorum ipsum commodi
            facilis incidunt adipisci, sit, enim perferendis, odit neque aperiam
            est. Necessitatibus nisi aliquam quae beatae?
          </p>
        </div>
        <div>
          <h1 className="text-2xl px-5 font-bold my-7">Job Responsibility</h1>
          <p className="px-3 text-slate-700 my-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis accusamus minus eaque nam suscipit sit facilis id
            architecto natus! Optio iure cumque soluta eos consequatur
            doloremque animi. Magnam sunt aliquid sapiente omnis reiciendis,
            distinctio nam illum nostrum atque ipsam doloribus nobis esse
            eligendi incidunt culpa pariatur nemo corporis impedit sit quisquam
            autem! Corporis neque dicta commodi aliquam ea quos voluptates.
            Possimus similique perferendis blanditiis sapiente? Ea, vitae quo
            veritatis pariatur assumenda sed impedit, tempora nihil doloremque
            enim error hic distinctio. Pariatur quam laborum quia nam,
            architecto minus maxime voluptates ratione. Aperiam excepturi
            cupiditate, corrupti eius mollitia sit quae autem architecto?
          </p>
        </div>
        <div>
          <h1 className="text-2xl px-5 font-bold my-7">Qualifications</h1>
          <p className="px-5 text-slate-700 my-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            tempore est ea nesciunt minima! Provident voluptate suscipit debitis
            facere rerum temporibus architecto dolorum tempore perferendis nobis
            recusandae itaque harum sed culpa voluptates necessitatibus
            accusantium, dolore expedita saepe. Illum, esse. Expedita, ut! Odio,
            amet provident sapiente expedita nobis culpa. Doloremque laudantium
            quis, saepe, minima porro assumenda vel modi iusto qui accusamus
            nobis impedit sapiente tempore consectetur! Reprehenderit veniam
            dolorem cupiditate. Soluta, harum perferendis voluptas rem doloribus
            molestiae nesciunt commodi dignissimos ut expedita atque in?
            Molestias voluptatum eligendi id obcaecati cumque earum sequi error!
            Repudiandae fugiat odio molestiae exercitationem quas totam
            obcaecati!
          </p>
        </div>
        <ul className="px-5 flex justify-around text-2xl text-blue-600 list-disc">
          <a href="/">
            <li>View all jobs</li>
          </a>
          <a href="/">
            <li>Visit website</li>
          </a>
          <a href="/">
            <li>News</li>
          </a>
          <a href="/">
            <li>Articles</li>
          </a>
        </ul>
        <div className="flex justify-around">
          <Link to="/resume-parser">
            <button className="bg-green-600 hover:bg-green-700 group relative px-8 py-3 overflow-hidden font-medium rounded-xl text-xl md:text-2xl shadow-2xl mr-8 my-8">
              <span className="text-white">I am Interested bro</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BackenddeveloperPage;
