import React from 'react';
import CompanyLogo from '/CompanyLogo.png';
import { useState } from 'react';
import google from './google.png';
import microsoft from './microsoft.png';
import { Link } from 'react-router-dom';

function LoginIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showResetModal, setShowResetModal] = useState(false);
    const [newPassword, setNewPassword] = useState('');

    React.useEffect(() => {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        const rememberedPassword = localStorage.getItem('rememberedPassword');
        if (rememberedEmail && rememberedPassword) {
            setEmail(rememberedEmail);
            setPassword(rememberedPassword);
            setRememberMe(true);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    const handleForgetPassword = () => {
        setShowResetModal(true);
    };

    const handleResetPassword = async () => {
        try {
             const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, newPassword }),
            });

            if (response.ok) {
                // Password reset successful, close the modal
                setShowResetModal(false);
                alert('Password reset successfully!');
            } else {
                // Handle password reset failure
                const errorMessage = await response.text();
                alert(`Password reset failed: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error resetting password:', error);
            alert('An error occurred while resetting password');
        }
    };

    return (
        <>
      <div className='flex md:flex-row flex-col bg-[#00544f] h-screen'>
        <div className=' flex flex-col gap-5 justify-center items-center py-8 md:w-2/5'>
                    <img className=" rounded-full h-[20vh]" src={CompanyLogo} alt="Logo" />
                    <h1 className="text-yellow-300 text-xl sm:text-xl md:text-2xl lg:text-3xl  font-medium">Welcome Back</h1>
                    <h1 className="text-yellow-300 text-center text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium">SIGN IN TO AI CHEF MASTER</h1>
                    <h1 className="text-white text-center text-xl sm:text-xl md:text-2xl lg:text-3xl ">Where Taste Meets Technology - Experience AI Chef Master</h1>
                </div>
        <div className='bg-[#f7f3cd] flex flex-col justify-center lg:px-28 p-12  sm:px-12 md:px-16  md:w-3/5 border-black md:rounded-l-3xl'>
                    <h1 className="text-4xl font-medium flex justify-center items-center mb-8">Login Account</h1>
                    <form onSubmit={handleSubmit} className="my-5 flex flex-col  gap-y-7">
                        <div className=" text-sm flex ">
                            <input
                                type="text"
                                    className="p-3 bg-[#f7f3cd] border border-black focus:outline-none w-full placeholder-black rounded-lg"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="text-sm ">
                            <input
                                type="password"
                                className="p-3 bg-[#f7f3cd] border border-black focus:outline-none w-full placeholder-black rounded-lg"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                style={{ transform: 'scale(1.5)', marginRight: '5px' }}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <span className="text-sm text-gray-700">Remember me</span>
                            <button
                                type="button"
                                className="ml-2 text-sm text-emerald-800 underline"
                                onClick={handleForgetPassword}
                            >
                                Forget Password
                            </button>
                        </div>
                        <div className="flex justify-center items-center">
                            <button type="submit" className="bg-[#00544f] p-3 my-3 w-full  md:max-w-sm text-white text-2xl rounded-lg hover:scale-110 sm:text-lg sm:w-2/3  lg:w-3/4">
                                Login
                            </button>
                        </div>
                    </form>

          <p className='text-3xl font-medium  text-center'>Or</p>
          <div className='flex justify-center'>
            <p className='mb-5'> Create New Account <Link className="text-emerald-800 font-medium" to="/CreateAccount">Signup</Link></p>
          </div>
           <div className='flex flex-wrap gap-3 justify-center'>
            <div className='border gap-2 p-2 rounded-lg border-black flex justify-start items-center  hover:scale-110'>
              <img src={google} alt="Google" />
              <button className='font-medium '>Signup With Google</button>
            </div>
            <div className='gap-2 border p-2 rounded-lg border-black flex justify-start items-center   hover:scale-110'>
              <img  src={microsoft} alt="Microsoft" />
              <button className='font-medium '>Signup With Microsoft</button>
            </div>
          </div>
                </div>
            </div>
        </>
    );
}

export default LoginIn;
