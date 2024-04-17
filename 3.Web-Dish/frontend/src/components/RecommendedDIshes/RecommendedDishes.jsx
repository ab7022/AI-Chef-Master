import RecommendedData from '../../Data/RecommendedData'
import Card2 from '../Card2'

const RecommendedDishes = () => {
  return (
    <div className="bg-[#f7f3cd] pb-16">
      <div className=" text-center">
        <h1 className='text-3xl font-bold pb-8'>Recommended Dishes</h1>
        <div className="flex flex-wrap gap-3 justify-center">
          {RecommendedData.map((item, index) => (
            <div className='flex-grow'>
              <Card2 key={index} title={item.title} time={item.time} rating={item.rating} imageUrl={item.imageUrl} />
            </div>
          ))}
        </div>
      </div>    
    </div>
  )
}

export default RecommendedDishes;
