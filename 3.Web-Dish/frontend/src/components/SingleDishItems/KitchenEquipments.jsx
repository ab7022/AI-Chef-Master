import React from "react";

const KitchenEquipments = ({ kitchenEquipments }) => {
  return (
    <div className="">
      <h1 className=" text-green-700 text-2xl font-bold mt-5">Kitchen Equipments</h1>

      <div className="m-4">
        <ul className="list-inside list-disc text-lg">
          {kitchenEquipments.map((item, index) => (
            <li className="mb-2" key={index}>
              <span className="font-semibold"> {item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KitchenEquipments;
