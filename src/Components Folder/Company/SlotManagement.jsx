import React, { useState } from "react";

const initialInternships = [
  { id: 1, position: "Software Engineering Intern", taken: 3, slots: 5 },
  { id: 2, position: "UI/UX Design Intern", taken: 1, slots: 2 },
  { id: 3, position: "Data Analytics Intern", taken: 3, slots: 3 },
];

export default function SlotManagement() {
  const [internships, setInternships] = useState(initialInternships);
  const [drafts, setDrafts] = useState(
    () => Object.fromEntries(initialInternships.map((i) => [i.id, i.slots]))
  );

  const totalSlots = internships.reduce((sum, i) => sum + i.slots, 0);
  const slotsRemaining = internships.reduce(
    (sum, i) => sum + Math.max(i.slots - i.taken, 0),
    0
  );

  const handleDraftChange = (id, value) => {
    const num = Math.max(0, Number(value) || 0);
    setDrafts((prev) => ({ ...prev, [id]: num }));
  };

  const handleStep = (id, delta) => {
    setDrafts((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] ?? 0) + delta),
    }));
  };

  const handleUpdate = (id) => {
    setInternships((prev) =>
      prev.map((i) => (i.id === id ? { ...i, slots: drafts[id] } : i))
    );
  };

  return (
    <>
      <style>{`
        .slot-management {
          --maroon: #7a2331;
          --maroon-dark: #5f1b26;
          --maroon-soft: #fbeced;
          --gold: #eab308;
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

        .slot-management__summary {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .slot-management__summary-card {
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 18px 20px;
          background: var(--surface-alt);
          text-align: center;
        }

        .slot-management__summary-label {
          margin: 0 0 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--ink-soft);
        }

        .slot-management__summary-value {
          margin: 0;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--ink);
        }

        .slot-management__section-title {
          margin: 0 0 14px;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--maroon);
        }

        .slot-management__list {
          display: flex;
          flex-direction: column;
        }

        .slot-management__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 18px 4px;
          border-bottom: 1px solid var(--border);
          flex-wrap: wrap;
        }

        .slot-management__row:last-child {
          border-bottom: none;
        }

        .slot-management__info {
          flex: 1 1 220px;
          min-width: 200px;
        }

        .slot-management__position {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--ink);
        }

        .slot-management__taken {
          margin: 2px 0 0;
          font-size: 0.8rem;
          color: var(--ink-faint);
        }

        .slot-management__progress-track {
          flex: 1 1 160px;
          min-width: 140px;
          height: 8px;
          border-radius: 999px;
          background: #e5e7eb;
          overflow: hidden;
        }

        .slot-management__progress-fill {
          height: 100%;
          background: var(--maroon);
          border-radius: 999px;
          transition: width 0.2s ease;
        }

        .slot-management__controls {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .slot-management__stepper {
          display: flex;
          align-items: center;
          border: 1px solid var(--gold);
          border-radius: 8px;
          overflow: hidden;
        }

        .slot-management__stepper input {
          width: 44px;
          border: none;
          text-align: center;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--ink);
          padding: 8px 0;
          font-family: inherit;
        }

        .slot-management__stepper input:focus {
          outline: none;
        }

        .slot-management__stepper input::-webkit-outer-spin-button,
        .slot-management__stepper input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .slot-management__stepper-buttons {
          display: flex;
          flex-direction: column;
          border-left: 1px solid var(--gold);
        }

        .slot-management__stepper-btn {
          border: none;
          background: #fff;
          width: 20px;
          height: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--ink-soft);
          padding: 0;
        }

        .slot-management__stepper-btn:first-child {
          border-bottom: 1px solid var(--gold);
        }

        .slot-management__stepper-btn:hover {
          background: var(--surface-alt);
        }

        .slot-management__stepper-btn svg {
          width: 9px;
          height: 9px;
        }

        .slot-management__update-btn {
          padding: 9px 18px;
          border-radius: 8px;
          border: 1.5px solid var(--ink);
          background: #fff;
          color: var(--ink);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.15s ease, transform 0.15s ease;
        }

        .slot-management__update-btn:hover {
          background: var(--surface-alt);
        }

        .slot-management__update-btn:active {
          transform: translateY(1px);
        }

        @media (max-width: 640px) {
          .slot-management__summary {
            grid-template-columns: 1fr;
          }

          .slot-management__row {
            flex-direction: column;
            align-items: flex-start;
          }

          .slot-management__progress-track {
            width: 100%;
          }

          .slot-management__controls {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>

      <div className="slot-management">
        <div className="slot-management__summary">
          <div className="slot-management__summary-card">
            <p className="slot-management__summary-label">Total slots</p>
            <p className="slot-management__summary-value">{totalSlots}</p>
          </div>
          <div className="slot-management__summary-card">
            <p className="slot-management__summary-label">Slots remaining</p>
            <p className="slot-management__summary-value">{slotsRemaining}</p>
          </div>
        </div>

        <h2 className="slot-management__section-title">Slots by internship</h2>

        <div className="slot-management__list">
          {internships.map((item) => {
            const percent = item.slots > 0 ? Math.min((item.taken / item.slots) * 100, 100) : 0;
            return (
              <div className="slot-management__row" key={item.id}>
                <div className="slot-management__info">
                  <p className="slot-management__position">{item.position}</p>
                  <p className="slot-management__taken">
                    {item.taken} of {item.slots} slots taken
                  </p>
                </div>

                <div className="slot-management__progress-track">
                  <div
                    className="slot-management__progress-fill"
                    style={{ width: `${percent}%` }}
                  />
                </div>

                <div className="slot-management__controls">
                  <div className="slot-management__stepper">
                    <input
                      type="number"
                      min="0"
                      value={drafts[item.id]}
                      onChange={(e) => handleDraftChange(item.id, e.target.value)}
                    />
                    <div className="slot-management__stepper-buttons">
                      <button
                        type="button"
                        className="slot-management__stepper-btn"
                        onClick={() => handleStep(item.id, 1)}
                        aria-label="Increase slots"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="18 15 12 9 6 15" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="slot-management__stepper-btn"
                        onClick={() => handleStep(item.id, -1)}
                        aria-label="Decrease slots"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="slot-management__update-btn"
                    onClick={() => handleUpdate(item.id)}
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
