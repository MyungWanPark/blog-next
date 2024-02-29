"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import EmailResultBanner from "./EmailResultBanner";
import { sendContactEmail } from "@/service/contact";
type Form = {
    emailFrom: string;
    subject: string;
    message: string;
};

export type EmailResult = {
    state: "success" | "fail";
    message: string;
};

const DEFAULT_FORM_DATA = {
    emailFrom: "",
    subject: "",
    message: "",
};

export default function ContactForm() {
    const [form, setForm] = useState<Form>(DEFAULT_FORM_DATA);
    const [emailResult, setEmailResult] = useState<EmailResult | null>(null);

    const onChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendContactEmail(form) //
            .then(() => {
                setEmailResult({
                    state: "success",
                    message: "정상적으로 전송되었습니다.",
                });
                setForm(DEFAULT_FORM_DATA);
            })
            .catch(() => {
                setEmailResult({
                    state: "fail",
                    message: "메일이 전송되지 않았습니다.",
                });
            })
            .finally(() => {
                setTimeout(() => {
                    setEmailResult(null);
                }, 3000);
            });
    };
    return (
        <section className="w-full max-w-md mt-4">
            {emailResult && <EmailResultBanner emailResult={emailResult} />}
            <form
                onSubmit={onSubmit}
                className="flex w-full flex-col bg-slate-700 rounded-lg p-4"
            >
                <label
                    htmlFor="emailFrom"
                    className="my-1 font-bold text-white"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="emailFrom"
                    name="emailFrom"
                    value={form.emailFrom}
                    required
                    onChange={onChange}
                    autoFocus
                />
                <label htmlFor="subject" className="my-1 font-bold text-white">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    required
                    onChange={onChange}
                />
                <label htmlFor="message" className="my-1 font-bold text-white">
                    Message
                </label>
                <textarea
                    cols={10}
                    id="message"
                    name="message"
                    value={form.message}
                    required
                    onChange={onChange}
                    className="text-black"
                />
                <button className="bg-yellow-400 mt-3 text-black font-bold">
                    submit
                </button>
            </form>
        </section>
    );
}
