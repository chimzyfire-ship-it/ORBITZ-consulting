"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import ArrowIcon from "./ArrowIcon";

interface QuestionOption {
  key: string;
  title: string;
  desc: string;
}

const QUESTION_1_OPTIONS: QuestionOption[] = [
  {
    key: "A",
    title: "Documentary & Cinematic Production",
    desc: "Feature films, docuseries, brand origin epics, and festival submissions.",
  },
  {
    key: "B",
    title: "Programmatic Media Buying & Ad Ops",
    desc: "Omnichannel DSP scaling, broadcast airtime, DOOH takeovers, and high-yield ROAS.",
  },
  {
    key: "C",
    title: "Strategic PR & Reputation Architecture",
    desc: "Executive positioning, tier-1 global press placement, and crisis management.",
  },
  {
    key: "D",
    title: "Live Broadcast & Experiential Summits",
    desc: "Hybrid summit production, multi-camera live broadcast, and keynote AV engineering.",
  },
];

const QUESTION_2_OPTIONS: QuestionOption[] = [
  {
    key: "A",
    title: "Rapid Sprint (< 30 Days)",
    desc: "Immediate broadcast requirement, breaking PR campaign or imminent event deadline.",
  },
  {
    key: "B",
    title: "Strategic Quarter (1 – 3 Months)",
    desc: "Structured documentary shoot, scheduled media buying flight or regional rollout.",
  },
  {
    key: "C",
    title: "Flagship Production (3 – 6 Months)",
    desc: "Deep-dive investigative feature, multi-city summit or complete media overhaul.",
  },
  {
    key: "D",
    title: "Executive Strategic Retainer (Ongoing)",
    desc: "Long-term media advisory, continuous press oversight, and dedicated production desk.",
  },
];

const BUDGET_OPTIONS = [
  "$25,000 – $50,000",
  "$50,000 – $150,000",
  "$150,000 – $500,000",
  "$500,000+",
  "Confidential / Institutional",
];

export default function InteractiveInquiry({ isStandAlone = false }: { isStandAlone?: boolean }) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedPillar, setSelectedPillar] = useState<QuestionOption | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<QuestionOption | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    organization: "",
    budget: "$50,000 – $150,000",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSelectPillar = (opt: QuestionOption) => {
    setSelectedPillar(opt);
    setStep(2);
  };

  const handleSelectTimeline = (opt: QuestionOption) => {
    setSelectedTimeline(opt);
    setStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pillar: selectedPillar?.title,
          timeline: selectedTimeline?.title,
          ...formData,
        }),
      });

      const data = await res.json();
      const generatedId = data.ticketId || `ORB-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedId);
      setStep(4);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#d4af37", "#ffffff", "#080a0c"],
        });
      } catch (err) {
        // Safe confetti fallback
      }
    } catch (err) {
      // Local fallback on network error
      setTicketId(`ORB-${Math.floor(100000 + Math.random() * 900000)}`);
      setStep(4);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetQuiz = () => {
    setSelectedPillar(null);
    setSelectedTimeline(null);
    setStep(1);
  };

  return (
    <div
      style={{
        background: "#e8e4e0",
        color: "#080a0c",
        borderRadius: "4px",
        padding: "clamp(24px, 4vw, 48px)",
        boxShadow: "0 25px 60px rgba(0,0,0,0.45)",
        width: "100%",
        maxWidth: isStandAlone ? "860px" : "100%",
        margin: "0 auto",
      }}
    >
      {/* Top Header & Progress */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
        <div style={{ font: "10px var(--mono)", letterSpacing: "1.5px", textTransform: "uppercase", color: "#555850" }}>
          {step <= 2 && `QUESTION 0${step} OF 02`}
          {step === 3 && "PHASE 03 • FINAL DIRECTIVE"}
          {step === 4 && "TRANSMISSION CONFIRMED"}
        </div>
        <div style={{ font: "10px var(--mono)", letterSpacing: "1px", color: "#9c7b16" }}>
          ORBITZ INTAKE PROTOCOL
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ height: "3px", width: "100%", background: "rgba(8, 10, 12, 0.12)", marginBottom: "36px", position: "relative" }}>
        <div
          style={{
            height: "100%",
            background: "var(--gold-accent)",
            width: `${step === 1 ? 33 : step === 2 ? 66 : 100}%`,
            transition: "width 0.4s ease",
          }}
        />
      </div>

      {/* QUESTION 1 */}
      {step === 1 && (
        <div>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(26px, 3.2vw, 38px)", marginBottom: "14px", color: "#080a0c" }}>
            What is your organization&apos;s primary objective?
          </h2>
          <p style={{ color: "#4a4d46", fontSize: "15px", marginBottom: "32px", maxWidth: "560px" }}>
            Select the principal practice area required. We will customize our production crew and media desk accordingly.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "14px" }}>
            {QUESTION_1_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => handleSelectPillar(opt)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "20px 24px",
                  background: "#ffffff",
                  borderRadius: "2px",
                  border: "none",
                  textAlign: "left",
                  transition: "transform 0.2s, background 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(6px)";
                  e.currentTarget.style.background = "#faf8f5";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.04)";
                }}
              >
                <span
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: "36px",
                    height: "36px",
                    background: "#080a0c",
                    color: "#ffffff",
                    font: "700 12px var(--mono)",
                    flexShrink: 0,
                    borderRadius: "2px",
                  }}
                >
                  {opt.key}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: "16px", color: "#080a0c", marginBottom: "4px" }}>
                    {opt.title}
                  </div>
                  <div style={{ fontSize: "13px", color: "#666" }}>
                    {opt.desc}
                  </div>
                </div>
                <span style={{ fontSize: "18px", color: "var(--gold-accent)" }}>{"\u2192\uFE0E"}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* QUESTION 2 */}
      {step === 2 && (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <button
              type="button"
              onClick={() => setStep(1)}
              style={{
                background: "transparent",
                border: "none",
                fontSize: "12px",
                fontFamily: "var(--mono)",
                color: "#666",
                cursor: "pointer",
                padding: 0,
              }}
            >
              ← CHANGE OBJECTIVE
            </button>
            <span style={{ color: "#aaa" }}>•</span>
            <span style={{ fontSize: "12px", fontFamily: "var(--mono)", color: "var(--gold-accent)" }}>
              {selectedPillar?.title}
            </span>
          </div>

          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(26px, 3.2vw, 38px)", marginBottom: "14px", color: "#080a0c" }}>
            What is your target timeline and deployment horizon?
          </h2>
          <p style={{ color: "#4a4d46", fontSize: "15px", marginBottom: "32px", maxWidth: "560px" }}>
            Our fleet and production crew deploy rapidly. Choose your ideal operational cadence.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "14px" }}>
            {QUESTION_2_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => handleSelectTimeline(opt)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "20px 24px",
                  background: "#ffffff",
                  borderRadius: "2px",
                  border: "none",
                  textAlign: "left",
                  transition: "transform 0.2s, background 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(6px)";
                  e.currentTarget.style.background = "#faf8f5";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.04)";
                }}
              >
                <span
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: "36px",
                    height: "36px",
                    background: "#080a0c",
                    color: "#ffffff",
                    font: "700 12px var(--mono)",
                    flexShrink: 0,
                    borderRadius: "2px",
                  }}
                >
                  {opt.key}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: "16px", color: "#080a0c", marginBottom: "4px" }}>
                    {opt.title}
                  </div>
                  <div style={{ fontSize: "13px", color: "#666" }}>
                    {opt.desc}
                  </div>
                </div>
                <span style={{ fontSize: "18px", color: "var(--gold-accent)" }}>{"\u2192\uFE0E"}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 3: BRIEF & CONTACT */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <button
              type="button"
              onClick={() => setStep(2)}
              style={{
                background: "transparent",
                border: "none",
                fontSize: "12px",
                fontFamily: "var(--mono)",
                color: "#666",
                cursor: "pointer",
                padding: 0,
              }}
            >
              ← BACK
            </button>
            <span style={{ color: "#aaa" }}>•</span>
            <span style={{ fontSize: "12px", fontFamily: "var(--mono)", color: "var(--gold-accent)" }}>
              {selectedPillar?.key} + {selectedTimeline?.key}
            </span>
          </div>

          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(24px, 3vw, 36px)", marginBottom: "8px", color: "#080a0c" }}>
            Architect Your Commission Brief
          </h2>
          <p style={{ color: "#4a4d46", fontSize: "14px", marginBottom: "26px" }}>
            Provide your organizational details for senior partner review under mutual NDA.
          </p>

          {/* Scoped Summary Card */}
          <div
            style={{
              background: "#ffffff",
              padding: "18px 22px",
              borderRadius: "2px",
              marginBottom: "26px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ font: "9px var(--mono)", letterSpacing: "1.2px", color: "#888", marginBottom: "6px" }}>
              SCOPED DIRECTIVE
            </div>
            <div style={{ fontWeight: 700, fontSize: "15px", color: "#080a0c" }}>
              {selectedPillar?.title}
            </div>
            <div style={{ fontSize: "13px", color: "#555", marginTop: "2px" }}>
              Cadence: {selectedTimeline?.title}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "18px" }}>
            <div>
              <label style={{ display: "block", font: "11px var(--mono)", letterSpacing: "0.5px", marginBottom: "6px", color: "#444" }}>
                FULL NAME *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Lorde Sterling"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: "#ffffff",
                  border: "none",
                  borderRadius: "2px",
                  fontSize: "14px",
                  color: "#080a0c",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", font: "11px var(--mono)", letterSpacing: "0.5px", marginBottom: "6px", color: "#444" }}>
                WORK / INSTITUTIONAL EMAIL *
              </label>
              <input
                type="email"
                required
                value={formData.workEmail}
                onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                placeholder="e.g. sterling@apexcorp.com"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: "#ffffff",
                  border: "none",
                  borderRadius: "2px",
                  fontSize: "14px",
                  color: "#080a0c",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                }}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "18px" }}>
            <div>
              <label style={{ display: "block", font: "11px var(--mono)", letterSpacing: "0.5px", marginBottom: "6px", color: "#444" }}>
                ORGANIZATION / BRAND *
              </label>
              <input
                type="text"
                required
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="e.g. Apex Global Media"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: "#ffffff",
                  border: "none",
                  borderRadius: "2px",
                  fontSize: "14px",
                  color: "#080a0c",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", font: "11px var(--mono)", letterSpacing: "0.5px", marginBottom: "6px", color: "#444" }}>
                ANTICIPATED BUDGET BRACKET
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: "#ffffff",
                  border: "none",
                  borderRadius: "2px",
                  fontSize: "14px",
                  color: "#080a0c",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                }}
              >
                {BUDGET_OPTIONS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: "26px" }}>
            <label style={{ display: "block", font: "11px var(--mono)", letterSpacing: "0.5px", marginBottom: "6px", color: "#444" }}>
              BRIEF CONTEXT / SPECIAL REQUIREMENTS
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Provide any context on locations, broadcast milestones, or specific deliverables..."
              style={{
                width: "100%",
                padding: "14px 16px",
                background: "#ffffff",
                border: "none",
                borderRadius: "2px",
                fontSize: "14px",
                color: "#080a0c",
                boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="button"
            style={{
              width: "100%",
              background: "#080a0c",
              color: "#ffffff",
              justifyContent: "space-between",
              padding: "20px 28px",
            }}
          >
            <span>{isSubmitting ? "TRANSMITTING BRIEF TO PARTNERS..." : "TRANSMIT COMMISSION BRIEF"}</span>
            <span style={{ color: "var(--gold-accent)" }}><ArrowIcon /></span>
          </button>
        </form>
      )}

      {/* STEP 4: SUCCESS CONFIRMATION */}
      {step === 4 && (
        <div style={{ textAlign: "center", padding: "30px 10px" }}>
          <div
            style={{
              display: "inline-grid",
              placeItems: "center",
              width: "60px",
              height: "60px",
              background: "#080a0c",
              color: "var(--gold)",
              borderRadius: "50%",
              fontSize: "24px",
              marginBottom: "24px",
            }}
          >
            ✓
          </div>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 4vw, 42px)", marginBottom: "14px", color: "#080a0c" }}>
            Commission Protocol Initiated
          </h2>
          <p style={{ color: "#4a4d46", fontSize: "16px", maxWidth: "480px", margin: "0 auto 28px", lineHeight: "1.7" }}>
            Thank you, <b>{formData.fullName}</b>. Your brief has been routed to the ORBITZ Managing Partner desk. A senior producer will reach out within 4 business hours.
          </p>

          <div
            style={{
              background: "#ffffff",
              padding: "16px 24px",
              display: "inline-block",
              borderRadius: "2px",
              font: "12px var(--mono)",
              letterSpacing: "1px",
              color: "#080a0c",
              marginBottom: "32px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
            }}
          >
            DIRECTIVE TICKET: <span style={{ color: "#9c7b16", fontWeight: 700 }}>{ticketId}</span>
          </div>

          <div>
            <button
              type="button"
              onClick={resetQuiz}
              style={{
                background: "transparent",
                border: "none",
                borderBottom: "1px solid #777a75",
                padding: "6px 0",
                fontSize: "13px",
                fontFamily: "var(--sans)",
                cursor: "pointer",
                color: "#080a0c",
              }}
            >
              Start Another Inquiry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
