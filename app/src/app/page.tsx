"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  FileCheck,
  Fingerprint,
  Lock,
  Radar,
  ShieldCheck,
  Sparkle,
  Target,
} from "lucide-react";
import VaultScene from "@/components/vault-scene";
import clsx from "clsx";

const backgroundVideo =
  "https://cdn.coverr.co/videos/coverr-dark-waves-of-light-5749/1080p.mp4";

const intelligencePillars = [
  {
    title: "Biasless Patterning",
    description:
      "Cross-validate every data stream against 60 independent sources before it touches the dossier.",
    icon: Radar,
  },
  {
    title: "Institutional Controls",
    description:
      "SOC 2-aligned privacy lattice with immutable audit trails guaranteed across every decision node.",
    icon: ShieldCheck,
  },
  {
    title: "Instant Liquidity Insights",
    description:
      "Real-time liquidity indicators modeled directly into the dossier narrative blocks.",
    icon: Target,
  },
];

const processSteps = [
  {
    name: "Vault-Gated Intake",
    detail:
      "Biometric handshakes, jurisdictional screening, and mandate fingerprinting executed in 92 minutes.",
    evidence: "96.4% of mandates cleared without human escalation.",
  },
  {
    name: "Signal Refinery",
    detail:
      "Cross-market signal lattice neutralises institutional bias while preserving contrarian edge.",
    evidence: "11.2M raw artifacts reconciled nightly.",
  },
  {
    name: "Dossier Fabrication",
    detail:
      "Narrative-grade PDF + API feed with covenant matrices, risk gradients, and timed unlock controls.",
    evidence: "Average delivery cycle under 3.7 hours from greenlight.",
  },
];

const trustSignals = [
  { label: "Median dossier NPS", value: "92.1", suffix: "", accent: true },
  { label: "Verified capital events", value: "134", suffix: "", accent: false },
  {
    label: "Cross-border mandates fulfilled",
    value: "41",
    suffix: "jurisdictions",
    accent: false,
  },
  {
    label: "Dossier tamper attempts intercepted",
    value: "0",
    suffix: "in 24 months",
    accent: true,
  },
];

const dossierHighlights = [
  {
    heading: "Audit-clad narratives",
    text: "Each dossier tile is cryptographically versioned, enabling regulators and investors to replay the substantiation chain in seconds.",
  },
  {
    heading: "Dynamic counterparty heat-maps",
    text: "Interactive overlays surface liquidity appetite, governance posture, and compliance friction in real time across your partner stack.",
  },
  {
    heading: "Secure dossier streaming",
    text: "Access dossiers in sealed browser sandboxes with timeboxed credentials and watermarking tuned to your authority matrix.",
  },
];

const intakeSteps = [
  {
    title: "Identity Confirmation",
    summary: "Authenticate the principals without exposing your team to risk.",
    microcopy: "We hash and vault your biometrics before the form renders.",
  },
  {
    title: "Mandate Scoping",
    summary: "Define precision guardrails for the dossier you expect.",
    microcopy: "Explain capital intent, diligence depth, and time sensitivity.",
  },
  {
    title: "Delivery Controls",
    summary: "Select release cadence, channels, and redaction envelopes.",
    microcopy: "No agent touches the dossier. Your vault, your rules.",
  },
];

export default function Home() {
  const [activeIntakeStep, setActiveIntakeStep] = useState(0);
  const [formState, setFormState] = useState<"idle" | "processing" | "completed">(
    "idle",
  );

  const dynamicPrompt = useMemo(
    () => intakeSteps[activeIntakeStep],
    [activeIntakeStep],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formState === "processing") return;
    setFormState("processing");
    const timeout = setTimeout(() => {
      setFormState("completed");
      clearTimeout(timeout);
    }, 1600);
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <video
        className="pointer-events-none fixed inset-0 h-full w-full object-cover opacity-35"
        autoPlay
        loop
        muted
        playsInline
        poster="data:image/gif;base64,R0lGODlhAQABAAAAACw="
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-[#04060d]/90 via-[#03050d]/55 to-[#03050d]" />
      <div className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(circle_at_20%_-20%,rgba(76,209,255,0.35),transparent_65%)]" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="px-6 py-8 sm:px-12">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/20 ring-1 ring-cyan-300/40">
                <Lock className="h-6 w-6 text-cyan-200" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
                  AccrueFlow™
                </p>
                <p className="text-xs text-slate-300">Timeless Intelligence Platform</p>
              </div>
            </div>
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
              <a className="transition-colors hover:text-white" href="#platform">
                Platform
              </a>
              <a className="transition-colors hover:text-white" href="#process">
                Method
              </a>
              <a className="transition-colors hover:text-white" href="#intake">
                Secure Intake
              </a>
              <a className="transition-colors hover:text-white" href="#assurance">
                Assurance
              </a>
            </nav>
            <motion.a
              href="#intake"
              className="group flex items-center gap-2 rounded-full border border-cyan-200/40 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-100/80 hover:bg-cyan-400/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enter Client Vault
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </header>

        <main className="flex-1 px-6 pb-24 pt-6 sm:px-12">
          <section className="mx-auto flex max-w-6xl flex-col gap-16 pb-24 lg:flex-row lg:items-stretch">
            <div className="flex flex-1 flex-col justify-between">
              <div className="space-y-6">
                <motion.span
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.35em] text-slate-200/80"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <BadgeCheck className="h-3.5 w-3.5 text-cyan-200" />
                  No-Contact Intelligence Bank
                </motion.span>
                <motion.h1
                  className="max-w-xl text-4xl font-semibold leading-[1.15] text-white sm:text-5xl lg:text-6xl"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  AccrueFlow™ v2.0 — the digital private bank for $15k dossiers, delivered
                  without compromise.
                </motion.h1>
                <motion.p
                  className="max-w-lg text-base leading-relaxed text-slate-200/80 sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  We orchestrate contrarian intelligence for design and engineering
                  leadership. No sales calls. No consultancy theater. Just institutional
                  clarity deployed through vault-grade automation.
                </motion.p>
              </div>
              <div className="mt-10 flex flex-col gap-6 sm:flex-row">
                <motion.a
                  href="#intake"
                  className="group flex items-center justify-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-900 transition hover:bg-slate-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Initiate Dossier
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </motion.a>
                <motion.a
                  href="#assurance"
                  className="flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white/40 hover:bg-white/5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Controls
                </motion.a>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {trustSignals.map((signal) => (
                  <motion.div
                    key={signal.label}
                    className={clsx(
                      "rounded-3xl border border-white/10 px-4 py-5 text-left backdrop-blur-xl",
                      signal.accent ? "bg-cyan-500/10" : "bg-white/5",
                    )}
                    whileHover={{ translateY: -6 }}
                  >
                    <p className="text-3xl font-semibold text-white">
                      {signal.value}
                      {signal.suffix && (
                        <span className="ml-1 text-xs font-medium uppercase tracking-[0.35em] text-slate-200/80">
                          {signal.suffix}
                        </span>
                      )}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.35em] text-slate-300/80">
                      {signal.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative flex flex-1 flex-col gap-6">
              <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_25px_70px_-40px_rgba(76,209,255,0.7)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(76,209,255,0.14),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(12,201,195,0.12),transparent_55%)]" />
                <div className="relative h-full rounded-3xl border border-white/10 bg-black/40">
                  <VaultScene />
                </div>
                <div className="relative mt-4 grid gap-3 rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.35em] text-slate-400/90">
                      Vault Integrity Pulse
                    </span>
                    <span className="flex items-center gap-1 text-xs text-cyan-200">
                      <Sparkle className="h-3 w-3" />
                      Real-time
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xs text-slate-300/80">Quantum Hash Sync</p>
                      <p className="mt-1 text-lg font-semibold text-white">+0.0029s</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xs text-slate-300/80">Signal Stability</p>
                      <p className="mt-1 text-lg font-semibold text-white">99.982%</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-cyan-400/10 p-3">
                      <p className="text-xs text-cyan-100/80">Tamper Attempts</p>
                      <p className="mt-1 text-lg font-semibold text-white">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="platform" className="mx-auto max-w-6xl pb-24">
            <div className="grid gap-6 lg:grid-cols-3">
              {intelligencePillars.map((pillar) => (
                <motion.div
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <pillar.icon className="h-10 w-10 text-cyan-200" />
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                    {pillar.description}
                  </p>
                  <motion.span
                    className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-cyan-100/80"
                    whileHover={{ x: 4 }}
                  >
                    Read Assurance Matrix
                    <ArrowRight className="h-3 w-3" />
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </section>

          <section
            id="process"
            className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[2.75rem] border border-white/10 bg-white/5 px-8 py-12 backdrop-blur-xl lg:flex-row"
          >
            <div className="max-w-sm space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-1 text-xs uppercase tracking-[0.35em] text-slate-200/70">
                <Fingerprint className="h-3.5 w-3.5 text-cyan-200" />
                Frictionless Confidence
              </span>
              <h2 className="text-3xl font-semibold text-white lg:text-4xl">
                How we deliver dossiers without a single phone call.
              </h2>
              <p className="text-sm leading-relaxed text-slate-200/80">
                Your mandate streams through three sealed systems. Each is designed to
                eliminate friction, bias, and leakage. The outcome: a dossier you can
                forward to your board in the same hour it lands.
              </p>
            </div>
            <div className="grid flex-1 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.name}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/35 p-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-cyan-300/5 to-white/0 opacity-0 transition group-hover:opacity-100" />
                  <div className="relative">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-300/80">
                      Phase {index + 1}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {step.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                      {step.detail}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-xs text-cyan-100/80">
                      <FileCheck className="h-3.5 w-3.5" />
                      {step.evidence}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl gap-8 py-24 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(76,209,255,0.2),transparent_55%)]" />
              <div className="relative space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-1 text-xs uppercase tracking-[0.35em] text-slate-200/70">
                  <Lock className="h-3.5 w-3.5 text-cyan-200" />
                  Dossier Engine
                </span>
                <h2 className="text-3xl font-semibold text-white lg:text-4xl">
                  A dossier interface engineered like a private bank—not a slide deck.
                </h2>
                <p className="text-sm leading-relaxed text-slate-200/80">
                  AccrueFlow™ dossiers combine narrative clarity with programmable access
                  controls. Each release is guarantee-backed: verifiable provenance, zero
                  leakage, and precision delivery across your leadership circle.
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  {dossierHighlights.map((highlight) => (
                    <motion.div
                      key={highlight.heading}
                      className="rounded-3xl border border-white/10 bg-black/30 p-5"
                      whileHover={{ translateY: -6 }}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {highlight.heading}
                      </h3>
                      <p className="mt-2 text-sm text-slate-200/80">{highlight.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <motion.div
              id="assurance"
              className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-cyan-500/10 to-transparent p-8 backdrop-blur-xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(12,201,195,0.18),transparent_60%)]" />
              <div className="relative space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/80">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Assurance Layer
                </span>
                <h3 className="text-2xl font-semibold text-white">
                  Governance you can notarize.
                </h3>
                <ul className="space-y-4 text-sm text-slate-100/90">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-200" />
                    Immutable cryptographic seals on every dossier render.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-200" />
                    Dual control release scheduling with biometric attestation.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-200" />
                    Automated disclosures prepared for regulatory committees.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-200" />
                    SOC 2 + ISO 27001 alignment with third-party verification.
                  </li>
                </ul>
                <motion.a
                  href="#intake"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white/60 hover:bg-white/10"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Review compliance brief
                  <ArrowRight className="h-3 w-3" />
                </motion.a>
              </div>
            </motion.div>
          </section>

          <section
            id="intake"
            className="mx-auto grid max-w-6xl gap-10 rounded-[2.75rem] border border-white/10 bg-black/40 px-8 py-12 backdrop-blur-2xl lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-slate-200/80">
                <Lock className="h-3.5 w-3.5 text-cyan-200" />
                Gold-Standard Intake
              </span>
              <h2 className="text-3xl font-semibold text-white lg:text-4xl">
                The secure dossier mandate intake engineered to feel like a vault.
              </h2>
              <p className="text-sm leading-relaxed text-slate-200/80">
                Every field is encrypted before leaving your device. Intake runs on an
                isolated enclave, notarised in real time. No sales team ever sees it.
              </p>
              <div className="space-y-4">
                {intakeSteps.map((step, index) => (
                  <motion.button
                    key={step.title}
                    type="button"
                    className={clsx(
                      "w-full rounded-3xl border px-5 py-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80",
                      activeIntakeStep === index
                        ? "border-cyan-300/60 bg-cyan-400/10 shadow-[0_0_25px_-15px_rgba(76,209,255,0.7)]"
                        : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/8",
                    )}
                    onClick={() => setActiveIntakeStep(index)}
                    whileHover={{ translateY: -3 }}
                  >
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-300/80">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-200/80">{step.summary}</p>
                  </motion.button>
                ))}
              </div>
            </div>
            <motion.form
              onSubmit={handleSubmit}
              className="relative rounded-[2.75rem] border border-cyan-300/30 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent p-8 shadow-[0_55px_150px_-90px_rgba(76,209,255,0.75)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 rounded-[2.75rem] border border-white/10" />
              <div className="relative space-y-6">
                <header className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/80">
                    {dynamicPrompt.title}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    {dynamicPrompt.summary}
                  </h3>
                  <p className="text-sm text-slate-200/80">{dynamicPrompt.microcopy}</p>
                </header>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-slate-100/90">
                    Executive Sponsor
                    <input
                      required
                      name="sponsor"
                      type="text"
                      placeholder="Full legal name"
                      className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-slate-100/90">
                    Authenticated Email
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="mandates@yourfirm.com"
                      className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-slate-100/90">
                    Jurisdiction of Domicile
                    <input
                      required
                      name="jurisdiction"
                      type="text"
                      placeholder="Delaware, United States"
                      className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-slate-100/90">
                    Mandate Value (USD)
                    <input
                      required
                      name="mandateValue"
                      type="number"
                      min={15000}
                      step={1000}
                      placeholder="15000"
                      className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                    />
                  </label>
                  <label className="md:col-span-2 flex flex-col gap-2 text-sm text-slate-100/90">
                    Strategic Objective
                    <textarea
                      required
                      name="objective"
                      rows={4}
                      placeholder="Outline the decision, milestone, or diligence action the dossier must directly support."
                      className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                    />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-slate-100/90">
                    Decision Horizon
                    <select
                      required
                      name="horizon"
                      className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                    >
                      <option value="">Select window</option>
                      <option value="12h">Under 12 hours</option>
                      <option value="24h">24 hours</option>
                      <option value="48h">48 hours</option>
                      <option value="72h">72 hours</option>
                      <option value="custom">Custom cadence</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-slate-100/90">
                    Release Controls
                    <select
                      required
                      name="release"
                      className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                    >
                      <option value="">Select protocol</option>
                      <option value="single-use">Single-use encrypted link</option>
                      <option value="schedule">Scheduled unlock windows</option>
                      <option value="api">API feed with IP fencing</option>
                    </select>
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm text-slate-100/90">
                  Counterparty Filters
                  <input
                    required
                    name="filters"
                    type="text"
                    placeholder="Example: Exclude vendors with active DOJ consent decrees."
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                  />
                </label>
                <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-black/40 p-4 text-xs text-slate-200/80">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4 text-cyan-200" />
                    <p className="uppercase tracking-[0.35em]">Integrity Attestation</p>
                  </div>
                  <p>
                    By initiating, you certify the mandate is authorized and compliant with
                    all governing policies. AccrueFlow™ enforces zero-knowledge review and
                    notarises your submission instantly.
                  </p>
                  <label className="flex items-center gap-3 text-xs text-slate-200/80">
                    <input
                      required
                      name="attest"
                      type="checkbox"
                      className="h-4 w-4 rounded border border-white/30 bg-black/50 text-cyan-300"
                    />
                    I attest the mandate is legitimate and approved.
                  </label>
                </div>

                <motion.button
                  type="submit"
                  className={clsx(
                    "relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] transition",
                    formState === "completed"
                      ? "bg-emerald-400 text-slate-900"
                      : "bg-white text-slate-900 hover:bg-slate-200",
                  )}
                  disabled={formState === "processing" || formState === "completed"}
                  whileHover={formState === "idle" ? { scale: 1.01 } : {}}
                  whileTap={formState === "idle" ? { scale: 0.98 } : {}}
                >
                  {formState === "idle" && (
                    <>
                      Submit mandate
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                  {formState === "processing" && (
                    <span className="flex items-center gap-2 text-slate-800">
                      Processing…
                    </span>
                  )}
                  {formState === "completed" && (
                    <span className="flex items-center gap-2 text-slate-900">
                      Mandate sealed
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                  )}
                </motion.button>
                <p className="text-[11px] leading-relaxed text-slate-300/80">
                  Zero personnel review. Intake is notarised through our sovereign ledger
                  and a dossier concierge is created automatically within your vault. A
                  human will never call you.
                </p>
              </div>
            </motion.form>
          </section>
        </main>

        <footer className="px-6 pb-12 pt-8 sm:px-12">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 text-sm text-slate-300 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-200/80">
                AccrueFlow™
              </p>
              <p className="text-sm text-slate-300/80">
                The digital private bank for frictionless, unbiased intelligence.
              </p>
            </div>
            <div className="flex items-center gap-6 text-xs uppercase tracking-[0.35em] text-slate-300/80">
              <span className="flex items-center gap-2">
                <Sparkle className="h-4 w-4 text-cyan-200" />
                Continuous Audit
              </span>
              <span className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-cyan-200" />
                Zero-Contact Intake
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-cyan-200" />
                Sovereign Controls
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
