import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { toast } from "react-hot-toast";
import { darkColors, lightColors } from "../data/sidebarTheme";

const SideBar = ({ lightMode }) => {
    const { user } = useAuthContext();
    const colors = lightMode ? lightColors : darkColors;

    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const getRows = async () => {
            setLoading(false);
            await fetch(`${process.env.REACT_APP_API_URL}/get-rows/${user.user_id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    "Content-Type": "application/json",
                }
            })
                .then(res => res.json())
                .then((data) => setRows(data.rows))
                .catch(() => toast.error('Something went wrong.'));
        }

        if (user.access_token) getRows();
    }, [user.access_token, user.user_id]);

    return (
        <div className={`fixed top-[56px] left-0 lg:relative flex flex-col lg:w-1/5 h-[calc(100dvh-56px)] lg:h-auto lg:mt-[-56px] overflow-y-auto ${colors.background} ${colors.text} text-white shadow-2xl`}>
            {!user ? (
                <div className="w-[100%] h-[100%] flex items-center justify-center">
                    <Link to='/login' className="w-fit bg-orange-600 px-4 py-2 rounded-md text-lg">Login</Link>
                </div>
            ) : loading ? (
                <h3>Fetching...</h3>
            ) : (
                <>
                    <div className="flex flex-row justify-center items-center gap-2 mt-4" >
                        <input type="text" name="search" id="" placeholder="Search..." className="p-2 text-black rounded m-1 w-2/3" />
                        <button className={`${colors.btnbg}  p-2 rounded text-base`}>Search</button>
                    </div>

                    <ul className="">
                        <h4 className="text-2xl font-bold text-center mt-4 mb-2 ">All Dishes</h4>
                        {!loading && rows.map((item, i) => (
                            <li key={i} className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700 cursor-pointer`}>{item.ingredient}</li>
                        ))}
                        <li className="text-center mt-4">End Of List</li>
                    </ul>
                </>
            )}
        </div>
    );
}

export default SideBar