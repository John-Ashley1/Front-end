import React, { useState } from "react";

const interns = [
  { name: "Rose", period: "March 1 – June 1, 2025", hours: "486" },
  { name: "Karl Lim", period: "Nov 1, 2024 – Feb 15, 2025", hours: "320" },
  { name: "Maria Santos", period: "Feb 1 – May 1, 2025", hours: "410" },
];

const issuedCertificates = [
  {
    id: 1,
    name: "Ana Cruz",
    detail: "Issued Mar 30, 2025 · 486 hrs",
    status: "Issued",
  },
  {
    id: 2,
    name: "Karl Lim",
    detail: "Issued Feb 15, 2025 · 320 hrs",
    status: "Issued",
  },
  {
    id: 3,
    name: "Maria Santos",
    detail: "Pending completion",
    status: "Pending",
  },
];

const statusStyles = {
  Issued: { bg: "#dcfce7", color: "#15803d" },
  Pending: { bg: "#fef9c3", color: "#a16207" },
};

export default function Certificates() {
  const [form, setForm] = useState({
    intern: "",
    period: "",
    hours: "",
    signatoryName: "Ma. Linda Torres",
    signatoryPosition: "HR Manager",
  });

  const handleInternChange = (e) => {
    const selected = interns.find((i) => i.name === e.target.value);
    setForm((prev) => ({
      ...prev,
      intern: e.target.value,
      period: selected ? selected.period : "",
      hours: selected ? selected.hours : "",
    }));
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const previewName = form.intern || "[Intern name]";
  const previewHours = form.hours || "[hours]";
  const previewPeriod = form.period || "[internship period]";

  return (
    <>
      <style>{`
        .certificates {
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

        .certificates__title {
          margin: 0 0 22px;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.01em;
        }

        .certificates__layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: start;
        }

        .certificates__card {
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 22px;
          box-sizing: border-box;
        }

        .certificates__card-title {
          margin: 0 0 18px;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--ink);
        }

        .certificates__field {
          margin-bottom: 16px;
        }

        .certificates__label {
          display: block;
          margin-bottom: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--ink);
        }

        .certificates__input,
        .certificates__select {
          width: 100%;
          box-sizing: border-box;
          padding: 10px 14px;
          border-radius: 9px;
          border: 1px solid var(--border);
          background: #fff;
          font-family: inherit;
          font-size: 0.875rem;
          color: var(--ink);
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .certificates__input::placeholder {
          color: var(--ink-faint);
        }

        .certificates__input:focus,
        .certificates__select:focus {
          outline: none;
          border-color: var(--maroon);
          box-shadow: 0 0 0 3px var(--maroon-soft);
        }

        .certificates__select {
          appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
          padding-right: 36px;
          cursor: pointer;
        }

        .certificates__preview {
          margin-top: 4px;
          margin-bottom: 20px;
          padding: 22px 18px;
          border: 1px dashed #c9ccd2;
          border-radius: 10px;
          background: var(--surface-alt);
          text-align: center;
        }

        .certificates__preview-org {
          margin: 0 0 6px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--ink-faint);
        }

        .certificates__preview-title {
          margin: 0 0 10px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--ink);
        }

        .certificates__preview-body {
          margin: 0 0 18px;
          font-size: 0.78rem;
          line-height: 1.6;
          color: var(--ink-soft);
        }

        .certificates__preview-sig {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--ink);
        }

        .certificates__preview-sig-role {
          margin-top: 2px;
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--ink-faint);
        }

        .certificates__download-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 11px 0;
          border-radius: 10px;
          border: none;
          background: var(--maroon);
          color: #fff;
          font-size: 0.875rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s ease, transform 0.15s ease;
        }

        .certificates__download-btn:hover {
          background: var(--maroon-dark);
        }

        .certificates__download-btn:active {
          transform: translateY(1px);
        }

        .certificates__download-btn svg {
          width: 15px;
          height: 15px;
        }

        .certificates__issued-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .certificates__issued-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 16px;
          border: 1px solid var(--border);
          border-radius: 12px;
        }

        .certificates__issued-name {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--ink);
        }

        .certificates__issued-detail {
          margin: 2px 0 0;
          font-size: 0.78rem;
          color: var(--ink-faint);
        }

        .certificates__issued-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .certificates__status-pill {
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          white-space: nowrap;
        }

        .certificates__icon-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: #fff;
          color: var(--ink-soft);
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .certificates__icon-btn:hover {
          background: var(--surface-alt);
        }

        .certificates__icon-btn svg {
          width: 15px;
          height: 15px;
        }

        @media (max-width: 800px) {
          .certificates__layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="certificates">
        <h1 className="certificates__title">Certificates</h1>

        <div className="certificates__layout">
          <div className="certificates__card">
            <h2 className="certificates__card-title">Generate certificate</h2>

            <div className="certificates__field">
              <label className="certificates__label" htmlFor="intern">
                Intern
              </label>
              <select
                id="intern"
                className="certificates__select"
                value={form.intern}
                onChange={handleInternChange}
              >
                <option value="" disabled hidden>
                  Select intern
                </option>
                {interns.map((i) => (
                  <option key={i.name} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="certificates__field">
              <label className="certificates__label" htmlFor="period">
                Internship period
              </label>
              <input
                id="period"
                className="certificates__input"
                type="text"
                placeholder="e.g. March 1 – June 1, 2025"
                value={form.period}
                onChange={handleChange("period")}
              />
            </div>

            <div className="certificates__field">
              <label className="certificates__label" htmlFor="hours">
                Total hours completed
              </label>
              <input
                id="hours"
                className="certificates__input"
                type="text"
                placeholder="e.g. 486"
                value={form.hours}
                onChange={handleChange("hours")}
              />
            </div>

            <div className="certificates__field">
              <label className="certificates__label" htmlFor="signatoryName">
                Signatory name
              </label>
              <input
                id="signatoryName"
                className="certificates__input"
                type="text"
                value={form.signatoryName}
                onChange={handleChange("signatoryName")}
              />
            </div>

            <div className="certificates__field">
              <label className="certificates__label" htmlFor="signatoryPosition">
                Signatory position
              </label>
              <input
                id="signatoryPosition"
                className="certificates__input"
                type="text"
                value={form.signatoryPosition}
                onChange={handleChange("signatoryPosition")}
              />
            </div>

            <div className="certificates__preview">
              <p className="certificates__preview-org">TECHCORP INC.</p>
              <p className="certificates__preview-title">Certificate of Internship Completion</p>
              <p className="certificates__preview-body">
                This certifies that {previewName} has successfully completed {previewHours} hours
                of internship at TechCorp Inc. from {previewPeriod}.
              </p>
              <p className="certificates__preview-sig">{form.signatoryName || "[Signatory name]"}</p>
              <p className="certificates__preview-sig-role">
                {form.signatoryPosition || "[Signatory position]"}
              </p>
            </div>

            <button className="certificates__download-btn" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" />
              </svg>
              Download certificate
            </button>
          </div>

          <div className="certificates__card">
            <h2 className="certificates__card-title">Issued certificates</h2>

            <div className="certificates__issued-list">
              {issuedCertificates.map((cert) => {
                const style = statusStyles[cert.status];
                return (
                  <div className="certificates__issued-item" key={cert.id}>
                    <div>
                      <p className="certificates__issued-name">{cert.name}</p>
                      <p className="certificates__issued-detail">{cert.detail}</p>
                    </div>
                    <div className="certificates__issued-right">
                      <span
                        className="certificates__status-pill"
                        style={{ background: style.bg, color: style.color }}
                      >
                        {cert.status}
                      </span>
                      <button className="certificates__icon-btn" type="button" aria-label="Download">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
