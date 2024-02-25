import AdjacentPostCard from "@/components/AdjacentPostCard";
import PostContent from "@/components/PostContent";
import { getPostDetail } from "@/service/posts";
import Image from "next/image";

type Props = {
    params: {
        slug: string;
    };
};

export default async function PostPage({ params: { slug } }: Props) {
    const post = await getPostDetail(slug);
    const { path, title, prevPost, nextPost } = post;
    return (
        <article className="m-4 bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
            <Image
                src={`/images/posts/${path}.png`}
                alt={title}
                width={720}
                height={280}
                className="w-full h-1/5 max-h-[500px]"
            />
            <PostContent post={post} />
            <section className="flex w-full">
                {prevPost && <AdjacentPostCard post={prevPost} type="prev" />}
                {nextPost && <AdjacentPostCard post={nextPost} type="next" />}
            </section>
        </article>
    );
}
