import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import applicants from "./applicantsData";

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const docStatusStyles = {
  Verified: { bg: "#fef3c7", color: "#92620a" },
  Pending: { bg: "#fee2e2", color: "#b42318" },
};

export default function ApplicantDetails() {
  const navigate = useNavigate();
  const { applicantId } = useParams();
  const [notes, setNotes] = useState("");

  const applicant = applicants.find((a) => String(a.id) === String(applicantId));

  if (!applicant) {
    return (
      <div style={{ padding: 24, fontFamily: "Inter, sans-serif" }}>
        <p>Applicant not found.</p>
        <button type="button" onClick={() => navigate("/component-4")}>
          Back to applicant list
        </button>
      </div>
    );
  }


  const handleBack = () => navigate("/component-4");

  return (
    <>
      <style>{`
        .applicant-details {
          --maroon: #7a2331;
          --maroon-dark: #5f1b26;
          --maroon-soft: #fbeced;
          --ink: #14151a;
          --ink-soft: #6b7280;
          --ink-faint: #9aa0aa;
          --border: #e8e9ec;
          --surface-alt: #fafafb;

          width: 100%;
          height: 100%;
          max-width: none;
          margin: 0;
          box-sizing: border-box;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          color: var(--ink);
        }

        .applicant-details__back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          padding: 9px 16px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: #fff;
          color: var(--ink);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s ease, border-color 0.15s ease;
        }

        .applicant-details__back:hover {
          background: var(--surface-alt);
          border-color: #d3d6db;
        }

        .applicant-details__back svg {
          width: 15px;
          height: 15px;
        }

        .applicant-details__layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 20px;
          align-items: start;
        }

        .applicant-details__card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 16px;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04), 0 12px 24px -8px rgba(16, 24, 40, 0.06);
          padding: 22px 22px 20px;
          box-sizing: border-box;
        }

        .applicant-details__card + .applicant-details__card {
          margin-top: 20px;
        }

        .applicant-details__card-title {
          margin: 0 0 14px;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--ink);
        }

        .applicant-details__profile-head {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 18px;
        }

        .applicant-details__avatar {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #e0edff;
          color: #1d4ed8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .applicant-details__name {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--ink);
        }

        .applicant-details__course {
          margin: 2px 0 0;
          font-size: 0.82rem;
          color: var(--ink-soft);
        }

        .applicant-details__field {
          margin-bottom: 16px;
        }

        .applicant-details__field:last-child {
          margin-bottom: 0;
        }

        .applicant-details__field-label {
          margin: 0 0 4px;
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: var(--ink-faint);
        }

        .applicant-details__field-value {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--ink);
        }

        .applicant-details__field-value a {
          color: var(--maroon);
          text-decoration: none;
        }

        .applicant-details__field-value a:hover {
          text-decoration: underline;
        }

        .applicant-details__doc-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .applicant-details__doc {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 10px;
          background: var(--surface-alt);
          border: 1px solid var(--border);
        }

        .applicant-details__doc-name {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--ink);
        }

        .applicant-details__doc-status {
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 0.76rem;
          font-weight: 700;
          white-space: nowrap;
        }

        .applicant-details__skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .applicant-details__skill {
          padding: 7px 14px;
          border-radius: 999px;
          border: 1px solid var(--border);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--ink);
          background: #fff;
        }

        .applicant-details__cover-letter {
          margin: 0;
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--ink-soft);
        }

        .applicant-details__notes-label {
          margin: 0 0 8px;
          font-size: 0.8rem;
          color: var(--ink-soft);
        }

        .applicant-details__textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid var(--border);
          font-family: inherit;
          font-size: 0.875rem;
          color: var(--ink);
          resize: vertical;
          min-height: 88px;
        }

        .applicant-details__textarea::placeholder {
          color: var(--ink-faint);
        }

        .applicant-details__textarea:focus {
          outline: none;
          border-color: var(--maroon);
          box-shadow: 0 0 0 3px var(--maroon-soft);
        }

        .applicant-details__actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 20px;
        }

        .applicant-details__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 700;
          cursor: pointer;
          border: 1.5px solid var(--ink);
          background: #fff;
          color: var(--ink);
          transition: background 0.15s ease, transform 0.15s ease;
        }

        .applicant-details__btn:hover {
          background: var(--surface-alt);
        }

        .applicant-details__btn:active {
          transform: translateY(1px);
        }

        .applicant-details__btn svg {
          width: 15px;
          height: 15px;
        }

        .applicant-details__btn--accept {
          border-color: #17b26a;
          color: #067647;
        }

        .applicant-details__btn--accept:hover {
          background: #ecfdf3;
        }

        .applicant-details__btn--shortlist {
          border-color: #eab308;
          color: #92620a;
        }

        .applicant-details__btn--shortlist:hover {
          background: #fef3c7;
        }

        .applicant-details__btn--reject {
          border-color: #d92d20;
          color: #b42318;
        }

        .applicant-details__btn--reject:hover {
          background: #fef3f2;
        }

        @media (max-width: 900px) {
          .applicant-details__layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .applicant-details__actions {
            flex-direction: column-reverse;
          }

          .applicant-details__btn {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>

      <div className="applicant-details">
        <button className="applicant-details__back" type="button" onClick={handleBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to applicant
        </button>

        <div className="applicant-details__layout">
          <div>
            <div className="applicant-details__card">
              <div className="applicant-details__profile-head">
                <div className="applicant-details__avatar">{initials(applicant.name)}</div>
                <div>
                  <h2 className="applicant-details__name">{applicant.name}</h2>
                  <p className="applicant-details__course">
                    {applicant.course} &middot; {applicant.school}
                  </p>
                </div>
              </div>

              <div className="applicant-details__field">
                <p className="applicant-details__field-label">Email</p>
                <p className="applicant-details__field-value">
                  <a href={`mailto:${applicant.email}`}>{applicant.email}</a>
                </p>
              </div>

              <div className="applicant-details__field">
                <p className="applicant-details__field-label">Phone</p>
                <p className="applicant-details__field-value">{applicant.phone}</p>
              </div>

              <div className="applicant-details__field">
                <p className="applicant-details__field-label">Applied for</p>
                <p className="applicant-details__field-value">{applicant.appliedFor}</p>
              </div>

              <div className="applicant-details__field">
                <p className="applicant-details__field-label">GWA</p>
                <p className="applicant-details__field-value">{applicant.gwa}</p>
              </div>

              <div className="applicant-details__field">
                <p className="applicant-details__field-label">OJT hours required</p>
                <p className="applicant-details__field-value">{applicant.ojtHoursRequired}</p>
              </div>
            </div>

            <div className="applicant-details__card">
              <h3 className="applicant-details__card-title">Documents</h3>
              <div className="applicant-details__doc-list">
                {applicant.documents.map((doc) => {
                  const style = docStatusStyles[doc.status];
                  return (
                    <div className="applicant-details__doc" key={doc.name}>
                      <span className="applicant-details__doc-name">{doc.name}</span>
                      <span
                        className="applicant-details__doc-status"
                        style={{ background: style.bg, color: style.color }}
                      >
                        {doc.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <div className="applicant-details__card">
              <h3 className="applicant-details__card-title">Skills</h3>
              <div className="applicant-details__skills">
                {applicant.skills.map((skill) => (
                  <span className="applicant-details__skill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="applicant-details__card">
              <h3 className="applicant-details__card-title">Cover letter</h3>
              <p className="applicant-details__cover-letter">{applicant.coverLetter}</p>
            </div>

            <div className="applicant-details__card">
              <h3 className="applicant-details__card-title">Review decision</h3>
              <p className="applicant-details__notes-label">Notes / feedback</p>
              <textarea
                className="applicant-details__textarea"
                placeholder="Optional notes for this applicant..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <div className="applicant-details__actions">
              <button className="applicant-details__btn applicant-details__btn--accept" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Accept
              </button>
              <button className="applicant-details__btn applicant-details__btn--shortlist" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Shortlist
              </button>
              <button className="applicant-details__btn applicant-details__btn--reject" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
