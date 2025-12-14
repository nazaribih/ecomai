import React from "react";
import BookingForm from "@/components/BookingForm";

const demoItems = [
  { title: "Refund automation", videoId: "b4343728c542483380b0f117ba153180" },
  { title: "Agentic support automation", videoId: "b4343728c542483380b0f117ba153180" },
  { title: "Context-aware product recommendations", videoId: "b4343728c542483380b0f117ba153180" },
] as const;

export default function AICCommerceOSLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/commerce-logo.png"
              alt="Commerce OS Logo"
              className="h-9 w-9 rounded-xl ring-1 ring-slate-200 object-cover"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold">AI Commerce OS</div>
              <div className="text-xs text-slate-500">by Fort Wise AI</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#demos"
              className="hidden sm:inline text-sm text-slate-600 hover:text-slate-900"
            >
              Demos
            </a>
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              Book AI Operations Discovery
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-[56px] bg-gradient-to-br from-sky-200 via-white to-fuchsia-200 opacity-90 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 sm:pt-16 pb-10 sm:pb-12">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Built for Shopify / Magento ops
                </p>

                <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Custom integrations
                </p>
              </div>

              <h1 className="mt-5 text-3xl sm:text-5xl font-semibold tracking-tight">
                Automate e-commerce operations with AI agents
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl">
                Refunds, cancellations, agentic support, and product guidance —
                executed by AI, not humans.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-300"
                >
                  Book AI Operations Discovery
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors duration-300"
                >
                  See how we start
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
                <div className="inline-flex items-center gap-2">
                  <span className="h-5 w-5 rounded-lg bg-amber-100 ring-1 ring-slate-200" />
                  Free operations diagnostics
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="h-5 w-5 rounded-lg bg-sky-100 ring-1 ring-slate-200" />
                  Proof-Of-Concept-first (2–3 weeks)
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="h-5 w-5 rounded-lg bg-fuchsia-100 ring-1 ring-slate-200" />
                  Automate 1–2 real processes
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="h-5 w-5 rounded-lg bg-emerald-100 ring-1 ring-slate-200" />
                  ROI validated before scaling
                </div>
              </div>
            </div>

            {/* Right card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="p-5 sm:p-6">
                  <div className="text-sm font-semibold">What we automate</div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                      <span>Refund automation</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500" />
                      <span>Order cancellations and changes</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                      <span>Agentic customer support</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>
                        Context-aware product recommendations → increased
                        conversion
                      </span>
                    </li>
                  </ul>

                  <div className="mt-6 rounded-xl bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 border border-slate-200 p-4">
                    <div className="text-xs font-semibold text-slate-600">
                      Typical PoC outcome
                    </div>
                    <div className="mt-2 text-sm text-slate-800">
                      One operational workflow automated end-to-end, with
                      measurable impact and a clear rollout plan.
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 p-4 sm:p-5 flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    No pricing page. Start with diagnostics.
                  </div>
                  <a
                    href="#book"
                    className="text-xs font-semibold text-slate-900 hover:underline"
                  >
                    Book a call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who it’s for */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-10 sm:pb-12">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 hover:shadow-md transition-shadow duration-300">
            <div className="text-sm font-semibold">Who it’s for</div>
            <p className="mt-2 text-sm text-slate-600">
              Teams dealing with <strong>real operational friction</strong> - not demos, not experiments. <br /> <br />
              High ticket volume, repetitive support work, and processes that don’t scale with headcount.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-5 sm:p-6 hover:shadow-md transition-shadow duration-300">
            <div className="text-sm font-semibold">Retailers</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li> <strong> Mid-size e-commerce teams </strong> (Shopify / Magento / other)</li>
              <li>High volume of <strong> manual work </strong>  (internally and with clients)</li>
              <li>Support teams spending time on repetitive requests</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-fuchsia-50 to-white p-5 sm:p-6 hover:shadow-md transition-shadow duration-300">
            <div className="text-sm font-semibold">Partners</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>
                <strong> Agencies and system integrators</strong>  asked to “add AI” without clear execution paths
              </li>
              <li> <strong>CRM / ERP / helpdesk implementers</strong> needing automation that actually runs in production</li>
              <li>Partners who want measurable impact for clients, not chatbots that stop at FAQ answers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How we start */}
      <section
        id="how"
        className="mx-auto max-w-6xl px-4 sm:px-6 pb-10 sm:pb-12"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <div className="text-sm font-semibold">How we start</div>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                A short paid Proof of Concept to validate ROI before any wider
                rollout.
              </p>
            </div>
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Book a call
            </a>
          </div>

          <div className="mt-5 grid gap-3 grid-cols-1 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 hover:shadow-md transition-shadow duration-300">
              <div className="text-xs font-semibold text-slate-600">Step 1</div>
              <div className="mt-1 text-sm font-semibold">
                Free business diagnostics
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Pain points definition, eligibility verification
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 hover:shadow-md transition-shadow duration-300">
              <div className="text-xs font-semibold text-slate-600">Step 2</div>
              <div className="mt-1 text-sm font-semibold">Paid PoC</div>
              <div className="mt-1 text-xs text-slate-500">
                1-2 real processes automated in a few weeks
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 hover:shadow-md transition-shadow duration-300">
              <div className="text-xs font-semibold text-slate-600">Step 3</div>
              <div className="mt-1 text-sm font-semibold">
                ROI Validation + Scale
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Full scale deployment of a validated solution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demos */}
      <section id="demos" className="mx-auto max-w-6xl px-4 sm:px-6 pb-12">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Agentic automation demos
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Short demos of real operational workflows executed by AI agents.
          </p>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {demoItems.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Desktop: embed */}
              <div className="hidden sm:block">
                <div className="relative w-full pb-[56.25%] bg-slate-100">
                  <iframe
                    src={`https://www.loom.com/embed/${v.videoId}`}
                    title={v.title}
                    allow="fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="p-4 text-sm font-semibold">{v.title}</div>
              </div>

              {/* Mobile: button */}
              <div className="block sm:hidden p-4">
                <a
                  href={`https://www.loom.com/share/${v.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-medium text-sky-700 shadow-sm hover:bg-sky-100 transition-colors"
                >
                  {v.title} — open demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <BookingForm />

          <footer className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500">
            <div>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> Fort Wise AI Solutions</div>
            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                No pricing tables
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                PoC-first
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                Free diagnostics
              </span>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
