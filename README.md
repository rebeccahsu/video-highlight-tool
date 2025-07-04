# 🎬 Video Highlight Tool

A responsive, AI-assisted video highlight editing tool. Users can upload videos, view auto-generated transcripts, select key sentences, and preview a final highlight video with synchronized overlays.

> ✨ Built with React, TypeScript, Tailwind CSS  
> 🧠 AI logic simulated via mock API

---

## 📸 Demo

👉 [Live Demo URL](https://video-highlight-tool-rebeccahsus-projects.vercel.app/)  

---

## 📂 Features

- **Video Upload**  
  Upload a local video file for mock processing.

- **Transcript Editor (Left Panel)**  
  - Sectioned transcript display with timestamps  
  - Sentence selection via checkboxes  
  - Click timestamp to jump to specific time  
  - Auto-scroll highlights current sentence during preview

- **Highlight Preview (Right Panel)**  
  - Plays only selected highlight sentences  
  - Displays transcript text as overlay  
  - Smooth transitions between selected clips  
  - Custom timeline bar with selected regions

- **Synchronization**  
  - Editor ↔ Preview two-way sync  
  - Live updates based on selection and playback position

- **Responsive Design**  
  - Desktop: Side-by-side layout  
  - Mobile: Stacked vertical layout with fluid UI

---

## 🧰 Tech Stack

- **Frontend Framework**: React + Vite  
- **Language**: TypeScript  
- **Styling**: Tailwind CSS  
- **State Handling**: React Hooks (`useState`, `useEffect`, `useRef`)  
- **Video Playback**: HTML5 `<video>`  
- **AI Mock API**: JSON + `setTimeout` delay

---

## 📁 File Structure

```
src/
├── components/
│   ├── EditorPanel/
│   ├── PreviewPanel/
│   ├── VideoPlayer/
│   └── OverlayTextRenderer.tsx
├── data/                 # Mock API JSON
├── hooks/
├── utils/
└── App.tsx
```

---

## 🚀 Getting Started
1. Clone the Repository
```bash
git clone https://github.com/your-username/video-highlight-tool.git
cd video-highlight-tool
```
2. Install Dependencies
```bash
複製
編輯
npm install
# or
yarn
```
3. Start Development Server
```bash
npm run dev
```
4. Build for Production
```bash
npm run build
```

---

## 📦 Mock API Example
Example format used for mock response:

```json
{
  "fullTranscript": "Entire transcript text...",
  "sections": [
    {
      "title": "Introduction",
      "sentences": [
        { "text": "Welcome to the video.", "start": 0.5, "end": 3.2 }
      ]
    }
  ],
  "highlightSuggestions": ["Welcome to the video."]
}
```

---

## 📱 Responsive Design
- Uses Tailwind's responsive utilities (sm:, md:, lg:)
- Automatically adjusts layout for mobile view (vertical stacking)
- Touch-friendly controls for preview playback

---

## 📌 Notes
- This project simulates AI with mock data.
- No backend — all logic handled on the frontend.
- Highlights are simulated via jump cuts, not true video trimming.

---

## 📄 License
MIT License © 2025 Rebecca Hsu
