
import KitchenEquipmentCard from '../KitchenEquipmentCard'
import KitchenEquipmentData from '../../Data/KitchenEquipmentData'
const KitchenEquipmentSection = () => {
  return (
    <div className=" text-white py-5">
      {/* SEASONAL DISHES */}
      <h1 className='text-3xl text-[#00544f]  font-semibold pb-8'>Kitchen Equipments</h1>
      <div className="flex flex-wrap">
      {KitchenEquipmentData.map((item, index) => (
        <KitchenEquipmentCard key={index} title={item.title}  image={item.image}  />
      ))}
      </div>
    </div>
  )
}

export default KitchenEquipmentSection