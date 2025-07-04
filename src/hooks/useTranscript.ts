import { useCallback, useEffect, useState } from "react";
import type { TranscriptData } from "../types";

export const useTranscript = (transcript: TranscriptData | null) => {
  const [selectedSentences, setSelectedSentences] = useState<Set<number>>(new Set());

  // Initialize selected sentences when transcript loads
  useEffect(() => {
    if (transcript) {
      const initialSelected = new Set<number>();
      transcript.sections.forEach(section => {
        section.sentences.forEach(sentence => {
          if (sentence.selected) {
            initialSelected.add(sentence.id);
          }
        });
      });
      setSelectedSentences(initialSelected);
    }
  }, [transcript]);

  const toggleSentenceSelection = useCallback((sentenceId: number) => {
    setSelectedSentences(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(sentenceId)) {
        newSelected.delete(sentenceId);
      } else {
        newSelected.add(sentenceId);
      }
      return newSelected;
    });
  }, []);

  return {
    selectedSentences,
    toggleSentenceSelection,
  };
};
