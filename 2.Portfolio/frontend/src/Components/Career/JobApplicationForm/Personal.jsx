import { countries, countryPhoneCodes } from "./data/countryData";

const Personal = ({
    fname, setfName,
    lname, setlName,
    address1, setAddress1,
    address2, setAddress2,
    pincode, setPincode,
    city, setCity,
    state, setState,
    country, setCountry,
    email, setEmail,
    phoneDevice, setPhoneDevice,
    phoneCode, setPhoneCode,
    phoneNumber, setPhoneNumber,
    hear, setHear,
    employee, setEmployee
}) => {
    const handlePincodeChange = async (e) => {
        const newPincode = e.target.value;
        setPincode(newPincode);
        if (newPincode.length === 6) {
            try {
                const pincodeUrl = `https://api.postalpincode.in/pincode/${newPincode}`;
                try {
                    const response = await fetch(pincodeUrl);
                    const data = await response.json();
                    if (response.ok && data && data.length > 0) {
                        const locationData = data[0].PostOffice[0];
                        // setAddress1(locationData.Deliverystatus);
                        setAddress2(locationData.Block);
                        // setCity(locationData.District);
                    } else {
                        console.error('Invalid API response:', data);
                    }
                } catch (error) {
                    console.error('Error fetching details:', error);
                }
            } catch (error) {
                console.error('Error handling pincode:', error);
            }
        }
    };

    return (
        <div className="  ">
            <div className="w-full h-full">
                <div>
                    <h1 className="custom-text-secondary font-bold text-3xl my-6" style={{ fontSize: "20px" }}>
                        My Information
                    </h1>

                    <form className="custom-text mx-4 sm:mx-6 lg:mx-8 my-5 flex flex-col justify-start gap-y-7">
                        <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0">
                                First Name<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                            <input
                                required
                                type="text"
                                placeholder="First Name"
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                                value={fname}
                                onChange={(e) => setfName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0">
                                Last Name<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                            <input
                                required
                                type="text"
                                placeholder="Last Name"
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                                value={lname}
                                onChange={(e) => setlName(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0">
                                Address Line1<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                            <input
                                required
                                type="text"
                                placeholder="Address Line1"
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                                value={address1}
                                onChange={(e) => setAddress1(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0">
                                Address Line2:</label>
                            <input
                                required
                                type="text"
                                placeholder="Address Line2"
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                                value={address2}
                                onChange={(e) => setAddress2(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0">
                                Pincode<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                            <input
                                required
                                type="number"
                                placeholder="Pincode"
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                                value={pincode}
                                onChange={handlePincodeChange}
                            />
                        </div>

                        <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0">
                                City<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                            <input
                                required
                                type="text"
                                placeholder="City"
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0">
                                State<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                            <select
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                                value={state}
                                onChange={e => setState(e.target.value)}
                            >
                                <>
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
                                </>
                            </select>
                        </div>

                        <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0">
                                Country<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                            <select
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                                value={country}
                                onChange={e => setCountry(e.target.value)}
                            >
                                <>
                                    <option value="Select">Please Select</option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </>
                            </select>
                        </div>

                        <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0">
                                Email Address
                                <span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                            <input
                                required
                                type="email"
                                placeholder="Email"
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0">
                                Phone Device Type:</label>
                            <select
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                                value={phoneDevice}
                                onChange={e => setPhoneDevice(e.target.value)}
                            >
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
                            <select
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                                value={phoneCode}
                                onChange={e => setPhoneCode(e.target.value)}
                            >
                                <option value="Select">Please Select</option>
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
                            <input
                                required
                                type="text"
                                placeholder="Phone Number"
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0">
                                How Did You Hear About Us?</label>
                            <select
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                                value={hear}
                                onChange={e => setHear(e.target.value)}
                            >
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
                                <input
                                    type="radio"
                                    name="employee"
                                    value="Yes"
                                    className="ml-2 mr-1"
                                    checked={employee === "Yes"}
                                    onChange={e => setEmployee(e.target.value)}
                                />
                                <span className="mr-6">Yes</span>
                                <input
                                    type="radio"
                                    name="employee"
                                    value="No"
                                    className="ml-2 mr-1"
                                    checked={employee === "No"}
                                    onChange={e => setEmployee(e.target.value)}
                                />
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
        </div>
    )
}

export default Personal