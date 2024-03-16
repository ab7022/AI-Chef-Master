/* eslint-disable react/prop-types */
const KitchenEquipmentCard = ({title, image}) => {
return (
<div className="card1 rounded-3xl text-center text-black  border-2 border-zinc-400 flex flex-col  items-center px-2 py-1 ">
    <h3 className='py-2 text-lg font-semibold '>{title}</h3>
    <p>{image}</p>
</div>

)
}

export default KitchenEquipmentCard