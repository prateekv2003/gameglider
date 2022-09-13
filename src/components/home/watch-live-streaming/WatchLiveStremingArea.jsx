import React from "react";
import LiveStreaming from "../../../components/live-streaming/LiveStreaming";
import Swiper, { SwiperSlide } from "../../shared/swiper/SwiperSlider";
import LeftArrow from '../../../assets/images/icons/navigation-arrow1.webp'
import RightArrow from '../../../assets/images/icons/navigation-arrow2.webp'
import GamingBG from '../../../assets/images/live-video/gaming-bg1.webp'

const WatchLiveStremingArea = () => {

    const items = [
        {
            "id": "watch-live-1",
            "link": "https://www.youtube.com/watch?v=d3dNoCRzbAs",
            "headings": [
                {
                    "content": "SKRIT Watch Live",
                    "level": "h3"
                }
            ],
            "images": [
                {
                    "alt": "SKRIT LIVE STREAMING",
                    "src": GamingBG
                }
            ]
        },

        {
            "id": "watch-live-1",
            "link": "https://www.youtube.com/watch?v=d3dNoCRzbAs",
            "headings": [
                {
                    "content": "Watch Live Streaming",
                    "level": "h3"
                }
            ],
            "images": [
                {
                    "alt": "LIVE STREAMING",
                    "src": GamingBG
                }
            ]
        },

        {
            "id": "watch-live-1",
            "link": "https://www.youtube.com/watch?v=d3dNoCRzbAs",
            "headings": [
                {
                    "content": "Watch Live Streaming",
                    "level": "h3"
                }
            ],
            "images": [
                {
                    "alt": "LIVE STREAMING",
                    "src": GamingBG
                }
            ]
        }
    ]
    
    return (
        <section className="watch-live-section py-16 md:py-28">
            <div className="container">
                <div className="relative">
                    <Swiper
                        className="relative"
                        layout={{
                            nav: "watch-live-navigation",
                            dots: "watch-live-dots-style",
                        }}
                        navigation={{
                            nextEl: ".watch-live-slider-button-next",
                            prevEl: ".watch-live-slider-button-prev",
                        }}
                        slidesPerView={1}
                        spaceBetween={0}
                    >
                        {items && items.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <LiveStreaming
                                        title={
                                            item?.headings[0].content
                                        }
                                        image={
                                            item?.images[0].src
                                        }
                                        video_link={item?.link}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                    <div className="absolute w-full z-10 top-1/2 transform -translate-y-1/2">
                        <div
                            className="watch-live-slider-button-prev swipper-arrow text-white absolute top-2/4 
                    transform -translate-x-2/4 w-14 h-10 lg:w-68 lg:h-55 flex items-center justify-center  
                    bg-arrow-shape hover:bg-arrow-hover-shape transition-all left-auto -right-8 bg-cover"
                        >
                            <img
                                src={LeftArrow}
                                alt=""
                            />
                        </div>
                        <div
                            className="watch-live-slider-button-next swipper-arrow text-white absolute top-2/4 
                    transform -translate-x-2/4 w-14 h-10 lg:w-68 lg:h-55 flex items-center justify-center 
                    bg-arrow-shape hover:bg-arrow-hover-shape transition-all left-8 bg-cover"
                        >
                            <img
                                src={RightArrow}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WatchLiveStremingArea;
