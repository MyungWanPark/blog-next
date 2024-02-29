import { Email } from "./email";

export async function sendContactEmail(email: Email) {
    const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(email),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    console.log("response = ", response);
    console.log("data = ", data);
    if (!response.ok) {
        throw new Error(data.message || "서버 요청에 실패하였습니다.");
    }

    return data;
}
