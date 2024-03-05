import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {BiShow} from 'react-icons/bi'
import {MdOutlineVisibilityOff} from 'react-icons/md'
// import Button_1 from '../components/Button_1'
import Button_2 from '../components/Button_2';
import { useSignup } from '../hooks/useSignup';
import Error from '../components/Error';
import { Toaster } from 'react-hot-toast';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  // const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [showConfirmPw, setShowConfirmPw] = useState(false);
  const {signup, pwError, emailError, isLoading} = useSignup()
  const navigate = useNavigate();

  const handleSignIn = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/login/google`;
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();

    
    console.log("hello1")
    await signup(email, firstName, lastName, password, ConfirmPassword)
    console.log("hello2")
    navigate('/login');

    
  }

  return (
    <div className='px-4 sm:px-4 h-screen max-w-screen  text-black overflow-hidden mt-32 lg:mt-20'>
      <form className='signup  flex flex-col  justify-center  items-center font-primary' onSubmit={handleSubmit}>
      <h3 className='text-4xl font-semibold  mt-8  text-center  py-2'>Create a new account</h3>
      <p className='text-center mb-8 text-base '>Enter the fields below to get started</p>
      
      
        <div className=' bg-gradient-to-b from-zinc-600 z-0 to-black p-0.5  rounded-lg'>

        <div className=' bg-white backdrop-filter backdrop-blur-xl h-full w-full items-center p-4   md:p-16 rounded-lg flex flex-col justify-center'>
        
        
        
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
          
        <div className='my-4'>
        <label>First Name</label>
        <input type="text"
        className='block w-[300px] py-2 placeholder:italic px-4 my-2 border border-zinc-800 rounded-lg '
        placeholder='First Name'
        onChange={(e)=>setFirstName(e.target.value)} 
        value={firstName}
        required={true}
        />
        </div>
        <div className='my-4'>
        <label>Last Name</label>
        <input type="text"
        className='block w-[300px] py-2 placeholder:italic px-4 my-2 rounded-lg border border-zinc-800  '
        placeholder='Last Name'
        required={true}
        onChange={(e)=>{setlastName(e.target.value)}}
        value={lastName}
        />
        </div>
        </div>

        <div className='flex md:gap-4 flex-col md:flex-row min-w-full'>
        <div className='my-4 min-w-full'>
        <label>Email</label>
        <input type="email"
        className='block min-w-full py-2 placeholder:italic px-4 my-2 border border-zinc-800 rounded-lg '
        placeholder='abc@gmail.com'
        onChange={(e)=>setEmail(e.target.value)} 
        value={email}
        required={true}
        />
         {emailError && <div><Error error={emailError}/></div>}
        </div>
       
        </div>

        {/* <div className='flex md:gap-4 flex-col md:flex-row min-w-full'>
        <div className='my-4 min-w-full'>
        <label>Phone Number</label>
        <input type="text"
        className='block min-w-full py-2 placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg bg-black'
        placeholder='+91 0123456789'
        onChange={(e)=>setNumber(e.target.value)} 
        value={number}
        required={true}
        />
        </div>
        </div> */}


        <div className='flex md:gap-4 flex-col md:flex-row'>

        <div className='my-4'>
        <label>Password</label>
        <div className='relative'>
        <input type={showPw ? 'text' : 'password'}
        className='block w-[300px]  py-2 px-4 placeholder:italic my-2 border border-zinc-800 rounded-lg '
        onChange={(e)=>setPassword(e.target.value)} 
        value={password}
        required={true}
        placeholder='Password'
        />
        <BiShow className={` ${showPw ? 'hidden' : 'flex'} absolute top-3 right-4 cursor-pointer`} onClick={()=>{setShowPw(!showPw)}} />
        <MdOutlineVisibilityOff className={` ${showPw ? 'flex' : 'hidden'} absolute top-3 right-4 cursor-pointer`} onClick={()=>{setShowPw(!showPw)}}/>
        </div>
        </div>
        <div className='my-4'>
          
        <label>Confirm Password</label>
        <div className='relative'>
        <input type={showConfirmPw ? 'text' : 'password'}
        className='block w-[300px] py-2 px-4 my-2 placeholder:italic rounded-lg border border-zinc-800  '
        onChange={(e)=>setConfirmPassword(e.target.value)}
        value={ConfirmPassword}
        required={true}
        placeholder='Confirm Password'
        />
         <BiShow
            className={` ${showConfirmPw ? 'hidden' : 'flex'} absolute top-3 right-4 cursor-pointer`}
            onClick={()=>{setShowConfirmPw(!showConfirmPw)}}
          />
          <MdOutlineVisibilityOff
            className={` ${showConfirmPw ? 'flex' : 'hidden'} absolute top-3 right-4 cursor-pointer`}
            onClick={()=>{setShowConfirmPw(!showConfirmPw)}}
          />

          </div>
          
          
        </div>
        </div>
        {pwError && <Error error={pwError}/>}

        

        <button disabled={isLoading} className="bg-zinc-900 hover:bg-zinc-800 group relative md:w-1/2 px-8 py-3 overflow-hidden font-medium rounded-xl border  text-xl  shadow-xl  my-8">
      
        <span className=" text-white">Create Account</span>
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



      <p className='text-center text-zinc-800 font-medium '>Already have an account ? <Link to='/login'>
      <Button_2 name={'Log in'}/>
      </Link></p>
        
        </div>

        </div>
    </form>
    <Toaster/>
    </div>
  )
}

export default SignupPage