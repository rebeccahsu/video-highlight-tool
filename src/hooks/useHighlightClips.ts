import { useCallback } from "react";
import type { HighlightClip, TranscriptData } from "../types";

export const useHighlightClips = (transcript: TranscriptData | null, selectedSentences: Set<number>) => {
  return useCallback((): HighlightClip[] => {
    if (!transcript || selectedSentences.size === 0) return [];
    
    const clips: HighlightClip[] = [];
    transcript.sections.forEach(section => {
      section.sentences.forEach(sentence => {
        if (selectedSentences.has(sentence.id)) {
          clips.push({
            id: sentence.id,
            text: sentence.text,
            startTime: sentence.startTime,
            endTime: sentence.endTime,
            duration: sentence.endTime - sentence.startTime
          });
        }
      });
    });
    return clips.sort((a, b) => a.startTime - b.startTime);
  }, [transcript, selectedSentences]);
};
