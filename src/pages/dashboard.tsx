import { useRouter } from "next/router";
import { Dashboard } from "../components/Dashboard";
import { JobQueue } from "../components/JobQueue";
import { StyleGenerator } from "../components/StyleGenerator";

export default function DashboardPage() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="dashboard-page">
      <nav className="tabs">
        <button
          onClick={() => router.push("/")}
          className={`tab ${pathname === "/" ? "active" : ""}`}
        >
          Style Generator
        </button>
        <button
          onClick={() => router.push("/jobs")}
          className={`tab ${pathname === "/jobs" ? "active" : ""}`}
        >
          Jobs
        </button>
        <button
          onClick={() => router.push("/dashboard")}
          className={`tab ${pathname === "/dashboard" ? "active" : ""}`}
        >
          Dashboard
        </button>
      </nav>
      <div className="tab-content">
        {pathname === "/" && <StyleGenerator />}
        {pathname === "/jobs" && <JobQueue />}
        {pathname === "/dashboard" && <Dashboard />}
      </div>

      <style jsx>{`
        .dashboard-page {
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
        .tab.active {
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
