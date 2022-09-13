import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Video from "../../shared/video/Video";
import playBtn2 from '../../../assets/images/icons/play-btn2.webp'
import GaameVS1 from '../../../assets/images/team-logo/game-vs1.webp'
const MatchItem = ({
    title,
    date,
    slug,
    video_link,
    teamImage1,
    teamImage2,
}) => {
    // Video Modal Popup
    let video_arr, video_id, video_channel;
    if (video_link) {
        video_arr = video_link.split("=", -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }
    const [isOpen, setOpen] = useState(false);

    return (
        <Fragment>
            <div className="flex flex-col lg:flex-row lg:justify-between mb-8 items-center last:mb-0 border-4 border-secondary-90 bg-secondary-100 border-opacity-100 rounded-4xl px-6 py-8 lg:py-16 lg:px-8">
                <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0 upcoming_gaming_list">
                    <div className="upcoming_gaming_text text-white">
                        <p>{date}</p>
                        <h3 className="font-bold lg:text-35base mb-3 uppercase">
                            <Link
                                to={`/match/${slug}`}
                                className="hover:text-primary"
                            >
                                {title}
                            </Link>
                        </h3>
                        <span className="text-primary">
                            08 Teams Registered
                        </span>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:w-52 justify-center mb-6 lg:mb-0 text-center upcoming_play_video">
                    <span
                        className="video_popup w-28 h-28 bg-primary rounded-full flex items-center justify-center mx-auto"
                        role="button"
                        tabIndex="0"
                        onClick={() => setOpen(true)}
                        onKeyPress={(e) => console.log(e)}
                    >
                        <img
                            src={playBtn2}
                            alt=""
                        />
                    </span>{" "}
                    <span className="text-secondary block mt-4 lg:mt-8">
                        Youtube Stream
                    </span>
                </div>
                <div className="flex-1 flex justify-center items-center lg:justify-between lg:max-w-sm upcoming_gaming_thumb">
                    <div className="mx-1.5">
                        <div className="md:h-auto">
                            <img src={teamImage1 || teamImage2} alt="" />
                        </div>
                    </div>
                    <div className="mx-1.5">
                        <img
                            src={GaameVS1}
                            alt=""
                        />
                    </div>
                    <div className="mx-1.5">
                        <div className="md:h-auto">
                            <img src={teamImage2 || teamImage1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Video
                channel={video_channel}
                videoId={video_id}
                isOpen={isOpen}
                setOpen={setOpen}
            />
        </Fragment>
    );
};
export default MatchItem;
