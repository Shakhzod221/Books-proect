import CarouselUI from "../../components/carousel";
import Tabs from "../../components/tabs";


const Home = () => {
  
  return (
    <div className="container-box ">
      <div className="relative">
        <div className="mt-[54px] rounded-[21px] overflow-hidden">
          <CarouselUI/>
        </div>
      </div>
      <Tabs/>
    </div>
  );
};

export default Home;
