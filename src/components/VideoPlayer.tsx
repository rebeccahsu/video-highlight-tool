import type { VideoPlayerProps } from "../types";
import { VideoControls } from "./VideoControls";

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  videoUrl, 
  currentTime, 
  duration, 
  isPlaying, 
  highlightClips, 
  currentSentenceText, 
  onTimeUpdate, 
  onLoadedMetadata, 
  onPlay, 
  onPause, 
  onTogglePlayPause, 
  onJumpToTime, 
  videoRef 
}) => {
  return (
    <div className="lg:w-1/2 py-2 px-4 bg-gray-800 flex flex-col">
      <h2 className="text-2xl font-bold text-white mb-4">Preview</h2>
      <div className="relative">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-contain"
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onLoadedMetadata}
          onPlay={onPlay}
          onPause={onPause}
        />

        {(!isPlaying && !currentSentenceText) && (
          <div className="absolute inset-0 flex items-end justify-start p-4 bg-black bg-opacity-50">
            <p className="text-white">Simply press this button to start.</p>
          </div>
        )}

        {currentSentenceText && (
          <div className="absolute bottom-2 left-4 right-4 bg-black bg-opacity-80 text-white p-2 rounded-lg">
            <p className="text-center text-lg">
              {currentSentenceText}
            </p>
          </div>
        )}
      </div>

      <VideoControls
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        highlightClips={highlightClips}
        onTogglePlayPause={onTogglePlayPause}
        onJumpToTime={onJumpToTime}
      />
    </div>
  );
};
