import { useRouter } from "next/router";
import { useState } from "react";
import { MoreHorizontal } from "lucide-react";

export function JobQueue() {
  const [jobs, setJobs] = useState([
    { id: 1, name: "Attack on Titan", status: "completed" },
    { id: 2, name: "Avatar the Last Airbender clip", status: "in progress" },
    { id: 3, name: "Game of Thrones style", status: "in progress" },
  ]);
  const router = useRouter();

  const handleJobClick = (id: number) => {
    router.push("/dashboard");
  };

  const statusDot = (status) => (
    <span className={`status-dot ${status}`}></span>
  );

  return (
    <div className="job-queue">
      <h1 className="text-xl font-semibold mb-4">Finetuning Jobs</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-black">
          <thead className="bg-gray-50 border-b border-black">
            <tr>
              <th className="py-2 px-4 text-left border-r border-black">
                Job Name
              </th>
              <th className="py-2 px-4 text-left border-r border-black">
                Status
              </th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr
                key={job.id}
                className="border-b border-black hover:bg-gray-100"
                onClick={() => handleJobClick(job.id)}
              >
                <td className="py-2 px-4 border-r border-black">{job.name}</td>
                <td className="py-2 px-4 border-r border-black">
                  {statusDot(job.status)} {job.status}
                </td>
                <td className="py-2 px-4">
                  <div className="relative">
                    <button className="icon-button">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                    <div className="dropdown-content absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                      <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Edit
                      </button>
                      <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .job-queue {
          padding: 20px;
          padding-top: 0;
        }
        h1 {
          margin-top: 0;
        }
        .icon-button {
          background: none;
          border: none;
          cursor: pointer;
        }
        .dropdown-content {
          display: none;
        }
        .icon-button:hover + .dropdown-content,
        .dropdown-content:hover {
          display: block;
        }
        .status-dot {
          height: 10px;
          width: 10px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
        }
        .completed {
          background-color: green;
        }
        .in-progress {
          background-color: yellow;
        }
        .pending {
          background-color: red;
        }
        table {
          margin-top: 20px;
          border-collapse: collapse;
          width: 100%;
        }
        th,
        td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid black;
        }
        th {
          background-color: #f1f1f1;
        }
        tr:hover {
          background-color: #f1f1f1;
        }
      `}</style>
    </div>
  );
}
