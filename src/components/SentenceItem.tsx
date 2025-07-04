import React from "react";
import type { SentenceItemProps } from "../types";
import { formatTime } from "../util";

export const SentenceItem: React.FC<SentenceItemProps> = React.memo(({ 
  sentence, 
  isSelected, 
  isCurrent, 
  onToggle, 
  onJumpToTime 
}) => {
  return (
    <div
      id={`sentence-${sentence.id}`}
      className={`p-2 rounded-lg border-2 transition-all duration-200 ${
        isSelected 
          ? 'bg-blue-500 text-white' 
          : 'bg-white'
      } ${isCurrent ? 'ring-2 ring-yellow-400' : ''}`}
      onClick={() => onToggle(sentence.id)}
    >
      <div className="flex items-start space-x-3">
        <div className="flex align-center gap-2">
            <button
            onClick={() => onJumpToTime(sentence.startTime)}
            className={`${isSelected ? 'text-white' : 'text-blue-600 hover:text-blue-800'} text-lg font-medium block`}
            >
            {formatTime(sentence.startTime)}
            </button>
          <p className="leading-relaxed font-medium">{sentence.text}</p>
        </div>
      </div>
    </div>
  );
});
