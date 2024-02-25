import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import AdjacentContent from "./AdjacentContent";

type Props = {
    post: Post;
    type: "prev" | "next";
};

export default function AdjacentPostCard({ post, type }: Props) {
    const { path, title } = post;
    return (
        <Link href={`/posts/${path}`} className="w-full relative group">
            <Image
                src={`/images/posts/${path}.png`}
                alt={title}
                width={300}
                height={150}
                className="w-full max-h-52"
            />
            <AdjacentContent post={post} type={type} />
        </Link>
    );
}
