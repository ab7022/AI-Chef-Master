import React from "react";
import TempJobsData from "../Data/TempJobsData";
import JobCard from "../components/JobCard";
import { useState } from "react";
import "../styling/JobPage.css"
// import SearchBar from "../components/SearchBar";
import "../styling/SearchBar.css"
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
function JobsPage() {
 
  // searchbar data 
  const [filteredJobs, setFilteredJobs] = useState(TempJobsData);

  const [isActive,setIsActive]=useState(false);
    const [isJobActive,setIsJobActive]=useState(false);
    const [isLocationActive,setIsLocationActive]=useState(false);
    const [isDurationActive,setIsDurationActive]=useState(false);
    const [selected,setSelected]=useState({"JobType":"JobType","Location":"Location","Duration":"Duration"});
    const options =[["Intern","Full Time"],["Remote","In Office"],["3 Months","6 Months","Contract"]];

    // console.log(selected);
    const searchData = () => {
      console.log("clicked here ")
      const filtered = TempJobsData.filter((job) => {
       
        return (

          ((selected.JobType==job.type) && (selected.Location==job.location ||(selected.Location=="In Office"&&job.location!="Remote")) &&(selected.Duration)==job.duration )
        );
      })
      setFilteredJobs(filtered)
      
    };

  const [tours, setTours] = useState(TempJobsData);
  // console.log(tours);
  // console.log(TempJobsData);
  return (
    <div className="  jobpagecss md:gap-24 md:m-[4%] md:p-16 overflow-x-hidden max-w-screen md:flex-row font-bold">
      <div className="flex mt-12 px-4 md:mt-0 text-black justify-center items-center text-[3rem] lg:text-[5rem]">
        Current Job Openings
      </div>
      <div className=" p-4 rounded-3xl bg-[#F5F7FA] text-black flex flex-col justify-center md:ml-[33%] md:mr-[26%] gap-2 md:gap-3 mt-3 md:mb-4  ">
        <p>
          Ignite your career at AIchefmaster, where innovation meets flavor!.
        </p>
        <p> Join us in redefining the future of culinary technology.</p>
        <p> Embrace excellence, become a tastemaker in our dynamic team.</p>
      </div>

      {/* Search Bar  */}

       {/* <SearchBar/> */}
       <div className='flex flex-col lg:flex-row mb-24 w-full md:mx-4 mx-1  justify-between items-center bg-white  px-2 z-[1000] gap-x-4 '>
        <div className='dropdown w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <div onClick={e=>setIsJobActive(!isJobActive)} className='flex px-4 w-[1/5] bg-[#F5F7FA] text-white items-center justify-between'>
            <div className='dropdown-btn font-bolder' >{selected['JobType']}</div>
            <IoMdArrowDropdown color='blue'  size={30}/>
            </div>
            
           {isJobActive && (            
           <div className='dropdown-content w-full z-[100] '>
            {
                options[0].map((option)=>(
                  <div onClick={(e)=>{
                    setSelected({...selected,"JobType":option});
                    setIsJobActive(false);
                  }}
                   className='dropdown-item ' >
                    {option}
                  </div>
                ))}
            
            </div>)}
        </div>
       <div className='dropdown w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
            <div onClick={e=>setIsLocationActive(!isActive)} className='flex px-4 w-[1/5] bg-[#F5F7FA] text-white items-center justify-between '>
            <div className='dropdown-btn font-bolder' >{selected['Location']}</div>
            <IoMdArrowDropdown color='blue'  size={30}/>
            </div>
            
           {isLocationActive && (            
           <div className='dropdown-content w-full z-[100] '>
            {
                options[1].map((option)=>(
                  <div onClick={(e)=>{
                    setSelected({...selected,"Location":option});
                    setIsLocationActive(false);
                  }}
                   className='dropdown-item' >
                    {option}
                  </div>
                ))}
            
            </div>)}
        </div>
        <div className='dropdown w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <div onClick={e=>setIsDurationActive(!isDurationActive)} className='flex px-4 w-[1/5] bg-[#F5F7FA] text-white items-center justify-between'>
            <div className='dropdown-btn font-bolder' >{selected["Duration"]}</div>
            <IoMdArrowDropdown color='blue'  size={30}/>
            </div>
            
           {isDurationActive && (            
           <div className='dropdown-content w-full z-[100] '>
            {
                options[2].map((option)=>(
                  <div onClick={(e)=>{
                    setSelected({...selected,"Duration":option});
                    setIsDurationActive(false);
                  }}
                   className='dropdown-item' >
                    {option}
                  </div>
                ))}
            
            </div>)}
        </div>
        <div className='dropdown w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <div  onClick={searchData} className='flex px-4 w-[1/5] bg-[#F5F7FA] text-white items-center justify-between'>
            <div className='dropdown-btn font-bolder' >Search</div>
            <FaSearch color='green' size={30} />
            {/* <IoMdArrowDropdown color='blue'  size={30}/> */}
            </div>
            
           {/* {isActive && (            
           <div className='dropdown-content w-full'>
            {
                options.map((option)=>(
                  <div onClick={(e)=>{
                    setSelected(option);
                    setIsActive(false);
                  }}
                   className='dropdown-item' >
                    {option}
                  </div>
                ))}
            
            </div>)} */}
        </div> 
       
    </div>

       {/* Render Jobs  */}


      <div className="cards pt-6 -mt-24 md:mt-0">
        {filteredJobs.length==0?(<div className="mb-4">
          No Jobs Available with the selected choices 
        </div>):(filteredJobs.map((e) => {
          return <JobCard key={e.id} {...e} />;
        }))}
        {}
      </div>
    </div>
  );
}

export default JobsPage;
