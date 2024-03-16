// import toast from 'react-hot-toast';
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    
    const logout = () => {
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT' })
        // toast.success("Log out successfull")
    }

    return { logout }
}