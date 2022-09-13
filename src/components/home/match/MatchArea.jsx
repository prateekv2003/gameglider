import React from "react";
import MatchItem from "./MatchItem";
import SectionTitle from "../../title/SectionTitle";
import Button from "../../shared/button/Button";

const MatchArea = ({ data }) => {
    console.log("ewefjnknwkwn");
    return (
        <section className="upcoming-gaming-section pb-16 md:pb-28">
            <div className="container">
                {data?.section_title && (
                    <div className="section-title mb-15">
                        <SectionTitle
                            heading={data?.section_title.heading}
                            {...data.section_title}
                        />
                    </div>
                )}
                {data?.items &&
                    data?.items.map((item) => (
                        <MatchItem
                            key={item.id}
                            title={item?.title}
                            date={item?.date}
                            slug={item?.slug}
                            video_link={item?.liveStreaming?.link}
                            teamImage1={item.teams[0]?.logo.src}
                            teamImage2={item.teams[1]?.logo.src}
                        />
                    ))}
                <div className="more-match text-center">
                    {data?.buttons &&
                        data.buttons.map(({ id, content, ...props }) => (
                            <Button
                                key={id}
                                {...props}
                                className="text-white mt-15"
                            >
                                {content}
                            </Button>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default MatchArea;
