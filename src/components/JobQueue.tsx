import { useRouter } from "next/router";
import { useState } from "react";

export function JobQueue() {
  const [jobs, setJobs] = useState([
    { id: 1, name: "Job 1", status: "completed" },
    { id: 2, name: "Job 2", status: "in progress" },
    // More jobs here
  ]);
  const router = useRouter();

  const handleJobClick = (id: number) => {
    // Navigate to the Dashboard page when a job is clicked
    router.push("/dashboard");
  };

  return (
    <div className="job-queue">
      <h1>Finetuning Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} onClick={() => handleJobClick(job.id)}>
            {job.name} - {job.status}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .job-queue {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          margin: 5px 0;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
