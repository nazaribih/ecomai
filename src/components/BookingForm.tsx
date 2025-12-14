"use client";

import React, { useState, useEffect } from "react";
import { PopupModal, useCalendlyEventListener } from "react-calendly";

export default function BookingForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [isBooked, setIsBooked] = useState(false);
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        website: "",
        employees: "1-10",
        problem: "",
    });

    useEffect(() => {
        // Wait for mount to set root element to avoid hydration mismatch
        setRootElement(document.body);
    }, []);

    useCalendlyEventListener({
        onEventScheduled: (e) => {
            setIsOpen(false);
            setIsBooked(true);
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsOpen(true);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (isBooked) {
        return (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <svg
                        className="h-6 w-6 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-emerald-900">
                    Meeting Confirmed!
                </h3>
                <p className="mt-2 text-sm text-emerald-700">
                    Thanks for booking. We've sent a calendar invitation to your email. We are looking forward to helping you with ops optimization.
                </p>
            </div>
        );
    }

    return (
        <>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                            Book AI Operations Discovery
                        </h3>
                        <p className="mt-2 text-sm text-slate-600">
                            Tell us a bit about your operations, then pick a time for a call.
                        </p>

                        <div className="mt-6 space-y-4">
                            <div className="flex gap-3 text-sm text-slate-600">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 font-bold text-xs">
                                    1
                                </span>
                                <span>Fill out the diagnostics form</span>
                            </div>
                            <div className="flex gap-3 text-sm text-slate-600">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 font-bold text-xs">
                                    2
                                </span>
                                <span>Select a time on Calendly</span>
                            </div>
                            <div className="flex gap-3 text-sm text-slate-600">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 font-bold text-xs">
                                    3
                                </span>
                                <span>Receive confirmation</span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="grid gap-4">
                        <div>
                            <label htmlFor="name" className="block text-xs font-medium text-slate-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                                placeholder="Jane Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-xs font-medium text-slate-700">
                                Work Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                                placeholder="jane@company.com"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="phone" className="block text-xs font-medium text-slate-700">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                            <div>
                                <label htmlFor="employees" className="block text-xs font-medium text-slate-700">
                                    Company Size
                                </label>
                                <select
                                    name="employees"
                                    id="employees"
                                    value={formData.employees}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 bg-white"
                                >
                                    <option value="1-10">1-10 employees</option>
                                    <option value="11-50">11-50 employees</option>
                                    <option value="51-200">51-200 employees</option>
                                    <option value="201+">201+ employees</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="website" className="block text-xs font-medium text-slate-700">
                                Company Website
                            </label>
                            <input
                                type="text"
                                name="website"
                                id="website"
                                required
                                value={formData.website}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                                placeholder="example.ai"
                            />
                        </div>

                        <div>
                            <label htmlFor="problem" className="block text-xs font-medium text-slate-700">
                                Most painful business/operational problem
                            </label>
                            <textarea
                                name="problem"
                                id="problem"
                                required
                                rows={3}
                                value={formData.problem}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                                placeholder="e.g. High refund volume, manual data entry..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-2 w-full inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-900/20 hover:bg-slate-800 hover:scale-[1.02] active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-300"
                        >
                            Continue to Calendar
                        </button>
                    </form>
                </div>
            </div>

            {rootElement && (
                <PopupModal
                    url="https://calendly.com/nazaribih/30min"
                    onModalClose={() => setIsOpen(false)}
                    open={isOpen}
                    rootElement={rootElement}
                    prefill={{
                        name: formData.name,
                        email: formData.email,
                        customAnswers: {
                            a1: `Website: ${formData.website}\nSize: ${formData.employees}\nProblem: ${formData.problem}\nPhone: ${formData.phone}`,
                        },
                    }}
                />
            )}
        </>
    );
}

