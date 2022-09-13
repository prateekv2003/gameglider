import React from "react";
import ModalVideo from "react-modal-video";
import { Portal } from "react-portal";
const Video = ({ channel, isOpen, videoId, setOpen }) => {
    return (
        <Portal>
            <ModalVideo
                channel={channel}
                autoplay
                isOpen={isOpen}
                videoId={videoId}
                onClose={() => setOpen(false)}
            />
        </Portal>
    );
};

export default Video;
