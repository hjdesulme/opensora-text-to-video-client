import { useState } from "react";
import { useRouter } from "next/router";

export function StyleGenerator() {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleStartFinetuning = () => {
    // Logic to start finetuning job
    router.push("/jobs");
  };

  const handleShowJobs = () => {
    router.push("/jobs");
  };

  return (
    <div className="style-generator">
      <h1>Generate Video Based on Your Style</h1>
      <div className="input-section">
        <input
          type="text"
          value={url}
          onChange={handleUrlChange}
          placeholder="Enter video URL"
          className="input-bar"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="upload-button"
        />
        <button onClick={handleStartFinetuning} className="button">
          Start Finetuning Jobs
        </button>
        <button onClick={handleShowJobs} className="button">
          Show Current Jobs
        </button>
      </div>

      <style jsx>{`
        .style-generator {
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
        .input-bar {
          width: 100%;
          max-width: 600px;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        .upload-button {
          margin-bottom: 10px;
        }
        .button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 8px;
          background: #0070f3;
          color: #fff;
          cursor: pointer;
          margin: 5px;
        }
      `}</style>
    </div>
  );
}
