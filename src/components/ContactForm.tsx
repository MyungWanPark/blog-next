"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import EmailResultBanner from "./EmailResultBanner";
type Form = {
    email: string;
    subject: string;
    message: string;
};

export type EmailResult = {
    state: "success" | "fail";
    message: string;
};

export default function ContactForm() {
    const [form, setForm] = useState<Form>({
        email: "",
        subject: "",
        message: "",
    });
    const [emailResult, setEmailResult] = useState<EmailResult | null>(null);

    const onChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        console.log("value = ", value);
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log("onSubmit 실행됨");
        e.preventDefault();
        setEmailResult({
            state: "success",
            message: "정상적으로 전송되었습니다.",
        });
        setTimeout(() => {
            setEmailResult(null);
        }, 3000);
    };
    return (
        <section className="w-full max-w-md mt-4">
            {emailResult && <EmailResultBanner emailResult={emailResult} />}
            <form
                onSubmit={onSubmit}
                className="flex w-full flex-col bg-slate-700 text-white rounded-lg p-4"
            >
                <label htmlFor="email" className="my-1 font-bold">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    required
                    onChange={onChange}
                />
                <label htmlFor="subject" className="my-1 font-bold">
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
                <label htmlFor="message" className="my-1 font-bold">
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
