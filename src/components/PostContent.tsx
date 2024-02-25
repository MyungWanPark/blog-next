import MarkdownViewer from "@/components/MarkdownViewer";
import { PostDetail } from "@/service/posts";
import { CiCalendarDate } from "react-icons/ci";

export default function PostContent({ post }: { post: PostDetail }) {
    const { title, description, date, content } = post;

    return (
        <>
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
        </>
    );
}
