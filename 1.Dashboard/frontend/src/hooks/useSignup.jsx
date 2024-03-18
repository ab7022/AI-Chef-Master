import { useState } from "react"
import toast from "react-hot-toast"

export const useSignup = () => {
    const [pwError, setPwError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const signup = async (email, first_name, last_name, password, password_repeat, navigate) => {
        setIsLoading(true);
        setPwError(null)
        setEmailError(null)
        const data = {
            'email': email,
            'first_name': first_name,
            'last_name': last_name,
            'password': password,
            'password_repeat': password_repeat
        }
        const response = await fetch(`${import.meta.env.VITE_API_URL}/chef/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setPwError(json.non_field_errors)
            setEmailError(json.email)
        }

        if (response.ok) {
            setIsLoading(false);
            toast.success("Signup successfull");
            navigate('/login');
        }
    }

    return { signup, isLoading, pwError, emailError }
}