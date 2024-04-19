import { Fade, Slide } from "react-reveal";
import FooterItem from "../HomeComponents/FooterItem";
import { Link } from "react-router-dom";

const AnimatedCard = ({ imageURL, heading, description, officialURL, index }) => {
    return (
        <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} justify-center items-center w-full gap-8 md:gap-12 mx-auto my-12 px-4 sm:px-6 lg:px-8`}>
            <Fade right={index % 2 === 0} left={index % 2 !== 0}>
                <img
                    src={imageURL}
                    className="w-full h-64 md:h-96 md:w-1/3 rounded-lg shadow-lg"
                    alt=''
                />
            </Fade>
            <div className="relative flex flex-col justify-center gap-6 md:gap-10 md:pt-0 items-center max-w-md md:max-w-[400px]">
                <Slide left={index % 2 === 0} right={index % 2 !== 0}>
                    <h3 className="custom-text text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left">
                        {heading}
                    </h3>
                </Slide>
                <div className="w-[300px] h-[300px] z-1 rounded-full absolute top-[-25px] blur-3xl bg-[#8bfb451c]" />
                <div className="flex flex-col items-center">
                    <Slide left={index % 2 === 0} right={index % 2 !== 0}>
                        <p className="custom-text-secondary text-lg sm:text-lg mb-3 box-border leading-6 md:text-xl text-center md:text-left  ">
                            {description}
                        </p>
                    </Slide>
                    <Link
                        to={officialURL}
                        className="relative z-10 w-fit py-2 px-3 bg-white text-lg rounded-lg shadow-md transition hover:shadow-lg hover:scale-105 no-underline text-black !cursor-pointer"
                    >
                        Read More
                    </Link>
                </div>
            </div >
        </div >
    );
};

export default function Blogs() {
    return (
        <>
            <div className='min-h-screen md:pb-16'>
                <div style={{ backgroundColor: 'rgba(0, 84, 79, 0.5)' }} className='flex justify-center items-center h-32 text-black'>
                    <h1 style={{ textShadow: '2px 0.5px 0.5px rgba(0, 0, 0, 0.5)' }} className='bg-green-500 text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-serif py-4 px-6 md:px-8 lg:px-10 xl:px-12 text-center md:text-left'>
                        Blogs
                    </h1>
                </div>
                <div className="mt-6">
                    {blogData.map((obj, index) => (
                        <AnimatedCard key={index} index={index} {...obj} />
                    ))}
                </div>
            </div>
            <FooterItem />
        </>
    )
}

const blogData = [
    {
        heading: 'Pinch of Yum',
        description: 'Explores a wide variety of cuisines, offering inventive and visually stunning recipes that are perfect for everyday meals or special occasions.',
        imageURL: 'https://cdn.apartmenttherapy.info/image/upload/v1634761870/k/Photo/Series/2021-veg-chilis-showdown/recipe-showdown-vegeterian-chili-inpost-pinch.png',
        officialURL: 'https://pinchofyum.com/'
    },
    {
        heading: 'Budget Bytes',
        description: 'Specializes in creating budget-friendly meals that are still bursting with flavor. Ideal for those seeking to explore new dishes without breaking the bank.',
        imageURL: 'https://cdn.shopify.com/s/files/1/0516/9125/8051/files/budgetbytes_logo.vFINALalt.png?height=628&pad_color=fff&v=1613717994&width=1200',
        officialURL: 'https://www.budgetbytes.com/'
    },
    {
        heading: 'I Am A Food Blog',
        description: 'A haven for adventurous food lovers, featuring unique and exciting recipes that will tantalize your taste buds and broaden your culinary horizons.',
        imageURL: 'https://boyo.l8t.top/wp-content/uploads/2019/03/best_food_blogs_i_am_a_food_blog.jpg',
        officialURL: 'https://iamafoodblog.com/'
    },
    {
        heading: 'The Pioneer Woman',
        description: "Embrace the warmth and nostalgia of Ree Drummond's down-home cooking recipes. From hearty family meals to comforting desserts, her blog offers a taste of Americana.",
        imageURL: 'https://m.media-amazon.com/images/I/912XgiofyXL._AC_UF1000,1000_QL80_.jpg',
        officialURL: 'https://www.thepioneerwoman.com/'
    },
    {
        heading: 'Cookie and Kate',
        description: 'Caters to dietary needs and preferences with a focus on easy customization. Find adaptable recipes that suit various tastes and restrictions, ensuring everyone can enjoy a delicious meal.',
        imageURL: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2022-01-Recipe-Showdown-Grilled-Cheese%2FCookie-and-Kate%2FRecipeShowdown_Grilled_Cheese-Cookie_Kate',
        officialURL: 'https://cookieandkate.com/'
    },
    {
        heading: 'Smitten Kitchen',
        description: 'Specializes in delectable baked goods, offering meticulously tested recipes and clear instructions that empower you to become a baking pro.',
        imageURL: 'https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2022/05/SKK-Final-Cover-Fruit-Horizontal-scaled.jpg?fit=1200%2C800&ssl=1',
        officialURL: 'https://smittenkitchen.com/'
    },
    {
        heading: 'Damn Delicious',
        description: 'Features quick and easy recipes that are bursting with flavor. Perfect for busy weeknights or when you want a crowd-pleasing dish without the hassle.',
        imageURL: 'https://storage.googleapis.com/gen-atmedia/3/2019/01/3d837ac1b3274cd3eb6f8b0b78cf60f9ea8001bb.png',
        officialURL: 'https://damndelicious.net/'
    },
]