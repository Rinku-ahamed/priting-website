import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import Slider2 from "../../data/header/header-slider.png";
import useGetSliderData from "../../hooks/useGetSliderData";
import { BaseURL } from "../../config/helpers";
const HeaderSlider = () => {
  const { sliders, isLoading } = useGetSliderData();
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {isLoading ? (
          <SwiperSlide>
            <div
              className="pt-[30px] md:pt-[50px] px-5 md:px-[45px] pb-[140px] bg-cover bg-top rounded"
              style={{ backgroundImage: `url(${Slider2})` }}
            >
              <h2
                className="text-white text-[28px] sm:text-[34px] md:text-[46px] font-bold md:leading-[58px]"
                style={{ textShadow: "2px 2px #292220" }}
              >
                Reza K. Chowdhury <br /> Fine Art
              </h2>
              <p className="font-medium text-[20px] text-black">
                The Complete works
              </p>
            </div>
          </SwiperSlide>
        ) : (
          sliders?.data?.map((item) => (
            <SwiperSlide key={item?.id}>
              <div
                className="pt-[30px] md:pt-[50px] px-5 md:px-[45px] pb-[140px] bg-cover bg-top rounded"
                style={{ backgroundImage: `url(${BaseURL}/${item?.image})` }}
              >
                <h2
                  className="text-white text-[28px] sm:text-[34px] md:text-[46px] font-bold md:leading-[58px]"
                  style={{ textShadow: "2px 2px #292220" }}
                >
                  Reza K. Chowdhury <br /> Fine Art
                </h2>
                <p className="font-medium text-[20px] text-[#cfec4a]">
                  The Complete works
                </p>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

export default HeaderSlider;
