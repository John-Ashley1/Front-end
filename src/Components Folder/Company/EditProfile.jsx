import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialForm = {
  name: "TechCorp Inc.",
  tagline: "Technology - Manila",
  industry: "Information Technology",
  email: "hr@techcorp.ph",
  companySize: "201-500 employees",
  website: "www.techcorp.ph",
  contact: "+63 2 8888 0000",
  about:
    "TechCorp provides enterprise software solution and consulting services across Southeast Asia, helping businesses transform through technology",
  address: "24F Ayala Tower One Ayala Ave, Makati City Metro Manila, 1226",
};

export default function EditProfile({ onSave }) {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleCancel = () => navigate("/component-1");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) onSave(form);
    navigate("/component-1");
  };

  return (
    <>
      <style>{`
        .edit-profile {
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

        .edit-profile__back {
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

        .edit-profile__back:hover {
          background: var(--surface-alt);
          border-color: #d3d6db;
        }

        .edit-profile__back svg {
          width: 15px;
          height: 15px;
        }

        .edit-profile__card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 16px;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04), 0 12px 24px -8px rgba(16, 24, 40, 0.06);
          padding: 28px 32px 24px;
        }

        .edit-profile__title {
          margin: 0 0 4px;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--maroon);
          letter-spacing: -0.01em;
        }

        .edit-profile__subtitle {
          margin: 0 0 24px;
          font-size: 0.85rem;
          color: var(--ink-soft);
        }

        .edit-profile__avatar-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .edit-profile__avatar {
          flex-shrink: 0;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          border: 2px solid #111;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
        }

        .edit-profile__avatar-btn {
          padding: 9px 16px;
          border-radius: 9px;
          border: 1.5px solid var(--ink);
          background: #fff;
          color: var(--ink);
          font-size: 0.83rem;
          font-weight: 600;
          cursor: pointer;
        }

        .edit-profile__avatar-btn:hover {
          background: var(--surface-alt);
        }

        .edit-profile__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 24px;
          margin-bottom: 20px;
        }

        .edit-profile__field {
          display: flex;
          flex-direction: column;
        }

        .edit-profile__field--full {
          grid-column: 1 / -1;
        }

        .edit-profile__label {
          margin-bottom: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--ink);
        }

        .edit-profile__input,
        .edit-profile__textarea {
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

        .edit-profile__input::placeholder,
        .edit-profile__textarea::placeholder {
          color: var(--ink-faint);
        }

        .edit-profile__input:focus,
        .edit-profile__textarea:focus {
          outline: none;
          border-color: var(--maroon);
          box-shadow: 0 0 0 3px var(--maroon-soft);
        }

        .edit-profile__textarea {
          resize: vertical;
          min-height: 90px;
          line-height: 1.5;
        }

        .edit-profile__footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 8px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }

        .edit-profile__btn {
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

        .edit-profile__btn:active {
          transform: translateY(1px);
        }

        .edit-profile__btn--cancel {
          background: #fff;
          border-color: var(--border);
          color: var(--ink);
        }

        .edit-profile__btn--cancel:hover {
          background: var(--surface-alt);
        }

        .edit-profile__btn--save {
          background: var(--maroon);
          color: #fff;
          box-shadow: 0 1px 2px rgba(122, 35, 49, 0.25);
        }

        .edit-profile__btn--save:hover {
          background: var(--maroon-dark);
        }

        .edit-profile__btn svg {
          width: 16px;
          height: 16px;
        }

        @media (max-width: 640px) {
          .edit-profile__grid {
            grid-template-columns: 1fr;
          }

          .edit-profile__card {
            padding: 22px 18px 20px;
          }

          .edit-profile__footer {
            flex-direction: column-reverse;
          }

          .edit-profile__btn {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>

      <div className="edit-profile">
        <button className="edit-profile__back" type="button" onClick={handleCancel}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to profile
        </button>

        <form className="edit-profile__card" onSubmit={handleSubmit}>
          <h1 className="edit-profile__title">Edit profile</h1>
          <p className="edit-profile__subtitle">
            Update your company details. Changes will appear on your public profile.
          </p>

          <div className="edit-profile__avatar-row">
            <div className="edit-profile__avatar" aria-hidden="true">
              <svg viewBox="0 0 100 100" width="40" height="40">
                <circle cx="50" cy="35" r="18" fill="none" stroke="#111" strokeWidth="3" />
                <path
                  d="M20 90c2-22 18-32 30-32s28 10 30 32"
                  fill="none"
                  stroke="#111"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <button className="edit-profile__avatar-btn" type="button">
              Change logo
            </button>
          </div>

          <div className="edit-profile__grid">
            <div className="edit-profile__field">
              <label className="edit-profile__label" htmlFor="name">
                Company name
              </label>
              <input
                id="name"
                className="edit-profile__input"
                type="text"
                value={form.name}
                onChange={handleChange("name")}
              />
            </div>

            <div className="edit-profile__field">
              <label className="edit-profile__label" htmlFor="tagline">
                Tagline
              </label>
              <input
                id="tagline"
                className="edit-profile__input"
                type="text"
                placeholder="e.g. Technology - Manila"
                value={form.tagline}
                onChange={handleChange("tagline")}
              />
            </div>

            <div className="edit-profile__field">
              <label className="edit-profile__label" htmlFor="industry">
                Industry
              </label>
              <input
                id="industry"
                className="edit-profile__input"
                type="text"
                value={form.industry}
                onChange={handleChange("industry")}
              />
            </div>

            <div className="edit-profile__field">
              <label className="edit-profile__label" htmlFor="companySize">
                Company size
              </label>
              <input
                id="companySize"
                className="edit-profile__input"
                type="text"
                placeholder="e.g. 201-500 employees"
                value={form.companySize}
                onChange={handleChange("companySize")}
              />
            </div>

            <div className="edit-profile__field">
              <label className="edit-profile__label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="edit-profile__input"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
              />
            </div>

            <div className="edit-profile__field">
              <label className="edit-profile__label" htmlFor="website">
                Website
              </label>
              <input
                id="website"
                className="edit-profile__input"
                type="text"
                placeholder="e.g. www.techcorp.ph"
                value={form.website}
                onChange={handleChange("website")}
              />
            </div>

            <div className="edit-profile__field">
              <label className="edit-profile__label" htmlFor="contact">
                Contact
              </label>
              <input
                id="contact"
                className="edit-profile__input"
                type="text"
                value={form.contact}
                onChange={handleChange("contact")}
              />
            </div>

            <div className="edit-profile__field edit-profile__field--full">
              <label className="edit-profile__label" htmlFor="address">
                Address
              </label>
              <input
                id="address"
                className="edit-profile__input"
                type="text"
                value={form.address}
                onChange={handleChange("address")}
              />
            </div>

            <div className="edit-profile__field edit-profile__field--full">
              <label className="edit-profile__label" htmlFor="about">
                About
              </label>
              <textarea
                id="about"
                className="edit-profile__textarea"
                value={form.about}
                onChange={handleChange("about")}
              />
            </div>
          </div>

          <div className="edit-profile__footer">
            <button
              type="button"
              className="edit-profile__btn edit-profile__btn--cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button type="submit" className="edit-profile__btn edit-profile__btn--save">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
                <polyline points="17 21 17 13 7 13 7 21" />
                <polyline points="7 3 7 8 15 8" />
              </svg>
              Save changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
