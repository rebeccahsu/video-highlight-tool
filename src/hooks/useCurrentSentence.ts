import { useCallback } from "react";
import type { TranscriptData } from "../types";

export const useCurrentSentence = (transcript: TranscriptData | null, currentTime: number) => {
  return useCallback(() => {
    if (!transcript) return null;
    
    for (const section of transcript.sections) {
      for (const sentence of section.sentences) {
        if (currentTime >= sentence.startTime && currentTime <= sentence.endTime) {
          return sentence;
        }
      }
    }
    return null;
  }, [transcript, currentTime]);
};