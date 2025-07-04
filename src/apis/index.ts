import type { TranscriptData } from "../types";

export const mockAIProcessing = async (): Promise<TranscriptData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        fullTranscript: "Welcome to our product demonstration. Today, we'll be showcasing our latest innovation. Our product has three main features. First, it's incredibly easy to use. Second, it's highly efficient. And third, it's cost-effective. Let me show you how it works. Simply press this button to start. The interface is intuitive and user-friendly. In conclusion, our product is a game-changer. We're excited to bring this to market. Thank you for your attention.",
        sections: [
          {
            title: "Introduction",
            sentences: [
              { id: 1, text: "Welcome to our product demonstration.", startTime: 0, endTime: 3, selected: false },
              { id: 2, text: "Today, we'll be showcasing our latest innovation.", startTime: 5, endTime: 8, selected: true }
            ]
          },
          {
            title: "Key Features",
            sentences: [
              { id: 3, text: "Our product has three main features.", startTime: 15, endTime: 18, selected: false },
              { id: 4, text: "First, it's incredibly easy to use.", startTime: 20, endTime: 23, selected: false },
              { id: 5, text: "Second, it's highly efficient.", startTime: 25, endTime: 28, selected: true },
              { id: 6, text: "And third, it's cost-effective.", startTime: 30, endTime: 33, selected: false }
            ]
          },
          {
            title: "Demonstration",
            sentences: [
              { id: 7, text: "Let me show you how it works.", startTime: 40, endTime: 43, selected: false },
              { id: 8, text: "Simply press this button to start.", startTime: 45, endTime: 48, selected: true },
              { id: 9, text: "The interface is intuitive and user-friendly.", startTime: 50, endTime: 53, selected: true }
            ]
          },
          {
            title: "Conclusion",
            sentences: [
              { id: 10, text: "In conclusion, our product is a game-changer.", startTime: 60, endTime: 63, selected: false },
              { id: 11, text: "We're excited to bring this to market.", startTime: 65, endTime: 68, selected: true },
              { id: 12, text: "Thank you for your attention.", startTime: 70, endTime: 73, selected: false }
            ]
          }
        ]
      });
    }, 2000);
  });
};