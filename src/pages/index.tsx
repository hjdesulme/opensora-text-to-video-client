import { useRouter } from "next/router";
import { StyleGenerator } from "../components/StyleGenerator";

export default function Home() {
  const router = useRouter();

  return (
    <div className="home">
      <nav className="tabs">
        <button
          onClick={() => router.push("/")}
          className={`tab ${router.pathname === "/" ? "active" : ""}`}
        >
          Style Generator
        </button>
        <button
          onClick={() => router.push("/jobs")}
          className={`tab ${router.pathname === "/jobs" ? "active" : ""}`}
        >
          Jobs
        </button>
        <button
          onClick={() => router.push("/dashboard")}
          className={`tab ${router.pathname === "/dashboard" ? "active" : ""}`}
        >
          Dashboard
        </button>
      </nav>
      <div className="tab-content">
        <StyleGenerator />
      </div>

      <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          height: 100vh;
          font-family: "Inter", sans-serif;
        }
        .tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
          background-color: #f9fafb;
          padding: 10px;
          border-bottom: 1px solid #e5e7eb;
        }
        .tab {
          padding: 10px 20px;
          margin: 0 10px;
          border: none;
          border-radius: 8px;
          background: #e5e7eb;
          color: #374151;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s;
        }
        .tab.active {
          background: #0070f3;
          color: #fff;
        }
        .tab:hover {
          background: #005bb5;
          color: #fff;
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
