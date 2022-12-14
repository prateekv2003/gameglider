import React, { Fragment, useState } from "react";
import Video from "../shared/video/Video";
import PlayBtn from '../../assets/images/icons/play-btn.webp'
import LiveVid from '../../assets/images/live-video/text-mini-shape.webp'

const LiveStreaming = ({ title, image, video_link }) => {
    // Video Modal Popup

    let video_arr, video_id, video_channel;
    console.log("video link", video_link)
    if (video_link) {
        video_arr = video_link.split("=", -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }
    const [isOpen, setOpen] = useState(false);

    return (
        <Fragment>
            <div className="gaming_video_thumb relative inline-block w-auto">
                <div className="h-260 md:h-auto">
                    <img src={image} alt="" width={1170} height={540}/>
                </div>
                <div className="gaming_video_paly_icon absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span
                        className="video_popup w-14 h-14 md:w-24 md:h-24 lg:w-28 lg:h-28 inline-block"
                        role="button"
                        tabIndex="0"
                        onClick={() => setOpen(true)}
                        onKeyPress={(e) => console.log(e)}
                    >
                        <span
                            className="animate-ping absolute inline-flex
                     h-full w-full rounded-full bg-purple-100 opacity-50"
                        ></span>
                        <img
                            className="relative"
                            src={PlayBtn}
                            alt=""
                        />
                    </span>
                </div>

                <div className="live_streaming_text absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <img
                        src={LiveVid}
                        alt=""
                    />
                    <h3 className="text-white absolute bottom-0 inset-x-1/2 transform -translate-x-1/2 p-1 flex items-center justify-center w-full h-full font-bold uppercase text-xs  sm:text-sm md:text-22base lg:text-md">
                        {title}
                    </h3>
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

export default LiveStreaming;
