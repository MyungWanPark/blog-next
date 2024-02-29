import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All posts",
    description: "Posts about Full-stack developer",
};

export default async function PostsPage() {
    const posts = await getAllPosts();
    const categories = [...new Set(posts.map((post) => post.category))];
    return <FilterablePosts posts={posts} categories={categories} />;
}
