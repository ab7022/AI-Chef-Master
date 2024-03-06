import RecommendedData from '../../Data/RecommendedData'
import Card2 from '../Card2'

const RecommendedDishes = () => {
  return (
    <div className="bg-[#00544f] py-16">
      <div className=" text-center">
        <h1 className='text-3xl text-white font-bold pb-8'>Recommended Dishes</h1>
        <div className="flex flex-wrap  items-center justify-center">
          {RecommendedData.map((item, index) => (
            <Card2 key={index} title={item.title} time={item.time} rating={item.rating} imageUrl={item.imageUrl} />
          ))}
        </div>
      </div>    
    </div>
  )
}

export default RecommendedDishes;
