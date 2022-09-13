import React from "react";
import Arrow from '../../assets/images/icons/arrrow-icon.webp'
import GamingUpdate from '../../assets/images/others/gaming-update.webp'
import { Link } from "react-router-dom";
import './GamingUpdateCard.css'

const GamingUpdateCard = () => {
    return (
        <div className="gaming-update-card relative mt-16 md:mt-28">
            <div className="gaming_update_text z-10 relative py-15 px-8 md:py-24 md:px-24 flex justify-between items-center flex-col lg:flex-row">
                <h2 className="uppercase font-bold text-center text-lg md:text-left">
                    Connect with us <br />
                    for gamING update.
                </h2>
                <div className="gaming_update_btn mt-8 lg:mt-0">
                    <Link to="/" className="flex flex-row items-center">
                        <p style={{fontSize:"24px"}} className="whitespace-nowrap">CONNECT NOW</p>
                        <img
                            className="align-middle ml-3 transition-all group-hover:ml-5"
                            src={Arrow}
                            alt=""
                        />
                    </Link>
                </div>
            </div>
            {/* <span className="absolute h-full top-0">
                <img
                    className="rounded-5xl relative h-full"
                    src={GamingUpdate}
                    alt=""
                />
            </span> */}
        </div>
    );
};
export default GamingUpdateCard;
