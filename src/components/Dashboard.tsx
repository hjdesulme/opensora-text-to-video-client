"use client";

import { useState } from "react";
import { useStore } from "../store";
import { CornerDownLeft } from "lucide-react";

export function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const videoUrl = useStore((state) => state.videoUrl);
  const generateVideo = useStore((state) => state.generateVideo);

  const handleGenerate = () => {
    generateVideo(prompt);
  };

  return (
    <div className="dashboard">
      <header className="header">
        <h1 className="title">Attack on Titan - Video Style Generator</h1>
        <p className="description">
          Generate videos from text prompts using advanced AI technology.
        </p>
      </header>
      <main className="content">
        <div className="input-section">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your prompt here..."
            className="textarea"
          />
          <button onClick={handleGenerate} className="button">
            Generate Video
            <CornerDownLeft className="icon" />
          </button>
        </div>
        {videoUrl ? (
        <div className="output-section">
          <video src={videoUrl} controls autoPlay className="video" />
        </div>
      ) : (
        <p>No video to display</p>
      )}
      </main>
      <footer className="footer">
        <p>© 2024 Will you even read this? All rights reserved.</p>
      </footer>

      <style jsx>{`
        .dashboard {
          display: flex;
          flex-direction: column;
          height: 100vh;
          font-family: "Inter", sans-serif;
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
          padding: 20px;
          background-color: #f1f1f1;
        }
        .title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .description {
          font-size: 1rem;
          font-weight: 400;
          color: #666;
        }
        .content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        .input-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
          width: 100%;
        }
        .textarea {
          width: 100%;
          max-width: 600px;
          height: 100px;
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-family: "Inter", sans-serif;
          font-size: 1rem;
          color: #333;
          outline: none;
          transition: border-color 0.3s;
        }
        .textarea:focus {
          border-color: #0070f3;
        }
        .button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 8px;
          background: #0070f3;
          color: #fff;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s;
        }
        .button:hover {
          background: #005bb5;
        }
        .button .icon {
          margin-left: 8px;
        }
        .output-section {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 800px;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 20px;
          background: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .video {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .footer {
          text-align: center;
          padding: 10px;
          background-color: #f1f1f1;
        }
        .footer p {
          font-size: 0.875rem;
          color: #666;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
