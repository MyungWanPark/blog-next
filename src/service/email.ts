import nodemailer from "nodemailer";

export type Email = {
    emailFrom: string;
    subject: string;
    message: string;
};

const transporter = nodemailer.createTransport({
    host: "smtp.naver.com",
    port: 587,
    // secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS,
    },
});

export async function sendEmail({ emailFrom, subject, message }: Email) {
    const mailData = {
        from: process.env.AUTH_USER, // sender address
        to: process.env.AUTH_USER,
        subject: `[Blog] ${subject}`,
        text: "Hello world?", // plain text body
        html: `
        ${message}
        <br/>
        from ${emailFrom}
        `,
    };
    return transporter.sendMail(mailData);
}
