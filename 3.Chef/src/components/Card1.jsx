/* eslint-disable react/prop-types */


const Card1 = ({title, imageUrl}) => {
  return (
    <div className="  rounded-lg text-center cursor-pointer hover:scale-110 transition-all duration-300 ">
        <img className='rounded-full w-36 h-36 md:w-40 md:h-40 object-cover border-2 shadow-xl shadow-black' src={imageUrl} alt={title} />
        <h3 className='py-4 text-lg font-semibold '>{title}</h3>
    </div>
  ) 
}

export default Card1