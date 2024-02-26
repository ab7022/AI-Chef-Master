import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BiShow } from 'react-icons/bi'
import { MdOutlineVisibilityOff } from 'react-icons/md'
import { useLogin } from '../hooks/useLogin';
import { useAuthContext } from '../hooks/useAuthContext';
import toast, { Toaster } from 'react-hot-toast'
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
import { useEffect } from 'react';


const LoginPage = () => {
  const { dispatch } = useAuthContext()

  const { user } = useAuthContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(true)
  const { login, error, isLoading, googleLogin } = useLogin()
  const [forgotPass, setForgotPass] = useState(true);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { response, json } = await login(email, password);

    if (response.ok) {
      Navigate("/dashboard");
    }
    else toast.error(json['message']);
  }

  const handleSignIn = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/login/google`;
  };

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userDataStr = urlParams.get('data');
    if (userDataStr) {
      const userData = JSON.parse(decodeURIComponent(userDataStr));

      localStorage.setItem('user', JSON.stringify(userData));

      dispatch({ type: 'LOGIN', payload: userData });

      toast.success("Logged in Successfully");

      navigate(window.location.pathname, { replace: true });
    }
  }, []);

  return (
    <div className='px-4 sm:px-4  pt-16 mb-4 '>
      <form className='signup  flex flex-col  justify-center z-10 items-center  font-primary' onSubmit={handleSubmit}>
        <h3 className='text-3xl font-semibold  mt-16  text-center  py-2'>Welcome, log in to you account</h3>
        <p className='text-center mb-8 font-semibold text-zinc-800'>Enter the fields below to continue</p>

        {forgotPass}
        <div className=' bg-gradient-to-b   rounded-lg  shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>

          <div className=' bg-white backdrop-filter backdrop-blur-xl h-full w-full items-center p-4  back md:p-16 rounded-lg flex flex-col justify-center'>




            <div className='flex md:gap-4 flex-col md:flex-row min-w-full'>
              <div className='my-4 min-w-full'>
                <label className='font-medium'>Email</label>
                <input type="email"
                  className='block min-w-full py-2 placeholder:italic px-4 my-2 border
         border-zinc-900 rounded-lg '
                  placeholder='abc@gmail.com'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required={true}
                />

              </div>
            </div>


            <div className='flex md:gap-4 flex-col md:flex-row min-w-full'>

              <div className=''>
                <label className='font-medium'>Password</label>
                <div className='relative'>
                  <input type={!showPw ? 'text' : 'password'}
                    className='block w-[300px] py-2 px-4 placeholder:italic my-2 border border-zinc-900 rounded-lg '
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required={true}
                  />
                  <BiShow className={` ${showPw ? 'hidden' : 'flex'} absolute top-3 right-4 cursor-pointer`} onClick={() => { setShowPw(!showPw) }} />
                  <MdOutlineVisibilityOff className={` ${showPw ? 'flex' : 'hidden'} absolute top-3 right-4 cursor-pointer`} onClick={() => { setShowPw(!showPw) }} />
                </div>
              </div>


            </div>

            {error && <div className='text-rose-600 border-l-2 border-r-2 w-full text-sm rounded border-rose-800 text-center  bg-[#ab2c2c2a] to-transparent  px-4 py-2'>{error}</div>}
            {user && <div className='text-emerald-600 border-l-2 border-r-2 w-full text-sm rounded border-emerald-800 text-center  bg-[#2cab392a] to-transparent  px-4 py-2'>You are currently logged in</div>}
            <div className='mt-1 mb-6  -ml-[8rem] relative text-red-700  px-[4.5rem] left-0 '>
              <button >Forgot Your Password?</button></div>
            <button disabled={isLoading} className="bg-zinc-950 hover:bg-zinc-800 md:w-1/2 px-8 py-2 overflow-hidden font-medium rounded-xl border   text-xl  shadow-xl s my-2">
              <span className=" text-white">Log In</span>
            </button>

            <div className='flex w-full items-center  my-1 gap-x-2'>
              <div className='w-full h-[1px] bg-black '></div>
              <p className=' text-richblack-5 font-medium  leading-[1.375rem]'>OR</p>
              <div className='w-full h-[1px] bg-black '></div>
            </div>
            <div className='text-xl mt-2 mb-8 '>
              {/* <GoogleOAuthProvider clientId="661696889341-t7qs1n7slqoh60d1ooie4i7inefi3jco.apps.googleusercontent.com">
                <GoogleLogin theme='filled_blue' size='large' text='continue_with' shape='circle'
                  onSuccess={(credentialResponse) => {
                    const decoded = jwtDecode(credentialResponse.credential);

                    console.log(decoded)
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider> */}

              {/* <button type='button' onClick={() => {
                googleLogin()
              }}>
                Continue with Google
              </button> */}
              <button onClick={handleSignIn}>Sign in with Google</button>
            </div>

            <p className='text-center text-zinc-800 font-medium'>Don't have an account ? <Link to='/signup'>
              <button className='border rounded-xl px-4 py-1 mx-2  text-white font-medium bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden  border-zinc-700   bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1200ms]'>Sign up</button>
            </Link></p>

          </div>

        </div>
      </form>
      <Toaster position="top-right"
        reverseOrder={false} />
    </div>
  )
}

export default LoginPage