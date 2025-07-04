const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const getHighlightTimelinePosition = (startTime: number, endTime: number, duration: number) => {
  if (duration === 0) return { left: 0, width: 0 };
  const left = (startTime / duration) * 100;
  const width = ((endTime - startTime) / duration) * 100;
  return { left: `${left}%`, width: `${width}%` };
};

export { formatTime, getHighlightTimelinePosition };