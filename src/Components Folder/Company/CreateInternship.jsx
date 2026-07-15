import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialForm = {
  positionTitle: "",
  department: "",
  availableSlots: "",
  duration: "",
  startDate: "",
  applicationDeadline: "",
  jobDescription: "",
  requiredSkills: "",
  workSetup: "",
};

export default function CreateInternship({ onSubmit }) {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
    navigate("/component-3");
  };

  const handleCancel = () => {
    setForm(initialForm);
    navigate("/component-3");
  };

  return (
    <>
      <style>{`
        .create-internship {
          --maroon: #7a2331;
          --maroon-dark: #5f1b26;
          --maroon-soft: #fbeced;
          --ink: #14151a;
          --ink-soft: #6b7280;
          --ink-faint: #9aa0aa;
          --border: #e2e4e8;
          --surface-alt: #fafafb;

          width: 100%;
          height: 100%;
          max-width: none;
          margin: 0;
          box-sizing: border-box;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          color: var(--ink);
        }

        .create-internship__back {
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

        .create-internship__back:hover {
          background: var(--surface-alt);
          border-color: #d3d6db;
        }

        .create-internship__back svg {
          width: 15px;
          height: 15px;
        }

        .create-internship__card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 16px;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04), 0 12px 24px -8px rgba(16, 24, 40, 0.06);
          padding: 28px 32px 24px;
        }

        .create-internship__title {
          margin: 0 0 4px;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--maroon);
          letter-spacing: -0.01em;
        }

        .create-internship__subtitle {
          margin: 0 0 24px;
          font-size: 0.85rem;
          color: var(--ink-soft);
        }

        .create-internship__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 24px;
          margin-bottom: 20px;
        }

        .create-internship__field {
          display: flex;
          flex-direction: column;
        }

        .create-internship__field--full {
          grid-column: 1 / -1;
        }

        .create-internship__label {
          margin-bottom: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--ink);
        }

        .create-internship__input,
        .create-internship__select,
        .create-internship__textarea {
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

        .create-internship__input::placeholder,
        .create-internship__textarea::placeholder {
          color: var(--ink-faint);
        }

        .create-internship__input:focus,
        .create-internship__select:focus,
        .create-internship__textarea:focus {
          outline: none;
          border-color: var(--maroon);
          box-shadow: 0 0 0 3px var(--maroon-soft);
        }

        .create-internship__select {
          appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
          padding-right: 36px;
          cursor: pointer;
          color: var(--ink);
        }

        .create-internship__select:invalid {
          color: var(--ink-faint);
        }

        .create-internship__date-wrap {
          position: relative;
        }

        .create-internship__date-icon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 17px;
          height: 17px;
          color: var(--ink-faint);
          pointer-events: none;
        }

        .create-internship__textarea {
          resize: vertical;
          min-height: 96px;
          line-height: 1.5;
        }

        .create-internship__footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 8px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }

        .create-internship__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid transparent;
          transition: background 0.15s ease, transform 0.15s ease;
        }

        .create-internship__btn:active {
          transform: translateY(1px);
        }

        .create-internship__btn--cancel {
          background: #fff;
          border-color: var(--border);
          color: var(--ink);
        }

        .create-internship__btn--cancel:hover {
          background: var(--surface-alt);
        }

        .create-internship__btn--submit {
          background: var(--maroon);
          color: #fff;
          box-shadow: 0 1px 2px rgba(122, 35, 49, 0.25);
        }

        .create-internship__btn--submit:hover {
          background: var(--maroon-dark);
        }

        .create-internship__btn svg {
          width: 16px;
          height: 16px;
        }

        @media (max-width: 640px) {
          .create-internship__grid {
            grid-template-columns: 1fr;
          }

          .create-internship__card {
            padding: 22px 18px 20px;
          }

          .create-internship__footer {
            flex-direction: column-reverse;
          }

          .create-internship__btn {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>

      <div className="create-internship">
        <button className="create-internship__back" type="button" onClick={handleCancel}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to internship listings
        </button>

        <form className="create-internship__card" onSubmit={handleSubmit}>
          <h1 className="create-internship__title">Post internship</h1>
          <p className="create-internship__subtitle">
            Fill in the details below to publish a new internship opening.
          </p>

          <div className="create-internship__grid">
            <div className="create-internship__field">
              <label className="create-internship__label" htmlFor="positionTitle">
                Position title
              </label>
              <input
                id="positionTitle"
                className="create-internship__input"
                type="text"
                placeholder="e.g. Software Engineering Intern"
                value={form.positionTitle}
                onChange={handleChange("positionTitle")}
              />
            </div>

            <div className="create-internship__field">
              <label className="create-internship__label" htmlFor="department">
                Department
              </label>
              <select
                id="department"
                className="create-internship__select"
                value={form.department}
                onChange={handleChange("department")}
              >
                <option value="" disabled hidden>
                  Select department
                </option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Data Science">Data Science</option>
                <option value="Marketing">Marketing</option>
                <option value="Human Resources">Human Resources</option>
              </select>
            </div>

            <div className="create-internship__field">
              <label className="create-internship__label" htmlFor="availableSlots">
                Available slots
              </label>
              <input
                id="availableSlots"
                className="create-internship__input"
                type="number"
                min="1"
                placeholder="e.g. 5"
                value={form.availableSlots}
                onChange={handleChange("availableSlots")}
              />
            </div>

            <div className="create-internship__field">
              <label className="create-internship__label" htmlFor="duration">
                Duration
              </label>
              <select
                id="duration"
                className="create-internship__select"
                value={form.duration}
                onChange={handleChange("duration")}
              >
                <option value="" disabled hidden>
                  Select duration
                </option>
                <option value="1 month">1 month</option>
                <option value="2 months">2 months</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
              </select>
            </div>

            <div className="create-internship__field">
              <label className="create-internship__label" htmlFor="startDate">
                Start date
              </label>
              <div className="create-internship__date-wrap">
                <input
                  id="startDate"
                  className="create-internship__input"
                  type="date"
                  value={form.startDate}
                  onChange={handleChange("startDate")}
                />
              </div>
            </div>

            <div className="create-internship__field">
              <label className="create-internship__label" htmlFor="applicationDeadline">
                Application deadline
              </label>
              <div className="create-internship__date-wrap">
                <input
                  id="applicationDeadline"
                  className="create-internship__input"
                  type="date"
                  value={form.applicationDeadline}
                  onChange={handleChange("applicationDeadline")}
                />
              </div>
            </div>

            <div className="create-internship__field create-internship__field--full">
              <label className="create-internship__label" htmlFor="jobDescription">
                Job description
              </label>
              <textarea
                id="jobDescription"
                className="create-internship__textarea"
                placeholder="Describe the role, responsibilities, and what the intern will learn..."
                value={form.jobDescription}
                onChange={handleChange("jobDescription")}
              />
            </div>

            <div className="create-internship__field create-internship__field--full">
              <label className="create-internship__label" htmlFor="requiredSkills">
                Required skills
              </label>
              <input
                id="requiredSkills"
                className="create-internship__input"
                type="text"
                placeholder="e.g. React, Python, Figma (comma-separated)"
                value={form.requiredSkills}
                onChange={handleChange("requiredSkills")}
              />
            </div>

            <div className="create-internship__field create-internship__field--full">
              <label className="create-internship__label" htmlFor="workSetup">
                Work setup
              </label>
              <select
                id="workSetup"
                className="create-internship__select"
                value={form.workSetup}
                onChange={handleChange("workSetup")}
              >
                <option value="" disabled hidden>
                  Select work setup
                </option>
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          <div className="create-internship__footer">
            <button
              type="button"
              className="create-internship__btn create-internship__btn--cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button type="submit" className="create-internship__btn create-internship__btn--submit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
              </svg>
              Post internship
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
