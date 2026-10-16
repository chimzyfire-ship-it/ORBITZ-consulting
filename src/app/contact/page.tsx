"use client";

import { useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";

const globalDesks = [
  {
    city: "London",
    role: "European Headquarters & Media Buying Desk",
    address: "Berkeley Square House, Mayfair, London W1J 6BD",
    tel: "+44 (0) 20 7946 0892",
    email: "london@orbitzconsulting.com",
    timezone: "GMT / BST",
  },
  {
    city: "Lagos",
    role: "Pan-African Production Hub & Soundstage",
    address: "Admiralty Way, Lekki Phase 1 / Victoria Island, Lagos",
    tel: "+234 1 892 4500",
    email: "lagos@orbitzconsulting.com",
    timezone: "WAT (UTC+1)",
  },
  {
    city: "Dubai",
    role: "Middle East Strategic Comms & Events Bureau",
    address: "Gate Precinct 4, DIFC, Dubai, United Arab Emirates",
    tel: "+971 4 362 7000",
    email: "dubai@orbitzconsulting.com",
    timezone: "GST (UTC+4)",
  },
  {
    city: "New York",
    role: "Post-Production & Financial PR Office",
    address: "One World Trade Center, Suite 8500, New York, NY 10007",
    tel: "+1 212 555 0198",
    email: "ny@orbitzconsulting.com",
    timezone: "EST / EDT",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Media Inquiry",
    desk: "London",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          colors: ["#d4af37", "#ffffff", "#080a0c"],
        });
      } catch (err) {}
    }, 500);
  };

  return (
    <div style={{ background: "#080a0c", paddingBottom: "120px" }}>
      {/* Header */}
      <section className="wrap" style={{ paddingTop: "80px", paddingBottom: "60px", textAlign: "center" }}>
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          <span>// 05</span>GLOBAL DESK
        </p>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(40px, 5.5vw, 76px)", letterSpacing: "-.045em", marginBottom: "20px" }}>
          Connect with ORBITZ Concierge
        </h1>
        <p style={{ maxWidth: "620px", margin: "0 auto", fontSize: "16px", color: "var(--muted)", lineHeight: "1.7" }}>
          Direct coordinates for our executive producers, media buying strategists, and crisis communications directors worldwide.
        </p>
      </section>

      {/* Main Grid */}
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px" }}>
        
        {/* Left: Contact Form on Cream Card */}
        <div style={{ background: "#e8e4e0", color: "#080a0c", borderRadius: "3px", padding: "clamp(24px, 4vw, 44px)", boxShadow: "0 25px 60px rgba(0,0,0,0.4)" }}>
          <div style={{ font: "10px var(--mono)", letterSpacing: "1.5px", textTransform: "uppercase", color: "#555850", marginBottom: "12px" }}>
            DIRECT TRANSMISSION DESK
          </div>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "32px", marginBottom: "14px", color: "#080a0c" }}>
            Send a Priority Message
          </h2>
          <p style={{ color: "#4a4d46", fontSize: "14px", lineHeight: "1.7", marginBottom: "28px" }}>
            Monitored 24/7 by our partner duty officer. Confidentiality is assured under mutual NDA.
          </p>

          {sent ? (
            <div style={{ padding: "30px 10px", textAlign: "center" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#080a0c", color: "var(--gold)", display: "inline-grid", placeItems: "center", fontSize: "20px", marginBottom: "16px" }}>
                ✓
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "24px", color: "#080a0c", marginBottom: "8px" }}>
                Transmission Received
              </h3>
              <p style={{ color: "#555", fontSize: "14px", marginBottom: "20px" }}>
                Our senior coordinator will reply within 4 business hours.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                style={{ background: "transparent", border: "none", borderBottom: "1px solid #777a75", cursor: "pointer", fontSize: "13px" }}
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label style={{ display: "block", font: "10px var(--mono)", letterSpacing: "1px", marginBottom: "6px", color: "#444" }}>
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Elena Vance"
                  style={{ width: "100%", padding: "14px 16px", background: "#ffffff", border: "none", borderRadius: "2px", fontSize: "14px", color: "#080a0c" }}
                />
              </div>

              <div>
                <label style={{ display: "block", font: "10px var(--mono)", letterSpacing: "1px", marginBottom: "6px", color: "#444" }}>
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. elena@vanceholdings.com"
                  style={{ width: "100%", padding: "14px 16px", background: "#ffffff", border: "none", borderRadius: "2px", fontSize: "14px", color: "#080a0c" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", font: "10px var(--mono)", letterSpacing: "1px", marginBottom: "6px", color: "#444" }}>
                    NEAREST DESK
                  </label>
                  <select
                    value={formData.desk}
                    onChange={(e) => setFormData({ ...formData, desk: e.target.value })}
                    style={{ width: "100%", padding: "14px 16px", background: "#ffffff", border: "none", borderRadius: "2px", fontSize: "14px", color: "#080a0c" }}
                  >
                    <option value="London">London Mayfair</option>
                    <option value="Dubai">Dubai DIFC</option>
                    <option value="Lagos">Lagos VI</option>
                    <option value="New York">New York WTC</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", font: "10px var(--mono)", letterSpacing: "1px", marginBottom: "6px", color: "#444" }}>
                    NATURE OF INQUIRY
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{ width: "100%", padding: "14px 16px", background: "#ffffff", border: "none", borderRadius: "2px", fontSize: "14px", color: "#080a0c" }}
                  >
                    <option value="Documentary Production">Documentary Production</option>
                    <option value="Media Buying">Media Buying</option>
                    <option value="PR & Crisis">PR & Crisis</option>
                    <option value="Live Event Broadcast">Live Event Broadcast</option>
                    <option value="General Concierge">General Concierge</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", font: "10px var(--mono)", letterSpacing: "1px", marginBottom: "6px", color: "#444" }}>
                  TRANSMISSION DETAIL *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your inquiry, timeline, or broadcast requirement..."
                  style={{ width: "100%", padding: "14px 16px", background: "#ffffff", border: "none", borderRadius: "2px", fontSize: "14px", color: "#080a0c", resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="button"
                style={{ width: "100%", background: "#080a0c", color: "#ffffff", justifyContent: "space-between", marginTop: "8px" }}
              >
                <span>{submitting ? "TRANSMITTING..." : "DISPATCH DISPATCH TO PARTNERS"}</span>
                <span style={{ color: "var(--gold-accent)" }}>↗</span>
              </button>
            </form>
          )}
        </div>

        {/* Right: Global Desks Directory */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div>
            <p className="eyebrow">
              <span>// DIRECTORIES</span>
              GLOBAL HUBS
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "36px", marginBottom: "24px" }}>
              Our International Bureaus
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {globalDesks.map((desk) => (
              <div
                key={desk.city}
                style={{
                  borderTop: "1px solid var(--line)",
                  paddingTop: "20px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "24px", margin: 0, color: "var(--gold)" }}>
                    {desk.city}
                  </h3>
                  <span style={{ font: "10px var(--mono)", color: "#888", letterSpacing: "1px" }}>
                    {desk.timezone}
                  </span>
                </div>
                <div style={{ font: "12px var(--sans)", color: "#ccc", marginBottom: "8px" }}>
                  {desk.role}
                </div>
                <div style={{ font: "13px var(--sans)", color: "var(--muted)", lineHeight: "1.6" }}>
                  {desk.address}
                </div>
                <div style={{ font: "12px var(--mono)", color: "var(--gold-accent)", marginTop: "8px" }}>
                  TEL: {desk.tel} • EMAIL: {desk.email}
                </div>
              </div>
            ))}
          </div>

          {/* Rapid Quiz Link */}
          <div style={{ background: "#0d0f12", padding: "28px", borderRadius: "2px", border: "1px solid rgba(255,255,255,0.08)", marginTop: "12px" }}>
            <div style={{ font: "10px var(--mono)", letterSpacing: "1.5px", color: "var(--gold)", marginBottom: "8px" }}>
              FAST-TRACK SCOPING
            </div>
            <p style={{ fontSize: "14px", color: "var(--muted)", margin: "0 0 16px" }}>
              Prefer to answer 2 quick multiple choice questions to configure a production quote?
            </p>
            <Link className="button gold small-button" href="/inquiry">
              Launch 2-Question Scoping <span>↗</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
