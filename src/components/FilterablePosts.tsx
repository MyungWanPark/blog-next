"use client";

import { Post } from "@/service/posts";
import PostsGrid from "./PostsGrid";
import { useState } from "react";
import Categories from "./Categories";

type Props = {
    posts: Post[];
    categories: string[];
};

const All_Posts = "All Posts";

export default function FilterablePosts({ posts, categories }: Props) {
    const [selected, setSelected] = useState(All_Posts);
    const filteredPosts =
        selected === All_Posts
            ? posts
            : posts.filter((post) => post.category === selected);
    return (
        <section className="flex text-center m-4">
            <PostsGrid posts={filteredPosts} />
            <Categories
                categories={[All_Posts, ...categories]}
                onClick={setSelected}
                selected={selected}
            />
        </section>
    );
}
