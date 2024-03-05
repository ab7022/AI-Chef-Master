import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import toast from "react-hot-toast"



export const useSignup = () =>{
    const [pwError, setPwError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async(email, first_name, last_name,  password, password_repeat)=>{
        setIsLoading(true);
        setPwError(null)
        setEmailError(null)
        const data={
            'email' : email,
            'first_name' : first_name,
            'last_name' : last_name,
            'password' : password,
            'password_repeat' : password_repeat
        }
        const response = await fetch(`${import.meta.env.VITE_API_URL}/chef/signup`,{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
            })

            const json = await response.json()
            console.log(json)
            

            if(!response.ok)
            {
                setIsLoading(false)
                setPwError(json.non_field_errors)
                setEmailError(json.email)
            }

            if(response.ok)
            {
                // save user to local storage
                localStorage.setItem('user', JSON.stringify(json))

                //update AuthContext
                dispatch({type:'LOGIN', payload: json})

                setIsLoading(false)
                toast.success("Sign Successfully")
            }
    }

    return {signup, isLoading, pwError, emailError}
}