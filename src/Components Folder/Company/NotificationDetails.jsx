import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import notifications from "./notificationsData";

const typeStyles = {
  applicant: {
    bg: "#eef2ff",
    color: "#4338ca",
    icon: (
      <path d="M20 21a8 8 0 0 0-16 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    ),
  },
  document: {
    bg: "#ecfdf5",
    color: "#047857",
    icon: (
      <>
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
      </>
    ),
  },
  reminder: {
    bg: "#fef3e2",
    color: "#b45309",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
  accepted: {
    bg: "#ecfdf3",
    color: "#067647",
    icon: <path d="m5 13 4 4L19 7" />,
  },
};

export default function NotificationDetails() {
  const navigate = useNavigate();
  const { notificationId } = useParams();

  const notification = notifications.find(
    (n) => String(n.id) === String(notificationId)
  );

  const handleBack = () => navigate("/component-9");

  if (!notification) {
    return (
      <div style={{ padding: 24, fontFamily: "Inter, sans-serif" }}>
        <p>Notification not found.</p>
        <button type="button" onClick={handleBack}>
          Back to notifications
        </button>
      </div>
    );
  }

  const style = typeStyles[notification.type];

  return (
    <>
      <style>{`
        .notification-details {
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

        .notification-details__back {
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

        .notification-details__back:hover {
          background: var(--surface-alt);
          border-color: #d3d6db;
        }

        .notification-details__back svg {
          width: 15px;
          height: 15px;
        }

        .notification-details__card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 16px;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04), 0 12px 24px -8px rgba(16, 24, 40, 0.06);
          padding: 28px 32px;
          max-width: 640px;
        }

        .notification-details__head {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
        }

        .notification-details__icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .notification-details__icon svg {
          width: 22px;
          height: 22px;
        }

        .notification-details__title {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.3;
        }

        .notification-details__time {
          margin: 4px 0 0;
          font-size: 0.82rem;
          color: var(--ink-faint);
        }

        .notification-details__body {
          margin: 0 0 24px;
          padding: 18px 20px;
          border-radius: 12px;
          background: var(--surface-alt);
          border: 1px solid var(--border);
          font-size: 0.9rem;
          line-height: 1.65;
          color: var(--ink-soft);
        }

        .notification-details__action {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          border-radius: 10px;
          border: none;
          background: var(--maroon);
          color: #fff;
          font-size: 0.875rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s ease, transform 0.15s ease;
        }

        .notification-details__action:hover {
          background: var(--maroon-dark);
        }

        .notification-details__action:active {
          transform: translateY(1px);
        }

        .notification-details__action svg {
          width: 15px;
          height: 15px;
        }

        @media (max-width: 480px) {
          .notification-details__card {
            padding: 22px 18px;
          }

          .notification-details__head {
            flex-direction: column;
            align-items: flex-start;
          }

          .notification-details__action {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="notification-details">
        <button className="notification-details__back" type="button" onClick={handleBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to notifications
        </button>

        <div className="notification-details__card">
          <div className="notification-details__head">
            <div
              className="notification-details__icon"
              style={{ background: style.bg, color: style.color }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {style.icon}
              </svg>
            </div>
            <div>
              <h1 className="notification-details__title">{notification.title}</h1>
              <p className="notification-details__time">{notification.time}</p>
            </div>
          </div>

          <p className="notification-details__body">{notification.fullDetail}</p>

          {notification.action && (
            <button
              className="notification-details__action"
              type="button"
              onClick={() => navigate(notification.action.to)}
            >
              {notification.action.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
