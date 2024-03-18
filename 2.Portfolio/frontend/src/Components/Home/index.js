import Pocket from "../HomeComponents/Pocket";
import News from "../HomeComponents/News";
import Unique from "../HomeComponents/Unique";
import Madein from "../HomeComponents/Madein";
import Happiness from "../HomeComponents/Happiness";
import Values from "../HomeComponents/Values";
import FooterItem from "../HomeComponents/FooterItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  return (
    <>
      <Unique />
      <News />
      <Madein />
      <Happiness />
      <Pocket />
      <Values />
      <FooterItem />
    </>
  );
}

export default Home;
