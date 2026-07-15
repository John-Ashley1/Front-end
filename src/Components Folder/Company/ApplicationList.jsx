import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import applicants from "./applicantsData";

const avatarPalette = [
  { bg: "#e0edff", color: "#1d4ed8" },
  { bg: "#dcfce7", color: "#15803d" },
  { bg: "#fdf2f8", color: "#be185d" },
  { bg: "#fef3c7", color: "#b45309" },
  { bg: "#ede9fe", color: "#6d28d9" },
];

const statusStyles = {
  Pending: { bg: "#fef3e2", color: "#b45309", dot: "#f59e0b" },
  Shortlisted: { bg: "#fef3c7", color: "#92620a", dot: "#eab308" },
  Accepted: { bg: "#ecfdf3", color: "#067647", dot: "#17b26a" },
};

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ApplicationList() {
  const navigate = useNavigate();
  const [internshipFilter, setInternshipFilter] = useState("All internships");
  const [statusFilter, setStatusFilter] = useState("All status");

  const internshipOptions = useMemo(
    () => ["All internships", ...new Set(applicants.map((a) => a.appliedFor))],
    []
  );
  const statusOptions = ["All status", "Pending", "Shortlisted", "Accepted"];

  const filtered = applicants.filter((a) => {
    const matchesInternship =
      internshipFilter === "All internships" || a.appliedFor === internshipFilter;
    const matchesStatus = statusFilter === "All status" || a.status === statusFilter;
    return matchesInternship && matchesStatus;
  });

  return (
    <>
      <style>{`
        .application-list {
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

        .application-list__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 22px;
          flex-wrap: wrap;
        }

        .application-list__title {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--maroon);
          letter-spacing: -0.01em;
        }

        .application-list__filters {
          display: flex;
          gap: 10px;
        }

        .application-list__select-wrap {
          position: relative;
        }

        .application-list__select {
          appearance: none;
          padding: 9px 34px 9px 14px;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: #fff;
          font-family: inherit;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--ink);
          cursor: pointer;
          min-width: 150px;
        }

        .application-list__select:focus {
          outline: none;
          border-color: var(--maroon);
        }

        .application-list__select-icon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 15px;
          height: 15px;
          color: var(--ink-soft);
          pointer-events: none;
        }

        .application-list__table-wrap {
          width: 100%;
          overflow-x: auto;
        }

        .application-list__table {
          width: 100%;
          border-collapse: collapse;
        }

        .application-list__table thead th {
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

        .application-list__table th:first-child,
        .application-list__table td:first-child {
          padding-left: 4px;
        }

        .application-list__table tbody tr {
          border-bottom: 1px solid var(--border);
          transition: background 0.12s ease;
        }

        .application-list__table tbody tr:hover {
          background: var(--surface-alt);
        }

        .application-list__table tbody tr:last-child {
          border-bottom: none;
        }

        .application-list__table tbody td {
          padding: 16px 12px;
          font-size: 0.875rem;
          color: var(--ink);
          vertical-align: middle;
        }

        .application-list__applicant {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .application-list__avatar {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .application-list__name {
          font-weight: 600;
          color: var(--ink);
          line-height: 1.3;
        }

        .application-list__applied-date {
          margin-top: 2px;
          font-size: 0.76rem;
          font-weight: 500;
          color: var(--ink-faint);
        }

        .application-list__status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px 5px 8px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .application-list__status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .application-list__empty {
          padding: 40px 12px;
          text-align: center;
          color: var(--ink-soft);
          font-size: 0.875rem;
        }

        @media (max-width: 640px) {
          .application-list__table thead {
            display: none;
          }

          .application-list__table,
          .application-list__table tbody,
          .application-list__table tr,
          .application-list__table td {
            display: block;
            width: 100%;
          }

          .application-list__table tbody td {
            padding: 6px 4px;
          }

          .application-list__table tbody tr {
            padding: 12px 0;
          }

          .application-list__filters {
            width: 100%;
          }

          .application-list__select-wrap {
            flex: 1;
          }

          .application-list__select {
            width: 100%;
          }
        }
      `}</style>

      <div className="application-list">
        <div className="application-list__header">
          <h1 className="application-list__title">Application list</h1>

          <div className="application-list__filters">
            <div className="application-list__select-wrap">
              <select
                className="application-list__select"
                value={internshipFilter}
                onChange={(e) => setInternshipFilter(e.target.value)}
              >
                {internshipOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <svg className="application-list__select-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            <div className="application-list__select-wrap">
              <select
                className="application-list__select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                {statusOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <svg className="application-list__select-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>

        <div className="application-list__table-wrap">
          <table className="application-list__table">
            <thead>
              <tr>
                <th>Applicant</th>
                <th>Applied for</th>
                <th>Course</th>
                <th>School</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a, index) => {
                const avatar = avatarPalette[index % avatarPalette.length];
                const status = statusStyles[a.status];
                return (
                  <tr key={a.id}>
                    <td>
                      <div
                        className="application-list__applicant"
                        onClick={() => navigate(`/component-4/${a.id}`)}
                        style={{ cursor: "pointer" }}
                      >
                        <div
                          className="application-list__avatar"
                          style={{ background: avatar.bg, color: avatar.color }}
                        >
                          {initials(a.name)}
                        </div>
                        <div>
                          <div className="application-list__name">{a.name}</div>
                          <div className="application-list__applied-date">{a.appliedDate}</div>
                        </div>
                      </div>
                    </td>
                    <td>{a.appliedFor}</td>
                    <td>{a.course}</td>
                    <td>{a.school}</td>
                    <td>
                      <span
                        className="application-list__status"
                        style={{ background: status.bg, color: status.color }}
                      >
                        <span
                          className="application-list__status-dot"
                          style={{ background: status.dot }}
                        />
                        {a.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="application-list__empty">No applications match these filters.</div>
          )}
        </div>
      </div>
    </>
  );
}
