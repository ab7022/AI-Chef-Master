import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ApplicationPage() {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const handleClear = () => {
    setAddress('');
    setCity('');
    setZip('');
    setState('');
    setCountry('');
    setfName('');
    setlName('');
    setEmail('');
    setMobile('');
    // Clear other fields if needed
  };
  const [educationEntries, setEducationEntries] = useState([
    {
      institute: '',
      department: '',
      degree: '',
      startDate: null,
      endDate: null,
      isCurrentlyPursuing: false,
    },
  ]);


  const handleInputChange = (index, name, value) => {
    const newEntries = [...educationEntries];
    newEntries[index][name] = value;
    setEducationEntries(newEntries);
  };


  const handleCurrentlyPursuingChange = (index, isChecked) => {
    const newEntries = [...educationEntries];
    newEntries[index].isCurrentlyPursuing = isChecked;
    if (isChecked) {
      newEntries[index].endDate = null;
    }
    setEducationEntries(newEntries);
  };


  const handleAddEntry = () => {
    setEducationEntries([
      ...educationEntries,
      {
        institute: '',
        department: '',
        degree: '',
        startDate: null,
        endDate: null,
        isCurrentlyPursuing: false,
      },
    ]);
  };



  return (
    <div>
      <h2 className='font-bold relative text-2xl md:text-4xl lg:text-5xl z-10 py-8 pt-20 text-center'>
      AI CHEF MASTER</h2>

      {/* name area */}

      <form className='mx-44'>
        <div className="flex">
          <div className="w-1/4 pr-4">
            <label>First name<span style={{ color: 'red', fontSize:'1.5rem'}}>*</span>:
              <input
                className='border rounded border-black my-2 px-7 py-2 block '
                type="text" 
                value={fname}
                placeholder='Enter Your First name'
                required
                onChange={(e) => setfName(e.target.value)}
              />
            </label>
          </div>
          <div className="w-1/2 pl-2">
            <label>Last name<span style={{ color: 'red', fontSize:'1.5rem'}}>*</span>:
              <input
                className='border rounded border-black my-2 px-7 py-2 block '
                type="text" 
                value={lname}
                placeholder=' Enter Your Last name'
                required
                onChange={(e) => setlName(e.target.value)}
              />
            </label>
          </div>
        </div>
      </form>
    <form className='mx-44'>
      <label>Email<span style={{ color: 'red', fontSize:'1.5rem'}}>*</span>:
        <input className='border rounded border-black my-3  px-7 py-2 block'
          type="text" 
          value={email}
          placeholder=' Enter Your email'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
    </form>
    
    <form className='mx-44 '>
    <p className='w-72 h-24 oveflow-y-hidden overflow-y-scroll '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est tempora aperiam amet dignissimos iste. Nihil enim consectetur magnam labore atque?</p>
    <div className=''>

      <label className=''>Mobile<span style={{ color: 'red', fontSize:'2 rem'}}>*</span>:
        <input className='border overflow-y-auto rounded border-black my-2  px-7 py-2 block'
          type="text " 
          value={mobile}
          placeholder=' Enter Your mobile'
          required
          onChange={(e) => setMobile(e.target.value)}
          />
      </label>
          </div>
    </form>
    <form className='mx-44 border'>
      <label>Where did you hear about this job?<span style={{ color: 'red', fontSize:'1.5rem'}}>*</span> :
      <select className='block border'>
         <option value="Select">Select</option>
         <option value="Indeed">Indeed</option>
         <option value="Linkedin">Linkedin</option>
         <option value="Facebook">Facebook</option>
         <option value="Monster">Monster</option>
         <option value="Other">Other</option>
      </select>
      <br/>
      </label>
    </form>

    {/* address area */}

    <form className='mx-44'>
        <div className="flex">
          <div className="w-1/4 pr-4">
            <label>Address Line1 :<span style={{ color: 'red', fontSize:'1.5rem'}}>*</span>:
              <input
                className='border rounded border-black my-2 px-7 py-2 block '
                type="text" 
                value={fname}
                placeholder='Enter Your Address'
                required
                onChange={(e) => setfName(e.target.value)}
              />
            </label>
          </div>
          <div className="w-1/2 pl-2">
            <label>City<span style={{ color: 'red', fontSize:'1.5rem'}}>*</span>:
              <input
                className='border rounded border-black my-2 px-7 py-2 block '
                type="text" 
                value={lname}
                placeholder=' City'
                required
                onChange={(e) => setlName(e.target.value)}
              />
            </label>
          </div>
        </div>
      </form>
    <form className='mx-44'>
      <label>Zip Code :
        <input className='border rounded border-black my-2 px-7 py-2 block'
          type="text" 
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </label>
    </form>
    <form className='mx-44'>
      <label>State/Province :
        <input className='border rounded border-black my-2 py-2 px-7 block'
          type="text" 
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </label>
    </form>
    <form className='mx-44'>
      <label>Country :
        <input className='border rounded border-black my-2 px-7 py-2 block'
          type="text" 
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
    </form>

    {/* education area */}

    {educationEntries.map((entry, index) => (
      <div key={index}>
        <form className='mx-44'>
          <label>
            Institute Name :
            <input
              className='border rounded border-black my-2 py-2 px-7 block'
              type='text'
              value={entry.institute}
              onChange={(e) => handleInputChange(index, 'institute', e.target.value)}
            />
          </label>
        </form>
        <form className='mx-44'>
          <label>
            Department :
            <input
              className='border rounded border-black my-2 py-2 px-7 block'
              type='text'
              value={entry.department}
              onChange={(e) => handleInputChange(index, 'department', e.target.value)}
            />
          </label>
        </form>
        <form className='mx-44'>
          <label>
            Degree :
            <input
              className='border rounded border-black my-2 px-7 py-2 block'
              type='text'
              value={entry.degree}
              onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
            />
          </label>
        </form>
        <h2 className='mx-44'>Duration:</h2>
        <br />
        <div className='mx-44'>
          <label>Start Date:</label>
          <DatePicker
            selected={entry.startDate}
            onChange={(date) => handleInputChange(index, 'startDate', date)}
            dateFormat='MM/yyyy'
            showMonthYearPicker
          />
          <br />
        </div>
        <br />
        {!entry.isCurrentlyPursuing && (
          <div className='mx-44'>
            <label>End Date:</label>
            <DatePicker
              selected={entry.endDate}
              onChange={(date) => handleInputChange(index, 'endDate', date)}
              dateFormat='MM/yyyy'
              placeholder='Enter end date'
              showMonthYearPicker
            />
          </div>
        )}
        <br />
        <div>
          <label className='mx-44'>
            <input
              type='checkbox'
              checked={entry.isCurrentlyPursuing}
              onChange={(e) => handleCurrentlyPursuingChange(index, e.target.checked)}
            />
            Currently Pursuing
          </label>
        </div>
      </div>
    ))}
    <button
      className='bg-blue-600 hover:bg-blue-700 group relative px-9 py-1 overflow-hidden font-medium rounded-xl text-xl md:text-2xl shadow-2xl mr-8 my-8'
      onClick={handleAddEntry}
    >
      <span className='text-white'>Add More</span>
    </button>

    <div className='flex justify-evenly'>
      <Link to='/backend'>
      <button className="bg-green-600 hover:bg-green-700 group  relative px-9 py-1 overflow-hidden font-medium rounded-xl   text-xl md:text-2xl shadow-2xl  mr-8 my-8">
      <span className=" text-white">Prev</span>
      </button>
      </Link>
      <button
          className="bg-red-600 hover:bg-red-700 group  relative px-9 py-1 overflow-hidden font-medium rounded-xl text-xl md:text-2xl shadow-2xl mr-8 my-8"
          onClick={handleClear}
        >
          <span className="text-white">Clear</span>
        </button>
      <Link to='/experience'>
      <button className="bg-green-600 hover:bg-green-700 group  relative px-9 py-1 overflow-hidden font-medium rounded-xl   text-xl md:text-2xl shadow-2xl  mr-8 my-8">
      <span className=" text-white">Next</span>
      </button>
      </Link>
    </div>
    </div>
    
  )
}

export default ApplicationPage