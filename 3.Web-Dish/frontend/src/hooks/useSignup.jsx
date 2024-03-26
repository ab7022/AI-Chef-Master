import { useState } from "react"
import toast from "react-hot-toast"

export const useSignup = () => {
    const [isLoading, setIsLoading] = useState(null)

    const signup = async (
        first_name,
        last_name,
        country_code,
        phone,
        email,
        password,
        navigate
    ) => {
        setIsLoading(true);
        const data = {
            first_name,
            last_name,
            country_code,
            phone,
            email,
            password
        }
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false);
            toast.error(json.message);
        }

        if (response.ok) {
            setIsLoading(false);
            toast.success(json.message);
            navigate('/login');
        }
    }

    return { signup, isLoading }
}