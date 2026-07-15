import React from "react";
import { useNavigate } from "react-router-dom";

const defaultInternships = [
  {
    id: 1,
    position: "Software Engineering Intern",
    department: "Engineering",
    slots: 5,
    applications: 14,
    status: "Open",
    postedDate: "Mar 1, 2025",
  },
  {
    id: 2,
    position: "UI/UX Design Intern",
    department: "Design",
    slots: 2,
    applications: 9,
    status: "Open",
    postedDate: "Feb 20, 2025",
  },
  {
    id: 3,
    position: "Data Analytics Intern",
    department: "Data Science",
    slots: 3,
    applications: 11,
    status: "Close",
    postedDate: "Feb 10, 2025",
  },
];

const departmentStyles = {
  Engineering: { bg: "#eef2ff", color: "#4338ca" },
  Design: { bg: "#fdf2f8", color: "#be185d" },
  "Data Science": { bg: "#ecfdf5", color: "#047857" },
};

function initials(text) {
  return text
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function InternshipListings({ internships = defaultInternships }) {
  const navigate = useNavigate();
  const totalSlots = internships.reduce((sum, i) => sum + i.slots, 0);
  const totalApplications = internships.reduce((sum, i) => sum + i.applications, 0);
  const openCount = internships.filter((i) => i.status === "Open").length;

  return (
    <>
      <style>{`
        .internship-listings {
          --maroon: #7a2331;
          --maroon-dark: #5f1b26;
          --ink: #14151a;
          --ink-soft: #6b7280;
          --ink-faint: #9aa0aa;
          --border: #e8e9ec;
          --surface-alt: #fafafb;

          width: 100%;
          height: 100%;
          max-width: none;
          margin: 0;
          padding: 28px 28px 8px;
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 16px;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04), 0 12px 24px -8px rgba(16, 24, 40, 0.06);
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          color: var(--ink);
          box-sizing: border-box;
          overflow-y: auto;
        }

        .internship-listings__header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 24px;
        }

        .internship-listings__eyebrow {
          margin: 0 0 4px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--maroon);
        }

        .internship-listings__title {
          margin: 0;
          font-size: 1.375rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--ink);
        }

        .internship-listings__subtitle {
          margin: 4px 0 0;
          font-size: 0.875rem;
          color: var(--ink-soft);
        }

        .internship-listings__post-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 10px;
          border: none;
          background: var(--maroon);
          color: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 1px 2px rgba(122, 35, 49, 0.25);
          transition: background 0.15s ease, transform 0.15s ease;
        }

        .internship-listings__post-btn:hover {
          background: var(--maroon-dark);
        }

        .internship-listings__post-btn:active {
          transform: translateY(1px);
        }

        .internship-listings__post-btn svg {
          width: 16px;
          height: 16px;
        }

        .internship-listings__stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 28px;
        }

        .internship-listings__stat {
          background: var(--surface-alt);
          padding: 14px 18px;
        }

        .internship-listings__stat-value {
          font-size: 1.375rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.2;
        }

        .internship-listings__stat-label {
          margin-top: 2px;
          font-size: 0.78rem;
          color: var(--ink-soft);
        }

        .internship-listings__table-wrap {
          width: 100%;
          overflow-x: auto;
        }

        .internship-listings__table {
          width: 100%;
          border-collapse: collapse;
        }

        .internship-listings__table thead th {
          text-align: left;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--ink-faint);
          padding: 0 12px 12px;
          border-bottom: 1px solid var(--border);
          white-space: nowrap;
        }

        .internship-listings__table th:first-child,
        .internship-listings__table td:first-child {
          padding-left: 4px;
        }

        .internship-listings__table tbody tr {
          border-bottom: 1px solid var(--border);
          transition: background 0.12s ease;
        }

        .internship-listings__table tbody tr:hover {
          background: var(--surface-alt);
        }

        .internship-listings__table tbody tr:last-child {
          border-bottom: none;
        }

        .internship-listings__table tbody td {
          padding: 16px 12px;
          font-size: 0.875rem;
          color: var(--ink);
          vertical-align: middle;
        }

        .internship-listings__role {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .internship-listings__avatar {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .internship-listings__position {
          font-weight: 600;
          color: var(--ink);
          line-height: 1.3;
        }

        .internship-listings__posted {
          margin-top: 2px;
          font-size: 0.76rem;
          font-weight: 500;
          color: var(--ink-faint);
        }

        .internship-listings__dept-tag {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
        }

        .internship-listings__num {
          font-variant-numeric: tabular-nums;
          font-weight: 600;
          color: var(--ink);
        }

        .internship-listings__status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px 5px 8px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
        }

        .internship-listings__status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .internship-listings__status--open {
          background: #ecfdf3;
          color: #067647;
        }

        .internship-listings__status--open .internship-listings__status-dot {
          background: #17b26a;
        }

        .internship-listings__status--close {
          background: #f2f4f7;
          color: #667085;
        }

        .internship-listings__status--close .internship-listings__status-dot {
          background: #98a2b3;
        }

        @media (max-width: 720px) {
          .internship-listings__stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .internship-listings__header {
            flex-wrap: wrap;
          }

          .internship-listings__table thead {
            display: none;
          }

          .internship-listings__table,
          .internship-listings__table tbody,
          .internship-listings__table tr,
          .internship-listings__table td {
            display: block;
            width: 100%;
          }

          .internship-listings__table tbody td {
            padding: 6px 4px;
          }

          .internship-listings__table tbody tr {
            padding: 12px 0;
          }
        }
      `}</style>

      <div className="internship-listings">
        <div className="internship-listings__header">
          <div>
            <p className="internship-listings__eyebrow">Company dashboard</p>
            <h1 className="internship-listings__title">Internship listings</h1>
            <p className="internship-listings__subtitle">
              Manage your open postings, available slots, and incoming applications.
            </p>
          </div>
          <button
            className="internship-listings__post-btn"
            type="button"
            onClick={() => navigate("/component-3/post")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
            Post internship
          </button>
        </div>

        <div className="internship-listings__stats">
          <div className="internship-listings__stat">
            <div className="internship-listings__stat-value">{internships.length}</div>
            <div className="internship-listings__stat-label">Total postings</div>
          </div>
          <div className="internship-listings__stat">
            <div className="internship-listings__stat-value">{openCount}</div>
            <div className="internship-listings__stat-label">Currently open</div>
          </div>
          <div className="internship-listings__stat">
            <div className="internship-listings__stat-value">{totalSlots}</div>
            <div className="internship-listings__stat-label">Total slots</div>
          </div>
          <div className="internship-listings__stat">
            <div className="internship-listings__stat-value">{totalApplications}</div>
            <div className="internship-listings__stat-label">Total applicants</div>
          </div>
        </div>

        <div className="internship-listings__table-wrap">
          <table className="internship-listings__table">
            <thead>
              <tr>
                <th>Position</th>
                <th>Department</th>
                <th>Slots</th>
                <th>Applications</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {internships.map((item) => {
                const deptStyle = departmentStyles[item.department] || {
                  bg: "#f2f4f7",
                  color: "#475467",
                };
                return (
                  <tr key={item.id}>
                    <td>
                      <div className="internship-listings__role">
                        <div
                          className="internship-listings__avatar"
                          style={{ background: deptStyle.bg, color: deptStyle.color }}
                        >
                          {initials(item.position)}
                        </div>
                        <div>
                          <div className="internship-listings__position">{item.position}</div>
                          <div className="internship-listings__posted">Posted {item.postedDate}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span
                        className="internship-listings__dept-tag"
                        style={{ background: deptStyle.bg, color: deptStyle.color }}
                      >
                        {item.department}
                      </span>
                    </td>
                    <td>
                      <span className="internship-listings__num">{item.slots}</span>
                    </td>
                    <td>
                      <span className="internship-listings__num">{item.applications}</span>
                    </td>
                    <td>
                      <span
                        className={
                          item.status === "Open"
                            ? "internship-listings__status internship-listings__status--open"
                            : "internship-listings__status internship-listings__status--close"
                        }
                      >
                        <span className="internship-listings__status-dot" />
                        {item.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
