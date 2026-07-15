import React, { useState } from "react";

const initialConversations = [
  {
    id: 1,
    name: "Juan Reyes",
    course: "BS Computer Science",
    school: "UP Diliman",
    avatar: { bg: "#3b82f6", color: "#fff" },
    messages: [
      {
        id: 1,
        from: "them",
        text: "Good afternoon! I wanted to ask if I can submit my TOR separately since it's still being processed by the registrar.",
      },
      {
        id: 2,
        from: "me",
        text: "Hi Juan! Yes, that's fine. Please submit your other documents for now and send the TOR as soon as it's available.",
      },
    ],
  },
  {
    id: 2,
    name: "Maria Santos",
    course: "BS Information Systems",
    school: "DLSU Manila",
    avatar: { bg: "#15803d", color: "#fff" },
    messages: [
      {
        id: 1,
        from: "them",
        text: "Hi! Just following up on my application for the UI/UX Design internship. When can I expect to hear back?",
      },
      {
        id: 2,
        from: "me",
        text: "Hi Maria! We're reviewing applications this week. You'll get an update by Friday.",
      },
    ],
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Messages() {
  const [conversations, setConversations] = useState(initialConversations);
  const [activeId, setActiveId] = useState(initialConversations[0].id);
  const [draft, setDraft] = useState("");

  const activeConversation = conversations.find((c) => c.id === activeId);

  const handleSend = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;

    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              messages: [
                ...c.messages,
                { id: c.messages.length + 1, from: "me", text: trimmed },
              ],
            }
          : c
      )
    );
    setDraft("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <style>{`
        .messages {
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
          box-sizing: border-box;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          color: var(--ink);
        }

        .messages__layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 20px;
          height: 100%;
        }

        .messages__panel {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 16px;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04), 0 12px 24px -8px rgba(16, 24, 40, 0.06);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .messages__list {
          overflow-y: auto;
        }

        .messages__thread {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 18px;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: background 0.12s ease;
        }

        .messages__thread:hover {
          background: var(--surface-alt);
        }

        .messages__thread--active {
          background: #fbeced;
        }

        .messages__avatar {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .messages__thread-name {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--ink);
        }

        .messages__thread-preview {
          margin: 2px 0 0;
          font-size: 0.8rem;
          color: var(--ink-faint);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 190px;
        }

        .messages__conversation {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .messages__conversation-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border);
          flex-shrink: 0;
        }

        .messages__conversation-name {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--ink);
        }

        .messages__conversation-sub {
          margin: 2px 0 0;
          font-size: 0.78rem;
          color: var(--ink-faint);
        }

        .messages__thread-body {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .messages__bubble-row {
          display: flex;
        }

        .messages__bubble-row--me {
          justify-content: flex-end;
        }

        .messages__bubble-row--them {
          justify-content: flex-start;
        }

        .messages__bubble {
          max-width: 65%;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 0.88rem;
          line-height: 1.5;
          font-weight: 600;
        }

        .messages__bubble--them {
          background: #fef9e7;
          border: 1px solid #f2e3a8;
          color: var(--ink);
        }

        .messages__bubble--me {
          background: #d9ecff;
          border: 1px solid #b9dbfb;
          color: var(--ink);
        }

        .messages__composer {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 20px;
          border-top: 1px solid var(--border);
          flex-shrink: 0;
        }

        .messages__input {
          flex: 1;
          box-sizing: border-box;
          padding: 11px 16px;
          border-radius: 999px;
          border: 1px solid var(--border);
          font-family: inherit;
          font-size: 0.875rem;
          color: var(--ink);
        }

        .messages__input::placeholder {
          color: var(--ink-faint);
        }

        .messages__input:focus {
          outline: none;
          border-color: var(--maroon);
        }

        .messages__send-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          border: 1px solid var(--ink);
          background: #fff;
          color: var(--ink);
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.15s ease, transform 0.15s ease;
        }

        .messages__send-btn:hover {
          background: var(--surface-alt);
        }

        .messages__send-btn:active {
          transform: translateY(1px);
        }

        .messages__send-btn svg {
          width: 17px;
          height: 17px;
        }

        @media (max-width: 720px) {
          .messages__layout {
            grid-template-columns: 1fr;
          }

          .messages__panel:first-child {
            max-height: 200px;
          }
        }
      `}</style>

      <div className="messages">
        <div className="messages__layout">
          <div className="messages__panel">
            <div className="messages__list">
              {conversations.map((c) => {
                const lastMessage = c.messages[c.messages.length - 1];
                return (
                  <div
                    key={c.id}
                    className={
                      c.id === activeId
                        ? "messages__thread messages__thread--active"
                        : "messages__thread"
                    }
                    onClick={() => setActiveId(c.id)}
                  >
                    <div
                      className="messages__avatar"
                      style={{ background: c.avatar.bg, color: c.avatar.color }}
                    >
                      {initials(c.name)}
                    </div>
                    <div>
                      <p className="messages__thread-name">{c.name}</p>
                      <p className="messages__thread-preview">{lastMessage?.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {activeConversation && (
            <div className="messages__panel messages__conversation">
              <div className="messages__conversation-header">
                <div
                  className="messages__avatar"
                  style={{
                    background: activeConversation.avatar.bg,
                    color: activeConversation.avatar.color,
                  }}
                >
                  {initials(activeConversation.name)}
                </div>
                <div>
                  <p className="messages__conversation-name">{activeConversation.name}</p>
                  <p className="messages__conversation-sub">
                    {activeConversation.course} · {activeConversation.school}
                  </p>
                </div>
              </div>

              <div className="messages__thread-body">
                {activeConversation.messages.map((m) => (
                  <div
                    key={m.id}
                    className={`messages__bubble-row messages__bubble-row--${m.from}`}
                  >
                    <div className={`messages__bubble messages__bubble--${m.from}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="messages__composer">
                <input
                  className="messages__input"
                  type="text"
                  placeholder="Type a message..."
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button
                  className="messages__send-btn"
                  type="button"
                  onClick={handleSend}
                  aria-label="Send message"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
