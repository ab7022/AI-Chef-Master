import { useEffect } from "react";
import Plyr from 'plyr';
import Hls from 'hls.js';

const Cooking = ({ videoSource }) => {
    useEffect(() => {
        const video = document.getElementById('player');
        const source = videoSource  
        const isHLS = source.toLowerCase().endsWith('.m3u8');

        if (isHLS && Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(source);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                new Plyr(video); // Initialize Plyr player once HLS is ready
            });
        } else {
            // MP4 video source
            video.src = source;
            new Plyr(video); // Initialize Plyr player for MP4
        }
    }, [videoSource]);

    return (
        <div className="h-full w-full">
            <div className="flex items-center justify-center py-5 md:py-8">
                <div className="w-full h-auto">
                    <video controls id="player" className="w-full"></video>
                </div>
            </div>
        </div>
    );
};

export default Cooking;
