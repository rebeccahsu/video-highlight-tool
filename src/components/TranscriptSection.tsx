import React from "react";
import type { TranscriptSectionProps } from "../types";
import { SentenceItem } from "./SentenceItem";

export const TranscriptSection: React.FC<TranscriptSectionProps> = React.memo(({ 
  section, 
  selectedSentences, 
  currentSentenceId, 
  onToggleSentence, 
  onJumpToTime 
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h3>
      <div className="space-y-2">
        {section.sentences.map((sentence) => (
          <SentenceItem
            key={sentence.id}
            sentence={sentence}
            isSelected={selectedSentences.has(sentence.id)}
            isCurrent={currentSentenceId === sentence.id}
            onToggle={onToggleSentence}
            onJumpToTime={onJumpToTime}
          />
        ))}
      </div>
    </div>
  );
});