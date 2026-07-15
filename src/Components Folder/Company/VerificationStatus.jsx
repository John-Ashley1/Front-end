import React from "react";

const verificationSteps = [
  {
    id: 1,
    title: "Business registration",
    detail: "Memorandum of Agreement signed · Jan 20, 2025",
  },
  {
    id: 2,
    title: "Company profile review",
    detail: "Reviewed by OJT coordinator · Approved Jan 14, 2025",
  },
  {
    id: 3,
    title: "MOA signing",
    detail: "DTI Certificate uploaded · Approved Jan 12, 2025",
  },
];

const verifiedOn = "January 20, 2025";
const validUntil = "December 31, 2025";

export default function VerificationStatus() {
  return (
    <>
      <style>{`
        .verification-status {
          --maroon: #7a2331;
          --maroon-dark: #5f1b26;
          --gold: #eab308;
          --gold-soft: #fef3c7;
          --ink: #14151a;
          --ink-soft: #6b7280;
          --ink-faint: #9aa0aa;
          --border: #e8e9ec;
          --surface-alt: #fafafb;

          width: 100%;
          height: 100%;
          max-width: none;
          margin: 0;
          padding: 28px 28px 24px;
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 16px;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04), 0 12px 24px -8px rgba(16, 24, 40, 0.06);
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          color: var(--ink);
          box-sizing: border-box;
          overflow-y: auto;
        }

        .verification-status__title {
          margin: 0 0 20px;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--maroon);
          letter-spacing: -0.01em;
        }

        .verification-status__card {
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 22px 24px;
        }

        .verification-status__card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }

        .verification-status__card-title {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--maroon);
          line-height: 1.3;
        }

        .verification-status__badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 16px;
          border-radius: 8px;
          background: var(--gold);
          color: #4a3400;
          font-size: 0.85rem;
          font-weight: 700;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .verification-status__badge svg {
          width: 15px;
          height: 15px;
        }

        .verification-status__steps {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .verification-status__step {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .verification-status__step-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #14151a;
        }

        .verification-status__step-icon svg {
          width: 13px;
          height: 13px;
        }

        .verification-status__step-title {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--ink);
        }

        .verification-status__step-detail {
          margin: 2px 0 0;
          font-size: 0.8rem;
          color: var(--ink-faint);
        }

        .verification-status__footer {
          margin: 20px 4px 0;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--ink-faint);
        }

        @media (max-width: 480px) {
          .verification-status__card-header {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="verification-status">
        <h1 className="verification-status__title">Verification</h1>

        <div className="verification-status__card">
          <div className="verification-status__card-header">
            <h2 className="verification-status__card-title">Verification status</h2>
            <span className="verification-status__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Verified
            </span>
          </div>

          <div className="verification-status__steps">
            {verificationSteps.map((step) => (
              <div className="verification-status__step" key={step.id}>
                <span className="verification-status__step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <p className="verification-status__step-title">{step.title}</p>
                  <p className="verification-status__step-detail">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="verification-status__footer">
          Verified on {verifiedOn} · Valid until {validUntil}
        </p>
      </div>
    </>
  );
}
