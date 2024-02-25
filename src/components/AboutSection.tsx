type Props = {
    title: string;
    contents: string[];
};

export default function AboutSection({ title, contents }: Props) {
    return (
        <section className="py-2 ">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <ul>
                {contents.map((content) => (
                    <li key={content}>{content}</li>
                ))}
            </ul>
        </section>
    );
}
