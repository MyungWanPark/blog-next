import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type Props = {
    post: Post;
};

export default function PostCard({
    post: { title, description, date, category, path },
}: Props) {
    return (
        <Link href={`/posts/${path}`}>
            <article className="rounded-md overflow-hidden shadow-md hover:shadow-2xl">
                <Image
                    src={`/images/posts/${path}.png`}
                    alt={title}
                    width={300}
                    height={200}
                    className="w-full"
                />
                <div className="flex flex-col items-center p-4">
                    <time className="self-end text-sm text-gray-400">
                        {date.toString()}
                    </time>
                    <h3 className="font-bold text-md">{title}</h3>
                    <p className="w-full truncate">{description}</p>
                    <span className="bg-green-300 text-sm px-2 rounded-md">
                        {category}
                    </span>
                </div>
            </article>
        </Link>
    );
}
