"use client";

import { ChangeEvent, FormEvent, useState } from "react";
type Form = {
    email: string;
    subject: string;
    message: string;
};
export default function ContactForm() {
    const [form, setForm] = useState<Form>({
        email: "",
        subject: "",
        message: "",
    });
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
        console.log(form);
    };
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                required
                onChange={onChange}
            />
            <label htmlFor="subject">Subject</label>
            <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                required
                onChange={onChange}
            />
            <label htmlFor="message">Message</label>
            <textarea
                cols={10}
                id="message"
                name="message"
                value={form.message}
                required
                onChange={onChange}
            />
            <button>submit</button>
        </form>
    );
}
