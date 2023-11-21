import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import useGetAllPainting from "../../hooks/useGetAllPainting";
import { BaseURL } from "../../config/helpers";
import { Link } from "react-router-dom";
const SingleViewSlider = () => {
  const { paintings } = useGetAllPainting();
  return (
    <div className="mt-6">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
        }}
      >
        {paintings?.data?.map(({ image, title, slug }) => (
          <SwiperSlide key={slug}>
            <Link to={`/painting-single/${slug}`}>
              <img
                src={`${BaseURL}/${image}`}
                alt={title}
                className="h-[250px] w-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

SingleViewSlider.propTypes = {
  painting: PropTypes.any,
};
export default SingleViewSlider;
