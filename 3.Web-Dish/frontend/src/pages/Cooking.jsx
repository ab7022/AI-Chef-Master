 import { useEffect } from "react";
import "../Data/Video"
import Plyr from 'plyr';
import Hls from 'hls.js';
 
const Cooking = ({videoSource}) => {
    
   useEffect(() => {
      var video =document.getElementById('player');
      var source= videoSource || "./hls/inshot_20240103_185705791.m3u8";
      var defaultOptions={};
      if(Hls.isSupported()){
        const hls=new Hls();
        hls.loadSource(source);
        hls.on(Hls.Events.MANIFEST_PARSED,function(event,data){
          const avialableQualities=hls.levels.map((l)=>l.height)
  
          defaultOptions.controls=
          [
              'play-large', // The large play button in the center
              'restart', // Restart playback
              'rewind', // Rewind by the seek time (default 10 seconds)
              'play', // Play/pause playback
              'fast-forward', // Fast forward by the seek time (default 10 seconds)
              'progress', // The progress bar and scrubber for playback and buffering
              'current-time', // The current time of playback
              'duration', // The full duration of the media
              'mute', // Toggle mute
              'volume', // Volume control
              'captions', // Toggle captions
              'settings', // Settings menu
              'pip', // Picture-in-picture (currently Safari only)
              'airplay', // Airplay (currently Safari only)
              'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
              'fullscreen', // Toggle fullscreen
          ];
          defaultOptions.quality={
              default:avialableQualities[0],
              options:avialableQualities,
              forced:true,
              onChange:(e)=> updateQuality(e)
          }
          new Plyr(video,defaultOptions);
  
        });
        hls.attachMedia(video);
        window.hls=hls;
      }
      function updateQuality(newQuality) {
  window.hls.levels.forEach((level,levelIndex)=>{
      if(level.height===newQuality){
          window.hls.currentLevel=levelIndex;
      }
  })
      }
    
    
  },[] ); 
  return (
    <div className="h-full w-screen bg-[#f7f3cd] py-12">
        <div className="text-center text-black  text-4xl font-bold">
            Welcome to AI Chef Kitchen
        </div>
        <div className="flex items-center justify-center my-10">
            <div className=" w-[40rem]  bg-slate-500 ">
                <div>
                    <video controls id="player" className=""></video>
                </div>
             </div>
        </div>

    </div>  )
}

export default Cooking