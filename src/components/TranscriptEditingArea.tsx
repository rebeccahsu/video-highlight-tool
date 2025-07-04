import type { TranscriptEditingAreaProps } from "../types";
import { TranscriptSection } from "./TranscriptSection";

export const TranscriptEditingArea: React.FC<TranscriptEditingAreaProps> = ({ 
  transcript, 
  selectedSentences, 
  currentSentenceId, 
  onToggleSentence, 
  onJumpToTime, 
  editingAreaRef 
}) => {
  return (
    <div className="lg:w-1/2 py-2 px-4 overflow-y-auto bg-gray-50" ref={editingAreaRef}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Transcript</h2>
      <div className="space-y-6">
        {transcript.sections.map((section, sectionIndex) => (
          <TranscriptSection
            key={sectionIndex}
            section={section}
            sectionIndex={sectionIndex}
            selectedSentences={selectedSentences}
            currentSentenceId={currentSentenceId}
            onToggleSentence={onToggleSentence}
            onJumpToTime={onJumpToTime}
          />
        ))}
      </div>
    </div>
  );
};

