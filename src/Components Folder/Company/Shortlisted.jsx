import React from "react";

const shortlisted = [
  {
    id: 1,
    name: "Jennie Rose",
    appliedDate: "Applied Mar 5",
    appliedFor: "Software Engineering",
    shortlistedOn: "Mar 6 2026",
    school: "UP Diliman",
    status: "Accepted",
  },
  {
    id: 2,
    name: "Paul Ferdinand",
    appliedDate: "Applied Mar 3",
    appliedFor: "UI/UX Design",
    shortlistedOn: "Mar 4 2026",
    school: "DLSU Manila",
    status: "Accepted",
  },
];

const avatarPalette = [
  { bg: "#f5e1fb", color: "#9333ea" },
  { bg: "#fef3c7", color: "#b45309" },
  { bg: "#e0edff", color: "#1d4ed8" },
  { bg: "#dcfce7", color: "#15803d" },
];

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Shortlisted() {
  return (
    <>
      <style>{`
        .shortlisted {
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

        .shortlisted__title {
          margin: 0 0 22px;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--maroon);
          letter-spacing: -0.01em;
        }

        .shortlisted__table-wrap {
          width: 100%;
          overflow-x: auto;
        }

        .shortlisted__table {
          width: 100%;
          border-collapse: collapse;
        }

        .shortlisted__table thead th {
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

        .shortlisted__table th:first-child,
        .shortlisted__table td:first-child {
          padding-left: 4px;
        }

        .shortlisted__table tbody tr {
          border-bottom: 1px solid var(--border);
          transition: background 0.12s ease;
        }

        .shortlisted__table tbody tr:hover {
          background: var(--surface-alt);
        }

        .shortlisted__table tbody tr:last-child {
          border-bottom: none;
        }

        .shortlisted__table tbody td {
          padding: 16px 12px;
          font-size: 0.875rem;
          color: var(--ink);
          vertical-align: middle;
        }

        .shortlisted__applicant {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .shortlisted__avatar {
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

        .shortlisted__name {
          font-weight: 600;
          color: var(--ink);
          line-height: 1.3;
        }

        .shortlisted__applied-date {
          margin-top: 2px;
          font-size: 0.76rem;
          font-weight: 500;
          color: var(--ink-faint);
        }

        .shortlisted__action {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .shortlisted__check {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #ecfdf3;
          color: #17b26a;
          flex-shrink: 0;
        }

        .shortlisted__check svg {
          width: 14px;
          height: 14px;
        }

        .shortlisted__status-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 8px;
          border: none;
          font-size: 0.8rem;
          font-weight: 700;
          color: #fff;
          background: #22a35a;
          white-space: nowrap;
        }

        .shortlisted__empty {
          padding: 40px 12px;
          text-align: center;
          color: var(--ink-soft);
          font-size: 0.875rem;
        }

        @media (max-width: 640px) {
          .shortlisted__table thead {
            display: none;
          }

          .shortlisted__table,
          .shortlisted__table tbody,
          .shortlisted__table tr,
          .shortlisted__table td {
            display: block;
            width: 100%;
          }

          .shortlisted__table tbody td {
            padding: 6px 4px;
          }

          .shortlisted__table tbody tr {
            padding: 12px 0;
          }
        }
      `}</style>

      <div className="shortlisted">
        <h1 className="shortlisted__title">Shortlisted</h1>

        <div className="shortlisted__table-wrap">
          <table className="shortlisted__table">
            <thead>
              <tr>
                <th>Applicant</th>
                <th>Applied for</th>
                <th>Shortlisted on</th>
                <th>School</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {shortlisted.map((s, index) => {
                const avatar = avatarPalette[index % avatarPalette.length];
                return (
                  <tr key={s.id}>
                    <td>
                      <div className="shortlisted__applicant">
                        <div
                          className="shortlisted__avatar"
                          style={{ background: avatar.bg, color: avatar.color }}
                        >
                          {initials(s.name)}
                        </div>
                        <div>
                          <div className="shortlisted__name">{s.name}</div>
                          <div className="shortlisted__applied-date">{s.appliedDate}</div>
                        </div>
                      </div>
                    </td>
                    <td>{s.appliedFor}</td>
                    <td>{s.shortlistedOn}</td>
                    <td>{s.school}</td>
                    <td>
                      <div className="shortlisted__action">
                        <span className="shortlisted__check">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <button className="shortlisted__status-btn" type="button">
                          {s.status}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {shortlisted.length === 0 && (
            <div className="shortlisted__empty">No shortlisted applicants yet.</div>
          )}
        </div>
      </div>
    </>
  );
}
