import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostDetail } from "@/service/posts";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";

type Props = {
    params: {
        slug: string;
    };
};

export default async function PostPage({ params: { slug } }: Props) {
    const { title, description, date, path, content } = await getPostDetail(
        slug
    );
    return (
        <article className="m-4 bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
            <Image
                src={`/images/posts/${path}.png`}
                alt={title}
                width={720}
                height={280}
                className="w-full h-1/5 max-h-[500px]"
            />
            <section className="flex flex-col">
                <div className="flex items-center self-end text-sky-500 font-bold mt-1">
                    <CiCalendarDate className="mr-1 text-2xl" />
                    <p>{date.toString()}</p>
                </div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-xl font-semibold">{description}</p>
                <div className="w-56 my-3 border-b border-sky-500"></div>
            </section>
            <MarkdownViewer content={content} />
        </article>
    );
}
