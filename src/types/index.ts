// Types
export interface Sentence {
  id: number;
  text: string;
  startTime: number;
  endTime: number;
  selected: boolean;
}

export interface Section {
  title: string;
  sentences: Sentence[];
}

export interface TranscriptData {
  fullTranscript: string;
  sections: Section[];
}

export interface HighlightClip {
  id: number;
  text: string;
  startTime: number;
  endTime: number;
  duration: number;
}

export interface VideoUploadProps {
  onVideoUpload: (file: File) => void;
}

export interface TranscriptSectionProps {
  section: Section;
  sectionIndex: number;
  selectedSentences: Set<number>;
  currentSentenceId: number | null;
  onToggleSentence: (sentenceId: number) => void;
  onJumpToTime: (time: number) => void;
}

export interface SentenceItemProps {
  sentence: Sentence;
  isSelected: boolean;
  isCurrent: boolean;
  onToggle: (sentenceId: number) => void;
  onJumpToTime: (time: number) => void;
}

export interface VideoPlayerProps {
  videoUrl: string;
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  highlightClips: HighlightClip[];
  currentSentenceText: string;
  onTimeUpdate: () => void;
  onLoadedMetadata: () => void;
  onPlay: () => void;
  onPause: () => void;
  onTogglePlayPause: () => void;
  onJumpToTime: (time: number) => void;
  videoRef: React.RefObject<HTMLVideoElement>;
}

export interface VideoControlsProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  highlightClips: HighlightClip[];
  onTogglePlayPause: () => void;
  onJumpToTime: (time: number) => void;
}

export interface TranscriptEditingAreaProps {
  transcript: TranscriptData;
  selectedSentences: Set<number>;
  currentSentenceId: number | null;
  onToggleSentence: (sentenceId: number) => void;
  onJumpToTime: (time: number) => void;
  editingAreaRef: React.RefObject<HTMLDivElement>;
}
