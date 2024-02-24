import { getPostDetail } from "@/service/posts";

type Props = {
    params: {
        slug: string;
    };
};

export default async function PostPage({ params: { slug } }: Props) {
    const post = await getPostDetail(slug);
    return (
        <>
            <h1>{post.title}</h1>
            <pre>{post.content}</pre>
        </>
    );
}
