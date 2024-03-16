/** @format */

document.addEventListener("DOMContentLoaded", () => {
  var video = document.getElementById("player");
  var source = "../../public/hls/inshot_20240103_185705791.m3u8";

  const defaultOptions = {};
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(source);
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      const avialableQualities = hls.levels.map((l) => l.height);

      defaultOptions.controls = [
        "play-large", // The large play button in the center
        "restart", // Restart playback
        "rewind", // Rewind by the seek time (default 10 seconds)
        "play", // Play/pause playback
        "fast-forward", // Fast forward by the seek time (default 10 seconds)
        "progress", // The progress bar and scrubber for playback and buffering
        "current-time", // The current time of playback
        "duration", // The full duration of the media
        "mute", // Toggle mute
        "volume", // Volume control
        "captions", // Toggle captions
        "settings", // Settings menu
        "pip", // Picture-in-picture (currently Safari only)
        "airplay", // Airplay (currently Safari only)
        "download", // Show a download button with a link to either the current source or a custom URL you specify in your options
        "fullscreen" // Toggle fullscreen
      ];
      defaultOptions.quality = {
        default: avialableQualities[0],
        options: avialableQualities,
        forced: true,
        onChange: (e) => updateQuality(e)
      };
      new Plyr(video, defaultOptions);
    });
    hls.attachMedia(video);
    window.hls = hls;
  }
  function updateQuality(newQuality) {
    window.hls.levels.forEach((level, levelIndex) => {
      if (level.height === newQuality) {
        window.hls.currentLevel = levelIndex;
      }
    });
  }
});
