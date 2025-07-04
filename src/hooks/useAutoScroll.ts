import { useEffect } from "react";

export const useAutoScroll = (
  currentSentenceId: number | null,
  editingAreaRef: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    if (currentSentenceId && editingAreaRef.current) {
      const sentenceElement = document.getElementById(`sentence-${currentSentenceId}`);
      if (sentenceElement) {
        sentenceElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentSentenceId, editingAreaRef]);
};