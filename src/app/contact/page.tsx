import ContactForm from "@/components/ContactForm";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const LINKS = [
    {
        icon: <AiFillGithub />,
        target: "https://github.com",
    },
    {
        icon: <AiFillLinkedin />,
        target: "https://linkedin.com/",
    },
    {
        icon: <AiFillYoutube />,
        target: "https://youtube.com",
    },
];

export default function ContactPage() {
    return (
        <section className="mt-4 flex flex-col items-center">
            <h2 className="text-2xl font-bold">Contact me!</h2>
            <p>info@myung.com</p>
            <ul className="flex justify-center gap-4">
                {LINKS.map((link, index) => (
                    <a
                        href={link.target}
                        target="_blank"
                        key={index}
                        className="text-5xl hover:text-yellow-300"
                    >
                        {link.icon}
                    </a>
                ))}
            </ul>
            <h2 className="text-2xl font-semibold">Or send me an Email</h2>
            <ContactForm />
        </section>
    );
}
