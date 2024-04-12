import React, { useState } from "react";
import { LuChefHat } from "react-icons/lu";

import DashboardForm from "../components/DashboardForm";
import InstructionsPage from "./InstructionsPage";


const DashboardPage = () => {
  const [tab, setTab] = useState(0);

  const initialFormState = JSON.parse(localStorage.getItem("formData")) || {
    chef: "",
    name: "",
    veg_non_veg: "",
    popularity_state: "",
    cuisine: "",
    cooking_time: "",
    ingredients: [],
    instructions: [],
    courses: [],
    description: "",
    kitchen_equipments: [],
  };
  const [form, setForm] = useState(initialFormState);

  return (
    <div className="w-screen mt-32 overflow-x-hidden font-primary flex flex-col justify-center items-center">

      {tab === 0 ? (
        <>
          <div className="flex items-center justify-center gap-3">
            <p className="custom-text font-semibold text-4xl">Welcome Chef</p>
            <p className="text-green-600 text-3xl ">
              <LuChefHat />
            </p>
          </div>
          <div className="w-full  flex items-center justify-center">
            <div className="h-1 w-72 flex-shrink-0 bg-gradient-to-r from-green-600 to-[#f8f8f8]"></div>
          </div>
          <DashboardForm
            setTab={setTab}
            form={form}
            setForm={setForm}
          />
        </>
      ) : tab === 1 ? (
        <InstructionsPage
          setTab={setTab}
          formData={form}
          setFormData={setForm}
        />
      ) : null}

    </div>
  );
};

export default DashboardPage;
