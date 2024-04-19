import Typewriter from "../components/Typewriter";
import { archived } from "../data/archivedData";
import Card from "./Card";

export default function Archives({ lightMode }) {
    return (
        <div className="flex flex-col w-full md:w-5/6 mx-auto min-h-[calc(100dvh-56px)] items-center justify-center px-2">
            <img src='/CompanyLogo.png' alt="" className="w-36 h-36" />
            <Typewriter text="Chef Intelligence" delay={200} />

            <h2 className="font-semibold">Archived Recipes</h2>

            <div className="my-2 flex flex-wrap justify-center gap-4">
                {archived.map((item, i) => (
                    <Card
                        key={i}
                        title={item.dishName}
                        imageUrl={item.dishImage}
                        time="60"
                        rating={item.rating}
                        dishPath="#"
                    />
                ))}
            </div>
        </div>
    );
}