import React from "react";
import HeroImage from "../../../assets/images/hero/hero-bg1.webp";
import HeroPosition from '../../../assets/images/hero/hero-position-img.webp'
import './homeHero.css'

const HeroArea = ({ data }) => {
    return (
        <section
            className="relative h-540 md:h-650 lg:h-780 xl:h-940 bg-no-repeat bg-center bg-cover flex items-center custom-homeHero-section text-white"
        >
            <div className="container px-4 z-10">
                <div className="text-white mt-16">
                    <h1 className="mb-6 sm:mb-10 text-shadow uppercase max-w-3xl text-3xl font-bold">
                        Game Glider
                    </h1>
                    <p className="text-base  lg:text-md font-bold mb-6 sm:mb-10 ">
                        Dive into gaming universe...
                    </p>
                    {/* <Button key={id} {...props} className="text-white">
                        {content}
                        <StaticImage
                            className="align-middle ml-3 transition-all group-hover:ml-5"
                            src="../../../data/images/icons/arrrow-icon.webp"
                            alt=""
                        />
                    </Button> */}
                </div>
            </div>
            <div className="absolute right-1 bottom-0">
                <img                                                    // !!!!!!!!!!!!!!!!
                    className="w-96 md:w-650 xl:w-auto object-contain"  //Prateek ->Define md xl in tailwindcss to work..
                    src={HeroPosition}
                    alt=""
                    width="300px"
                    height="300px"
                />
            </div>
        </section>
    );
};

export default HeroArea;
