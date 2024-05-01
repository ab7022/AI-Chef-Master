import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Settings() {
    const [notificationOn, setNotificationOn] = useState(true);

    const toggleNotification = () => {
        setNotificationOn(prevState => !prevState);
    };

    return (
        <div className="w-full p-10 bg-[#f7f3cd] min-h-[calc(100dvh-64px)]">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">Settings</h1>
            <div className="container mx-auto space-y-6">
                <div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-md">
                    <h2 className="text-lg md:text-xl font-semibold">Notifications</h2>
                    <label className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={notificationOn}
                                onChange={toggleNotification}
                            />
                            <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner">
                                <div className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow-md top-[-5px] transform ${notificationOn ? 'translate-x-full bg-green-500' : ''}`} />
                            </div>
                        </div>
                    </label>
                </div>
                <p className="text-gray-600">Manage your notification preferences.</p>
                <div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                    <h2 className="text-lg md:text-xl font-semibold"><Link to='/UserProfile'>My Account</Link></h2>
                </div>
                <div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                    <h2 className="text-lg md:text-xl font-semibold">Prime & Subscriptions</h2>
                    <p className="text-blue-500 font-bold"><Link to='/upgrade-premium'>Manage subscriptions</Link></p>
                </div>
                <div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                    <h2 className="text-lg md:text-xl font-semibold">Language</h2>
                    <p className="text-gray-600">English</p>
                </div>
                <div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                    <a href="mailto:info@aichefmaster.com" class="text-lg md:text-xl font-semibold">Help & Support</a>
                </div>
                <p className="text-gray-600">About & Legal</p>
            </div>
        </div>
    );
}

export default Settings;
