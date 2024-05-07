import { useEffect, useState } from "react";

export const ChefCard1 = ({ heading, description, video }) => {
    const [themeClass, setThemeClass] = useState("");

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        const computedThemeClass = theme === "dark" ? "text-white bg-gray-950" : "text-black bg-white";
        setThemeClass(computedThemeClass);
    }, []);

    return (
        <div className={`w-screen flex flex-col ${themeClass}`}>
            <div className="flex flex-col max-w-5/6">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-80 mr-20"
                    style={{
                        objectFit: "cover",
                        filter: "brightness(0.9)", // Adjust the brightness value as needed
                    }}
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>

            <div className="flex flex-col justify-center items-center ">
                <h2 className="mt-4 text-center flex flex-row font-bold text-3xl">
                    {heading}
                </h2>
                <p className={`z-10 max-w-screen p-4 flex flex-col text-justify shadow-lg shadow-gray-200 ${themeClass}`}>
                    {description}
                </p>
            </div>
        </div>
    );
};
