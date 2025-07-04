import { useRef, useState } from "react";
import { mockAIProcessing } from "../apis";
import { useAutoScroll } from "../hooks/useAutoScroll";
import { useCurrentSentence } from "../hooks/useCurrentSentence";
import { useHighlightClips } from "../hooks/useHighlightClips";
import { useTranscript } from "../hooks/useTranscript";
import { useVideoPlayer } from "../hooks/useVideoPlayer";
import { LoadingSpinner } from "./LoadingSpinner";
import { TranscriptEditingArea } from "./TranscriptEditingArea";
import { VideoPlayer } from "./VideoPlayer";
import { VideoUpload } from "./VideoUpload";
import type { TranscriptData } from "../types";

const VideoHighlightTool: React.FC = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<TranscriptData | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null!);
  const editingAreaRef = useRef<HTMLDivElement>(null!);
  
  const {
    currentTime,
    duration,
    isPlaying,
    handleTimeUpdate,
    handleLoadedMetadata,
    handlePlay,
    handlePause,
    togglePlayPause,
    jumpToTime,
  } = useVideoPlayer(videoRef);
  
  const { selectedSentences, toggleSentenceSelection } = useTranscript(transcript);
  const getCurrentSentence = useCurrentSentence(transcript, currentTime);
  const getHighlightClips = useHighlightClips(transcript, selectedSentences);
  
  const currentSentence = getCurrentSentence();
  const highlightClips = getHighlightClips();
  
  useAutoScroll(currentSentence?.id || null, editingAreaRef);

  const handleVideoUpload = async (file: File) => {
    setVideoFile(file);
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
    setIsProcessing(true);
    
    try {
      const result = await mockAIProcessing();
      setTranscript(result);
    } catch (error) {
      console.error('Error processing video:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Video Highlight Tool</h1>
        
        {!videoFile ? (
          <VideoUpload onVideoUpload={handleVideoUpload} />
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {isProcessing ? (
              <LoadingSpinner />
            ) : transcript ? (
              <div className="flex flex-col lg:flex-row h-[calc(100vh-5.75rem)]">
                <TranscriptEditingArea
                  transcript={transcript}
                  selectedSentences={selectedSentences}
                  currentSentenceId={currentSentence?.id || null}
                  onToggleSentence={toggleSentenceSelection}
                  onJumpToTime={jumpToTime}
                  editingAreaRef={editingAreaRef}
                />
                
                <VideoPlayer
                  videoUrl={videoUrl}
                  currentTime={currentTime}
                  duration={duration}
                  isPlaying={isPlaying}
                  highlightClips={highlightClips}
                  currentSentenceText={currentSentence?.text || ''}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onPlay={handlePlay}
                  onPause={handlePause}
                  onTogglePlayPause={togglePlayPause}
                  onJumpToTime={jumpToTime}
                  videoRef={videoRef}
                />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoHighlightTool;