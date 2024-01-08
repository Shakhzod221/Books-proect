import CarouselUI from "../../components/carousel";
import SearchBox from "../../components/search-box";
import Tabs from "../../components/tabs";


const Home = () => {
  
  return (
    <div className="container-box ">
      <div className="relative">
        <div className="mt-[54px] rounded-[21px] overflow-hidden">
          <CarouselUI/>
        </div>

      <SearchBox/>

      </div>
      <Tabs/>
    </div>
  );
};

export default Home;
