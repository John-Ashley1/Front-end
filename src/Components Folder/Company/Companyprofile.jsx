import React from "react";
import { useNavigate } from "react-router-dom";

const company = {
  name: "TechCorp Inc.",
  tagline: "Technology - Manila",
  industry: "Information Technology",
  email: "www.techcorp.ph",
  companySize: "201-500 employees",
  website: "hr@techcorp.ph",
  contact: "+63 2 8888 0000",
  about:
    "TechCorp provides enterprise software solution and consulting services across Southeast Asia, helping businesses transform through technology",
  address: "24F Ayala Tower One Ayala Ave, Makati City Metro Manila, 1226",
  stats: {
    activeInternships: 4,
    totalApplicants: 6,
    slotsRemaining: 7,
  },
};

export default function Companyprofile() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .company-profile {
          width: 100%;
          height: 100%;
          max-width: none;
          margin: 0;
          padding: 24px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          color: #1f2937;
          box-sizing: border-box;
          overflow-y: auto;
        }

        .company-profile__header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .company-profile__avatar {
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

        .company-profile__title {
          flex: 1;
        }

        .company-profile__title h1 {
          margin: 0;
          font-size: 1.6rem;
          font-weight: 700;
          color: #111;
        }

        .company-profile__title p {
          margin: 2px 0 0;
          color: #6b7280;
          font-weight: 500;
        }

        .company-profile__edit-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 999px;
          border: 1.5px solid #111;
          background: #fff;
          color: #111;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .company-profile__edit-btn:hover {
          background: #f5f5f5;
        }

        .company-profile__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .company-profile__card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 16px;
          color: #1f2937;
        }

        .company-profile__card h2 {
          margin: 0 0 12px;
          font-size: 1rem;
          font-weight: 700;
          color: #111;
        }

        .company-profile__card dl {
          margin: 0;
        }

        .company-profile__card dl > div {
          margin-bottom: 8px;
        }

        .company-profile__card dt {
          font-weight: 700;
          font-size: 0.85rem;
          color: #6b7280;
        }

        .company-profile__card dd {
          margin: 0;
          font-size: 0.85rem;
          color: #1f2937;
        }

        .company-profile__card dd a {
          color: #2563eb;
          text-decoration: none;
        }

        .company-profile__about,
        .company-profile__address {
          margin: 0;
          font-size: 0.85rem;
          line-height: 1.5;
          color: #1f2937;
        }

        .company-profile__stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .company-profile__stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          background: #f6c453;
          text-align: center;
        }

        .company-profile__stat-label {
          font-size: 0.75rem;
          color: #111;
        }

        .company-profile__stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111;
        }

        @media (max-width: 640px) {
          .company-profile__grid,
          .company-profile__stats {
            grid-template-columns: 1fr;
          }

          .company-profile__header {
            flex-wrap: wrap;
          }
        }
      `}</style>

      <div className="company-profile">
        <div className="company-profile__header">
          <div className="company-profile__avatar" aria-hidden="true">
            <svg viewBox="0 0 100 100" width="56" height="56">
              <circle cx="50" cy="35" r="18" fill="none" stroke="#111" strokeWidth="3" />
              <path
                d="M20 90c2-22 18-32 30-32s28 10 30 32"
                fill="none"
                stroke="#111"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div className="company-profile__title">
            <h1>{company.name}</h1>
            <p>{company.tagline}</p>
          </div>
          <button
            className="company-profile__edit-btn"
            type="button"
            onClick={() => navigate("/component-1/edit")}
          >
            <span aria-hidden="true">✎</span> Edit profile
          </button>
        </div>
        <div className="company-profile__grid">
          <section className="company-profile__card">
            <h2>Company Information</h2>
            <dl>
              <div>
                <dt>Industry</dt>
                <dd>{company.industry}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`https://${company.email}`}>{company.email}</a>
                </dd>
              </div>
              <div>
                <dt>Company size</dt>
                <dd>{company.companySize}</dd>
              </div>
              <div>
                <dt>Website</dt>
                <dd>{company.website}</dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>{company.contact}</dd>
              </div>
            </dl>
          </section>
          <section className="company-profile__card">
            <h2>About</h2>
            <p className="company-profile__about">{company.about}</p>
          </section>
          <section className="company-profile__card">
            <h2>Address</h2>
            <p className="company-profile__address">{company.address}</p>
          </section>
        </div>
        <div className="company-profile__stats">
          <div className="company-profile__stat">
            <span className="company-profile__stat-label">Active internships</span>
            <span className="company-profile__stat-value">{company.stats.activeInternships}</span>
          </div>
          <div className="company-profile__stat">
            <span className="company-profile__stat-label">Total applicants</span>
            <span className="company-profile__stat-value">{company.stats.totalApplicants}</span>
          </div>
          <div className="company-profile__stat">
            <span className="company-profile__stat-label">Slots remaining</span>
            <span className="company-profile__stat-value">{company.stats.slotsRemaining}</span>
          </div>
        </div>
      </div>
    </>
  );
}