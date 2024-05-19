import { useRouter } from "next/router";
import { JobQueue } from "../components/JobQueue";

export default function JobsPage() {
  const router = useRouter();

  return (
    <div className="jobs-page">
      <nav className="tabs">
        <button onClick={() => router.push("/")} className="tab">
          Style Generator
        </button>
        <button onClick={() => router.push("/jobs")} className="tab">
          Jobs
        </button>
        <button onClick={() => router.push("/dashboard")} className="tab">
          Dashboard
        </button>
      </nav>
      <div className="tab-content">
        <JobQueue />
      </div>

      <style jsx>{`
        .jobs-page {
          display: flex;
          flex-direction: column;
          height: 100vh;
          font-family: "Inter", sans-serif;
        }
        .tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
          background-color: #f1f1f1;
          padding: 10px;
        }
        .tab {
          padding: 10px 20px;
          margin: 0 10px;
          border: none;
          border-radius: 8px;
          background: #0070f3;
          color: #fff;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s;
        }
        .tab:hover {
          background: #005bb5;
        }
        .tab-content {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
