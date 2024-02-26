import { EmailResult } from "./ContactForm";

export default function EmailResultBanner({
    emailResult: { state, message },
}: {
    emailResult: EmailResult;
}) {
    const isSuccess = state === "success";
    const icon = isSuccess ? "✅" : "🔥";
    return (
        <p
            className={`${
                isSuccess ? "bg-green-300" : "bg-red-300"
            } rounded-lg mb-3`}
        >{`${icon} ${message}`}</p>
    );
}
