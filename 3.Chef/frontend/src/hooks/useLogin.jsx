import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import toast from "react-hot-toast"

export const useLogin = () => {
    const { dispatch } = useAuthContext();

    const [isLoading, setIsLoading] = useState(null)

    const login = async (email, password) => {
        setIsLoading(true);

        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false);
            toast.error(json.message);
        }

        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({ type: 'LOGIN', payload: json })
            toast.success("Logged in Successfully")
            setIsLoading(false)
        }
    }

    return { login, isLoading }
}