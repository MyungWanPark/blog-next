import * as yup from "yup";

const emailSchema = yup.object({
    email: yup.string().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
});
export async function POST(req: Request) {
    if (!emailSchema.isValidSync(req.body)) {
        return new Response("유효하지 않은 포맷", { status: 400 });
    }

    const { email, subject, message } = req.body;
}
