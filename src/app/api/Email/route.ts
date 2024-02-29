import { sendEmail } from "@/service/email";
import * as yup from "yup";

const emailSchema = yup.object({
    emailFrom: yup.string().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
});
export async function POST(req: Request) {
    const body = await req.json();
    if (!emailSchema.isValidSync(body)) {
        return new Response(
            JSON.stringify({ message: "유효하지 않은 포맷." }),
            { status: 400 }
        );
    }

    const { emailFrom, subject, message } = body;
    return sendEmail(body)
        .then(() => {
            return new Response(
                JSON.stringify({ message: "메일 전송이 완료되었습니다." }),
                { status: 200 }
            );
        })
        .catch((error) => {
            console.error(error);
            return new Response(
                JSON.stringify({ message: "메일 전송이 실패하였습니다." }),
                { status: 500 }
            );
        });
}
