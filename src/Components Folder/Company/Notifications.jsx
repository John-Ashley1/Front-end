import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import initialNotifications from "./notificationsData";

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

export default function Notifications() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState("all");

  const unreadCount = notifications.filter((n) => !n.read).length;

  const visible = notifications.filter((n) =>
    filter === "unread" ? !n.read : true
  );

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleOpen = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
    navigate(`/component-9/${id}`);
  };

  return (
    <>
      <style>{`
        .notifications {
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

        .notifications__header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }

        .notifications__title {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.01em;
        }

        .notifications__subtitle {
          margin: 4px 0 0;
          font-size: 0.82rem;
          color: var(--ink-soft);
        }

        .notifications__mark-btn {
          padding: 9px 16px;
          border-radius: 9px;
          border: 1.5px solid var(--maroon);
          background: #fff;
          color: var(--maroon);
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.15s ease, transform 0.15s ease;
        }

        .notifications__mark-btn:hover {
          background: var(--maroon-soft);
        }

        .notifications__mark-btn:active {
          transform: translateY(1px);
        }

        .notifications__mark-btn:disabled {
          opacity: 0.45;
          cursor: default;
        }

        .notifications__mark-btn:disabled:hover {
          background: #fff;
        }

        .notifications__tabs {
          display: flex;
          gap: 6px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 4px;
        }

        .notifications__tab {
          padding: 7px 14px;
          border-radius: 999px;
          border: 1px solid transparent;
          background: transparent;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--ink-soft);
          cursor: pointer;
        }

        .notifications__tab:hover {
          background: var(--surface-alt);
        }

        .notifications__tab--active {
          background: var(--maroon-soft);
          color: var(--maroon);
        }

        .notifications__list {
          display: flex;
          flex-direction: column;
        }

        .notifications__item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 8px;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          border-radius: 10px;
          transition: background 0.12s ease;
        }

        .notifications__item:hover {
          background: var(--surface-alt);
        }

        .notifications__item:last-child {
          border-bottom: none;
        }

        .notifications__item--unread {
          background: #fdf9f3;
        }

        .notifications__item--unread:hover {
          background: #fbf3e7;
        }

        .notifications__icon {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .notifications__icon svg {
          width: 18px;
          height: 18px;
        }

        .notifications__item-main {
          flex: 1;
          min-width: 0;
        }

        .notifications__item-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 10px;
        }

        .notifications__item-title {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--ink);
        }

        .notifications__item-title--read {
          font-weight: 600;
          color: var(--ink-soft);
        }

        .notifications__item-time {
          flex-shrink: 0;
          font-size: 0.76rem;
          color: var(--ink-faint);
          white-space: nowrap;
        }

        .notifications__item-detail {
          margin: 3px 0 0;
          font-size: 0.83rem;
          color: var(--ink-soft);
        }

        .notifications__dot {
          flex-shrink: 0;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--maroon);
          margin-top: 6px;
        }

        .notifications__empty {
          padding: 40px 8px;
          text-align: center;
          color: var(--ink-soft);
          font-size: 0.875rem;
        }

        @media (max-width: 480px) {
          .notifications__header {
            flex-direction: column;
          }

          .notifications__mark-btn {
            width: 100%;
          }

          .notifications__item-top {
            flex-direction: column;
            gap: 2px;
          }
        }
      `}</style>

      <div className="notifications">
        <div className="notifications__header">
          <div>
            <h1 className="notifications__title">Notifications</h1>
            <p className="notifications__subtitle">
              {unreadCount > 0
                ? `You have ${unreadCount} unread notification${unreadCount === 1 ? "" : "s"}`
                : "You're all caught up"}
            </p>
          </div>
          <button
            className="notifications__mark-btn"
            type="button"
            onClick={handleMarkAllRead}
            disabled={unreadCount === 0}
          >
            Mark all as read
          </button>
        </div>

        <div className="notifications__tabs">
          <button
            type="button"
            className={
              filter === "all"
                ? "notifications__tab notifications__tab--active"
                : "notifications__tab"
            }
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            type="button"
            className={
              filter === "unread"
                ? "notifications__tab notifications__tab--active"
                : "notifications__tab"
            }
            onClick={() => setFilter("unread")}
          >
            Unread {unreadCount > 0 ? `(${unreadCount})` : ""}
          </button>
        </div>

        <div className="notifications__list">
          {visible.map((n) => {
            const style = typeStyles[n.type];
            return (
              <div
                className={
                  n.read
                    ? "notifications__item"
                    : "notifications__item notifications__item--unread"
                }
                key={n.id}
                onClick={() => handleOpen(n.id)}
              >
                <div
                  className="notifications__icon"
                  style={{ background: style.bg, color: style.color }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {style.icon}
                  </svg>
                </div>

                <div className="notifications__item-main">
                  <div className="notifications__item-top">
                    <p
                      className={
                        n.read
                          ? "notifications__item-title notifications__item-title--read"
                          : "notifications__item-title"
                      }
                    >
                      {n.title}
                    </p>
                    <span className="notifications__item-time">{n.time}</span>
                  </div>
                  <p className="notifications__item-detail">{n.detail}</p>
                </div>

                {!n.read && <span className="notifications__dot" />}
              </div>
            );
          })}

          {visible.length === 0 && (
            <div className="notifications__empty">No notifications here.</div>
          )}
        </div>
      </div>
    </>
  );
}