import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import useGetAllPainting from "./../../hooks/useGetAllPainting";
import { BaseURL } from "../../config/helpers";
import { Link } from "react-router-dom";
const SinglePageSliderLast = () => {
  const { paintings } = useGetAllPainting();
  return (
    <div className="mt-6">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 3,
          },
        }}
      >
        {paintings?.data?.map(({ image, slug, title }) => (
          <SwiperSlide key={slug}>
            <Link to={`/painting-single/${slug}`}>
              <div className="h-[250px] w-full bg-[#e2e2c7] p-4">
                <img
                  src={`${BaseURL}/${image}`}
                  alt={title}
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

SinglePageSliderLast.propTypes = {
  painting: PropTypes.any,
};
export default SinglePageSliderLast;
