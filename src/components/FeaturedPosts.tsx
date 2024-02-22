import { getFeaturedPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
    const posts = await getFeaturedPosts();
    return (
        <>
            <h1 className="font-bold text-lg">Featured Posts</h1>
            <PostsGrid posts={posts} />
        </>
    );
}
