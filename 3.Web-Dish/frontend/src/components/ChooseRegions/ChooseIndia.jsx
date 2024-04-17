import React from "react";
import ChooseStates from "../../Data/ChooseStates/ChooseStates";

function ChooseIndia() {
    return (
        <div className="bg-[#f7f3cd] px-4 sm:px-6 lg:px-8 pb-12">
            <h2 className="text-lg md:text-2xl font-bold py-8">Choose a State:</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {ChooseStates().map((state, index) => ( 
                    <div key={index} className="bg-[#00544f] p-5 rounded-2xl shadow-md transform hover:scale-105 transition duration-300">
                        <div className="flex justify-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden">
                                <img src={state.dishImage} alt={state.stateName} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <p className="mt-2 text-lg font-semibold text-center text-white">{state.stateName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChooseIndia;
