"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list. We'll be in touch when the Pass launches.");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-midnight-light/60 border border-gold/30 rounded-xl p-6 text-center">
        <p className="text-gold font-semibold text-lg mb-1">You&apos;re on the list.</p>
        <p className="text-slate-300 text-sm">
          We&apos;ll email you the moment the Etomedia Pass launches. Thank you for your interest.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1.5 font-medium">First name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="input-field-dark"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1.5 font-medium">
            Email address <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="input-field-dark"
          />
        </div>
      </div>
      <button type="submit" disabled={status === "loading"} className="btn-gold w-full justify-center py-3">
        {status === "loading" ? "Joining…" : "Join the Waitlist"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">{message}</p>
      )}
      <p className="text-xs text-slate-600 text-center">
        No spam. We&apos;ll only email you about the Pass launch.
      </p>
    </form>
  );
}
