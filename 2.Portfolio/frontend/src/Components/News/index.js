import { Slide } from "react-reveal";
import FooterItem from "../HomeComponents/FooterItem";
import { Link } from "react-router-dom";

const AnimatedCard = ({ heading, description, officialURL, index }) => {
    return (
        <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} justify-center items-center w-full gap-8 md:gap-12 mx-auto my-12 px-4 sm:px-6 lg:px-8`}>
            <div className="relative flex flex-col justify-center gap-6 md:pt-0 items-center">
                <Slide left={index % 2 === 0} right={index % 2 !== 0}>
                    <h3 className="custom-text text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left">
                        {heading}
                    </h3>
                </Slide>
                <div className="w-[300px] h-[300px] z-1 rounded-full absolute top-[-25px] blur-3xl bg-[#8bfb451c]" />
                <div className="flex flex-col items-center max-w-3xl">
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

export default function News() {
    return (
        <>
            <div className='min-h-screen md:pb-16'>
                <div style={{ backgroundColor: 'rgba(0, 84, 79, 0.5)' }} className='flex justify-center items-center h-32 text-black'>
                    <h1 style={{ textShadow: '2px 0.5px 0.5px rgba(0, 0, 0, 0.5)' }} className='bg-green-500 text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-serif py-4 px-6 md:px-8 lg:px-10 xl:px-12 text-center md:text-left'>
                        News
                    </h1>
                </div>
                <div className="mt-6">
                    {newsData.map((obj, index) => (
                        <AnimatedCard key={index} index={index} {...obj} />
                    ))}
                </div>
            </div>
            <FooterItem />
        </>
    )
}

const newsData = [
    {
        heading: 'Swiggy and Zomato Face Potential ₹500 Crore GST Bill on Delivery Fees',
        description: "India's food delivery giants, Swiggy and Zomato, received GST notices demanding ₹500 crore each on their delivery charges. The authorities consider the fees as their revenue, while the companies argue they belong to the riders. If implemented, the tax could significantly impact their financials.",
        officialURL: 'https://www.businessinsider.in/business/news/zomato-swiggy-slapped-with-rs-500-crore-gst-each-report/articleshow/105411923.cms'
    },
    {
        heading: "WayCool Foods' tech subsidiary, SAP come together to empower food value chain startups",
        description: "CensaNext, Waycool's tech arm, teams up with SAP India to empower agritech and food chain startups through custom SAP S/4HANA access and managed infrastructure, enabling cost-effective growth. This collaboration signifies CensaNext's commitment to boosting innovation in the food ecosystem.",
        officialURL: 'https://economictimes.indiatimes.com/tech/technology/waycool-foods-tech-subsidiary-sap-come-together-to-empower-food-value-chain-startups/articleshow/106046644.cms?from=mdr'
    },
    {
        heading: 'EatSure partners with IRCTC for in-train food delivery across 100 stations',
        description: 'EatSure partnered with IRCTC to revolutionize train travel with in-train food delivery! Passengers across 100 stations can now order meals from multiple restaurants through the EatSure app, delivered directly to their seats using their PNR number. This partnership elevates train travel comfort and convenience, offering diverse food options from popular brands like Behrouz Biryani and Faasos.',
        officialURL: 'https://economictimes.indiatimes.com/industry/services/hotels-/-restaurants/eatsure-partners-with-irctc-for-in-train-food-delivery-across-100-stations/articleshow/104586716.cms?from=mdr'
    },
    {
        heading: 'Food tech company Enough raises €40 million',
        description: "Food tech company ENOUGH, maker of plant-based meat and dairy from fungi, secured €40 million investment despite a slowing alternative protein market.The funding, led by experienced investors in the sector, boosts ENOUGH's production capacity and partnerships with giants like Unilever and Marks & Spencer.",
        officialURL: 'https://economictimes.indiatimes.com/tech/funding/food-tech-company-enough-raises-40-million-euros/articleshow/102905004.cms?from=mdr'
    },
    {
        heading: 'Food-tech startup ChefKart unveils new service offerings to cater to diverse culinary preferences',
        description: 'Food-tech startup ChefKart has launched Chefit (one-time cooking service), Monthly Subscription (cook for a month), Chef for Party, and Royale (Full-time in-house cook).The company is based in Gurugram and offers trained and verified cooks for its various plans.',
        officialURL: 'https://economictimes.indiatimes.com/small-biz/sme-sector/food-tech-startup-chefkart-unveils-new-service-offerings-to-cater-to-diverse-culinary-preferences/articleshow/102898296.cms?from=mdr'
    },
    {
        heading: 'Carnegie Mellon Qatar Students Win Top Food Tech Idea for Printing Vegetables',
        description: "Carnegie Mellon Qatar students won the Qatar Development Bank Hackathon's food tech category with their innovative 3D-printed vegetable concept, earning 25,000 QAR for development. The idea addresses Qatar's food security challenges due to limited arable land.",
        officialURL: 'https://www.cmu.edu/news/stories/archives/2023/august/carnegie-mellon-qatar-students-win-top-food-tech-idea-for-printing-vegetables'
    },
]