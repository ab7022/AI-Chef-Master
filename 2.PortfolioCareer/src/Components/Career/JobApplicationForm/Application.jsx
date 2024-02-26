import React from "react";
import Path from "./Path";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import Linkedin from "./Linkedin";
 import MyExperiencePage from "./MyExperience.jsx";
import ApplicationQuestionsPage from "./ApplicationQuestions.jsx";
import VoluntaryDisclosuresPage from "./VoluntaryDisclosures.jsx";
import ReviewPage from "./Review.jsx";
import { useLocation } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";

const Application = ({jobData}) => {

  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
     useEffect(() => {
    const timeout = setTimeout(() => {
       setLoading(true);
    }, 1000);
    return () => clearTimeout(timeout); // Cleanup on component unmount
  }, []);

const nxtStep = () => {
  setCount(count === 4 ? count : count + 1);
};

const prevStep = () => {
  setCount(count === 0 ? count : count - 1);
};
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const fetchPincodeApi = async (pincode) => {
    const pincodeUrl = `https://api.postalpincode.in/pincode/${pincode}`;

    try {
      const response = await fetch(pincodeUrl);
      const data = await response.json();

      if (response.ok && data && data.length > 0) {
        // Assuming that the API returns an array of locations for the given pincode
        const locationData = data[0].PostOffice[0];

        setAddress1(locationData.Deliverystatus);
        setAddress2(locationData.Block);
        setCity(locationData.District);
      } else {
        // Handle the case where the API response is not as expected
        console.error('Invalid API response:', data);
      }
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  const handlePincodeChange = async (e) => {
    const newPincode = e.target.value;
    setPincode(newPincode);

    if (newPincode.length === 6) {
      try {
        await fetchPincodeApi(newPincode);
      } catch (error) {
        console.error('Error handling pincode:', error);
      }
    }
  };


  const countries  = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const countryPhoneCodes = {
    Afghanistan: "+93",
    Albania: "+355",
    Algeria: "+213",
    Andorra: "+376",
    Angola: "+244",
    "Antigua and Barbuda": "+1-268",
    Argentina: "+54",
    Armenia: "+374",
    Australia: "+61",
    Austria: "+43",
    Azerbaijan: "+994",
    Bahamas: "+1-242",
    Bahrain: "+973",
    Bangladesh: "+880",
    Barbados: "+1-246",
    Belarus: "+375",
    Belgium: "+32",
    Belize: "+501",
    Benin: "+229",
    Bhutan: "+975",
    Bolivia: "+591",
    "Bosnia and Herzegovina": "+387",
    Botswana: "+267",
    Brazil: "+55",
    Brunei: "+673",
    Bulgaria: "+359",
    "Burkina Faso": "+226",
    Burundi: "+257",
    "Cabo Verde": "+238",
    Cambodia: "+855",
    Cameroon: "+237",
    Canada: "+1",
    "Central African Republic": "+236",
    Chad: "+235",
    Chile: "+56",
    China: "+86",
    Colombia: "+57",
    Comoros: "+269",
    Congo: "+242",
    "Costa Rica": "+506",
    Croatia: "+385",
    Cuba: "+53",
    Cyprus: "+357",
    "Czech Republic": "+420",
    Denmark: "+45",
    Djibouti: "+253",
    Dominica: "+1-767",
    "Dominican Republic": "+1-809",
    "East Timor": "+670",
    Ecuador: "+593",
    Egypt: "+20",
    "El Salvador": "+503",
    "Equatorial Guinea": "+240",
    Eritrea: "+291",
    Estonia: "+372",
    Eswatini: "+268",
    Ethiopia: "+251",
    Fiji: "+679",
    Finland: "+358",
    France: "+33",
    Gabon: "+241",
    Gambia: "+220",
    Georgia: "+995",
    Germany: "+49",
    Ghana: "+233",
    Greece: "+30",
    Grenada: "+1-473",
    Guatemala: "+502",
    Guinea: "+224",
    "Guinea-Bissau": "+245",
    Guyana: "+592",
    Haiti: "+509",
    Honduras: "+504",
    Hungary: "+36",
    Iceland: "+354",
    India: "+91",
    Indonesia: "+62",
    Iran: "+98",
    Iraq: "+964",
    Ireland: "+353",
    Israel: "+972",
    Italy: "+39",
    Jamaica: "+1-876",
    Japan: "+81",
    Jordan: "+962",
    Kazakhstan: "+7",
    Kenya: "+254",
    Kiribati: "+686",
    "Korea, North": "+850",
    "Korea, South": "+82",
    Kosovo: "+383",
    Kuwait: "+965",
    Kyrgyzstan: "+996",
    Laos: "+856",
    Latvia: "+371",
    Lebanon: "+961",
    Lesotho: "+266",
    Liberia: "+231",
    Libya: "+218",
    Liechtenstein: "+423",
    Lithuania: "+370",
    Luxembourg: "+352",
    Madagascar: "+261",
    Malawi: "+265",
    Malaysia: "+60",
    Maldives: "+960",
    Mali: "+223",
    Malta: "+356",
    "Marshall Islands": "+692",
    Mauritania: "+222",
    Mauritius: "+230",
    Mexico: "+52",
    Micronesia: "+691",
    Moldova: "+373",
    Monaco: "+377",
    Mongolia: "+976",
    Montenegro: "+382",
    Morocco: "+212",
    Mozambique: "+258",
    Myanmar: "+95",
    Namibia: "+264",
    Nauru: "+674",
    Nepal: "+977",
    Netherlands: "+31",
    "New Zealand": "+64",
    Nicaragua: "+505",
    Niger: "+227",
    Nigeria: "+234",
    "North Macedonia": "+389",
    Norway: "+47",
    Oman: "+968",
    Pakistan: "+92",
    Palau: "+680",
    Palestine: "+970",
    Panama: "+507",
    "Papua New Guinea": "+675",
    Paraguay: "+595",
    Peru: "+51",
    Philippines: "+63",
    Poland: "+48",
    Portugal: "+351",
    Qatar: "+974",
    Romania: "+40",
    Russia: "+7",
    Rwanda: "+250",
    "Saint Kitts and Nevis": "+1-869",
    "Saint Lucia": "+1-758",
    "Saint Vincent and the Grenadines": "+1-784",
    Samoa: "+685",
    "San Marino": "+378",
    "Sao Tome and Principe": "+239",
    "Saudi Arabia": "+966",
    Senegal: "+221",
    Serbia: "+381",
    Seychelles: "+248",
    "Sierra Leone": "+232",
    Singapore: "+65",
    Slovakia: "+421",
    Slovenia: "+386",
    "Solomon Islands": "+677",
    Somalia: "+252",
    "South Africa": "+27",
    "South Sudan": "+211",
    Spain: "+34",
    "Sri Lanka": "+94",
    Sudan: "+249",
    Suriname: "+597",
    Sweden: "+46",
    Switzerland: "+41",
    Syria: "+963",
    Taiwan: "+886",
    Tajikistan: "+992",
    Tanzania: "+255",
    Thailand: "+66",
    Togo: "+228",
    Tonga: "+676",
    "Trinidad and Tobago": "+1-868",
    Tunisia: "+216",
    Turkey: "+90",
    Turkmenistan: "+993",
    Tuvalu: "+688",
    Uganda: "+256",
    Ukraine: "+380",
    "United Arab Emirates": "+971",
    "United Kingdom": "+44",
    "United States": "+1",
    Uruguay: "+598",
    Uzbekistan: "+998",
    Vanuatu: "+678",
    "Vatican City": "+379",
    Venezuela: "+58",
    Vietnam: "+84",
    Yemen: "+967",
    Zambia: "+260",
    Zimbabwe: "+263",
  };

  useEffect(() => {}, [count]);

  const SetPage = (count) => {
    switch (count) {
      case 1:
        return <MyExperiencePage />;
      case 2:
        return <ApplicationQuestionsPage />;
      case 3:
        return <VoluntaryDisclosuresPage />;
      case 4:
        return <ReviewPage />;
      default:
        return null;
    }
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedJob = queryParams.get("job");

   

  return (
    <>
    {
    loading ? (

    <div className="container-lg shadow-lg px-12 py-12 mx-auto  sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-lg md:text-3xl font-medium font-sans mb-3">
            You are applying for-
            <span className="text-blue-500">{selectedJob}</span>
        </h1>
        <div className="text-blue-700">
            <Path activeStep={count} />
        </div>
        {count !== 0 ? (
        SetPage(count)
        ) : (
        <div className="w-full h-full">
<div className="text-lg sm:text-lg md:text-xl font-sans flex flex-col items-center">
  <p className="py-2 md:py-3 lg:py-4">
    Please upload your resume, and we will do our best to complete as much of the application as we can for you!
  </p>
  <p className="py-2 pb-3 md:pb-4 lg:pb-5">
    Upload either DOC, DOCX, HTML, PDF, or TXT file types (1MB max)
  </p>
  <div className="flex justify-center items-center flex-wrap">
    <Linkedin />
    <Modal />
  </div>
</div>
            
            <div>
                <h1 className="font-bold text-3xl my-6" style={{ fontSize: "20px" }}>
                    My Information
                </h1>

                <form className="mx-4 sm:mx-6 lg:mx-8 my-5 flex flex-col justify-start gap-y-7">
                    
                    <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                        <label className="w-full md:w-1/4 mb-2 md:mb-0">
                            First Name<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                        <input type="text" placeholder="First Name" className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5" value={fname} required onChange={(e)=> setfName(e.target.value)}/>
                    </div>

                    <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                        <label className="w-full md:w-1/4 mb-2 md:mb-0">
                            Last Name<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                        <input type="text" placeholder="Last Name" className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5" value={lname} required onChange={(e)=> setlName(e.target.value)}/>
                    </div>

                    <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                        <label className="w-full md:w-1/4 mb-2 md:mb-0">
                            Address Line1<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                        <input type="text" placeholder="Address Line1" className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5" value={address1} required onChange={(e)=> setAddress1(e.target.value)}/>
                    </div>

                    <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                        <label className="w-full md:w-1/4 mb-2 md:mb-0">
                            Address Line2<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                        <input type="text" placeholder="Address Line2" className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5" value={address2} required onChange={(e)=> setAddress2(e.target.value)}/>
                    </div>

                    <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                        <label className="w-full md:w-1/4 mb-2 md:mb-0">
                            Pincode<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                        <input type="text" placeholder="Pincode" className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5" value={pincode} required onChange={handlePincodeChange}/>
                    </div>


                    <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                        <label className="w-full md:w-1/4 mb-2 md:mb-0">
                            City<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                        <input type="text" placeholder="City" className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5" value={city} required onChange={(e)=> setCity(e.target.value)}/>
                    </div>

                    <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                        <label className="w-full md:w-1/4 mb-2 md:mb-0">
                            State<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                        <select className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5">
                            <option value="Select">Please Select</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    </div>

                    <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                        <label className="w-full md:w-1/4 mb-2 md:mb-0">
                            Country<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                        <select className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5">
                            <option value="Select">Please Select</option>
                            <option value="">Select Country</option>
                            {countries.map((country, index) => (
                            <option key={index} value={country}>
                                {country}
                            </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                        <label className="w-full md:w-1/4 mb-2 md:mb-0">
                            Email Address
                            <span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                        <input type="text" placeholder="Email" className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5" value={email} required onChange={(e)=> setEmail(e.target.value)}/>
                    </div>

                    <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                        <label className="w-full md:w-1/4 mb-2 md:mb-0">
                            Phone Device Type
                            <span style={{ color: "red", fontSize: "1.5rem" }}>*</span> :</label>
                        <select className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5">
                            <option value="Select">Please Select</option>
                            <option value="Android">Android</option>
                            <option value="iPhone">iPhone</option>
                            <option value="Windows Phone">Windows Phone</option>
                            <option value="BlackBerry">BlackBerry</option>
                        </select>
                    </div>

                    <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                        <label className="w-full md:w-1/4 mb-2 md:mb-0">
                            Country Phone Code
                            <span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                        <select className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5">
                            <option value="Select">Please Select</option>
                            <option value="">Select Phone Code</option>
                            {Object.keys(countryPhoneCodes).map((country, index) => (
                            <option key={index} value={countryPhoneCodes[country]}>
                                {countryPhoneCodes[country]} ({country})
                            </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                        <label className="w-full md:w-1/4 mb-2 md:mb-0">
                            Phone Number
                            <span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                        <input type="text" placeholder="Phone Number" className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5" value={phoneNumber} required onChange={(e)=> setPhoneNumber(e.target.value)}/>
                    </div>

                    <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                        <label className="w-full md:w-1/4 mb-2 md:mb-0">
                            How Did You Hear About Us?
                            <span style={{ color: "red", fontSize: "1.5rem" }}>*</span> :</label>
                        <select className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5">
                            <option value="Select">Please Select</option>
                            <option value="Linkedin">Linkedin</option>
                            <option value="Telegram">Telegram</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Job Bootcamp">Job Bootcamp</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                       <label className="w-full mb-2 md:mb-0">
                           Have you been employed by AI Chefmaster in the past?
                           <span style={{ color: "red", fontSize: "1.5rem", marginLeft: "5px" }}>*</span> :
                            <input type="radio" name="employee" value="yes" className="ml-2 mr-1" />
                            <span className="mr-6">Yes</span>
                            <input type="radio" name="employee" value="no" className="ml-2 mr-1" />
                            <span className="mr-6">No</span>

                        </label>
                      </div>

                    <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                        <label className="w-full mb-2 md:mb-0">
                          <input type="checkbox" style={{ transform: "scale(1.5)", marginRight: "5px" }} />
                          <span className="md:inline-block md:mr-2">Yes, I would like to receive communications from AI Chefmaster via SMS.</span>
                        </label>
                    </div>
                </form>

             </div>
        </div>

        )}
        <div className="flex justify-between bottom-2">
            {count > 0 && (
            <button className="bg-blue-600 p-2 w-32 rounded text-white font-bold text-xl font-sans my-3" onClick={prevStep}>
                Previous
            </button>
            )}
            <button className="bg-blue-600 p-2 w-32 rounded text-white font-bold text-xl my-3" onClick={nxtStep}>
                Next
            </button>
        </div>
    </div>
    ) : (
    <div className="flex justify-center p-5">
        <SpinnerCircular />
    </div>
    )
    }
    </>
  );
};

export default Application;
