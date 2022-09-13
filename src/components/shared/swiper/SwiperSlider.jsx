import React from "react";
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

const SwiperSlider = ({ children, layout, ...props }) => {
    const settings = {
        spaceBetween: 50,
        slidesPerView: 4,
        loop: true,
        centeredSlides: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        ...props,
    };
    const { nav, dots } = layout;
    return (
        <div className={`swiper-main-wrapper ${nav} ${dots}`}>
            <Swiper loop={true} {...settings}>{children}</Swiper>
        </div>
    );
};

export { SwiperSlide };

export default SwiperSlider;
