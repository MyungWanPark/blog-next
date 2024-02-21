import { getAllPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
    const posts = await getAllPosts();
    return (
        <>
            <h1>Featured Posts</h1>
            <PostsGrid posts={posts} />
        </>
    );
}
