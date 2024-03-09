import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import toast from "react-hot-toast"

export const useLogin = () => {
    const [error, setError] = useState(null)

    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null)

        const data = {
            'email': email,
            'password': password,

        }
        const response = await fetch(`${import.meta.env.VITE_API_URL}/chef/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        const json = await response.json()
        // console.log(json)

        if (!response.ok) {
            setIsLoading(false)
            setError(json.message)


            console.log(error);
            console.log(json.message)
        }

        if (response.ok) {
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update AuthContext
            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)
            toast.success("Logged in Successfully")

        }


    }

    const googleLogin = async () => {
        setIsLoading(true);
        setError(null)
        
        const response = await fetch(`${import.meta.env.VITE_API_URL}auth/social/o/google-oauth2/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(data)
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.message)


            console.log(error);
            console.log(json.message)
        }

        if (response.ok) {
            console.log(response)
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update AuthContext
            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)
            toast.success("Logged in Successfully")

        }

    }

    return { login, error, isLoading, googleLogin }
}