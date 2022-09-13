import React from "react";
import SectionTitle from '../../title/SectionTitle';
import WelcomeFeatures from "../../welcome-features/WelcomeFeatures";
import image_1_0 from '../../../assets/images/features/gaming-world1.webp'
import image_1_1 from '../../../assets/images/features/gaming-world-bg1.webp'
import image_2_0 from '../../../assets/images/features/gaming-world2.webp'
import image_2_1 from '../../../assets/images/features/gaming-world-bg2.webp'
import image_3_0 from '../../../assets/images/features/gaming-world3.webp'
import image_3_1 from '../../../assets/images/features/gaming-world-bg3.webp'
const WelcomeFeaturesArea = () => {
    const title_data = {
        "heading": "YOU ARE MOST WELCOME IN GAMING WORLD.",
        "showDescription": false,
        "subHeading": null,
        "color": null,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo voluptas voluptates?",
        "align": "center"
    }

    const card_data = [
        {
            "id": "features-1",
            "title": null,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo voluptas voluptates?",
            "designation": null,
            "link": null,
            "name": null,
            "rating": null,
            "subject": null,
            "icon": null,
            "countNumber": null,
            "headings": [
                {
                    "level": "h3",
                    "content": "LIVE STREAMING"
                }
            ],
            "images": [image_1_0,image_1_1],
            "action_link": null
        },
        {
            "id": "features-2",
            "title": null,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo voluptas voluptates?",
            "designation": null,
            "link": null,
            "name": null,
            "rating": null,
            "subject": null,
            "icon": null,
            "countNumber": null,
            "headings": [
                {
                    "level": "h3",
                    "content": "GAME NEWS"
                }
            ],
            "images": [image_2_0,image_2_1],
            "action_link": null
        },
        {
            "id": "features-3",
            "title": null,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo voluptas voluptates?",
            "designation": null,
            "link": null,
            "name": null,
            "rating": null,
            "subject": null,
            "icon": null,
            "countNumber": null,
            "headings": [
                {
                    "level": "h3",
                    "content": "GAME TOURNAMENTS"
                }
            ],
            "images": [image_3_0,image_3_1],
            "action_link": null
        }
    ]
    return (
        <section className="pt-16 md:pt-24">
            <div className="container px-4">
                <SectionTitle
                    heading={title_data.heading} {...title_data}
                />
                <div className="flex flex-wrap -mx-3 text-center">
                    {card_data &&
                        card_data.map((item) => (
                            <div
                                key={item.id}
                                className="w-full md:w-1/2 lg:w-1/3 px-4"
                            >
                                <WelcomeFeatures
                                    title={item.headings[0].content}
                                    level={item.headings[0].level}
                                    iconImage={item.images[0]}
                                    bgShapImage={item.images[1]}
                                    description={item.description}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default WelcomeFeaturesArea;
