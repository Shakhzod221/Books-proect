import { Carousel } from "antd"


const CarouselUI = () => {
  return (
    <Carousel autoplay={true} autoplaySpeed={4000}>
          <div className="banner-slide w-full h-[346px] px-[86px] py-[45px]">
            <h3 className="text-[63px] font-rotterburg text-[#C9AC8C] w-full max-w-[400px] leading-[65px]">
              Temuriylar davri adabiyoti</h3>
          </div>
          <div className="banner-slide w-full h-[346px] px-[86px] py-[45px]">
            <h3 className="text-[63px] font-rotterburg text-[#C9AC8C] w-full max-w-[400px] leading-[65px]">
              Kuch adolatdadur!</h3>
          </div>
          <div className="banner-slide w-full h-[346px] px-[86px] py-[45px]">
            <h3 className="text-[63px] font-rotterburg text-[#C9AC8C] w-full max-w-[400px] leading-[65px]">
              Temuriylar davri adabiyoti</h3>
          </div>
          <div className="banner-slide w-full h-[346px] px-[86px] py-[45px]">
            <h3 className="text-[63px] font-rotterburg text-[#C9AC8C] w-full max-w-[400px] leading-[65px]">
              Kuch adolatdadur!</h3>
          </div>
        </Carousel>
  )
}

export default CarouselUI
