import type { HighlightClip, VideoControlsProps } from "../types";
import { formatTime, getHighlightTimelinePosition } from "../util";
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

export const VideoControls: React.FC<VideoControlsProps> = ({ 
  isPlaying, 
  currentTime, 
  duration, 
  highlightClips, 
  onTogglePlayPause, 
  onJumpToTime 
}) => {
  return (
    <div className="py-4 text-white">
      <div className="flex items-center justify-between space-x-4 mb-4">
        <button
          onClick={() => onJumpToTime(Math.max(0, currentTime - 10))}
          className="p-2 hover:opacity-80 transition-opacity"
        >
          <SkipBack className="h-5 w-5" />
        </button>
        <button
          onClick={onTogglePlayPause}
          className="p-3 hover:opacity-80 transition-opacity"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        <button
          onClick={() => onJumpToTime(Math.min(duration, currentTime + 10))}
          className="p-2 hover:opacity-80 transition-opacity"
        >
          <SkipForward className="h-5 w-5" />
        </button>

        <div className="flex justify-between text-lg font-bold text-white">
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      
      {/* Timeline */}
      <div className="relative mb-2">
        <div className="w-full bg-gray-700 rounded-md h-8">
          <div
            className="border-r-[3px] border-red-500 h-8 transition-all z-10"
            style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
          />
        </div>
        
        {/* Highlight clips */}
        {highlightClips.map((clip: HighlightClip) => {
          const position: React.CSSProperties = getHighlightTimelinePosition(clip.startTime, clip.endTime, duration);
          return (
            <div
              key={clip.id}
              className="absolute top-0 h-8 bg-blue-500 rounded-md opacity-75"
              style={position}
            />
          );
        })}
      </div>
    </div>
  );
};
