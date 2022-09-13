import React from "react";
import './welcomeFeatures.css'
const WelcomeFeatures = ({ title, description, iconImage, bgShapImage }) => {
   
    return (
        <div className="py-15 px-12 relative mt-10 custom_card-bg">
            <div className="content relative z-10 flex items-center justify-center flex-col">
                <img className="mb-10" src={iconImage} alt={title} />
                <h3 className="font-bold text-white mb-4">{title}</h3>
                <p className="text-white leading-7">{description}</p>
            </div>
            <div className="absolute inset-0 z-0 flex justify-center items-center">
                <img src={bgShapImage} alt={title} className="h-full"/>
            </div>
        </div>
    );
};

export default WelcomeFeatures;
