import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Post = {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    featured: boolean;
};

export type PostDetail = Post & {
    content: string;
    prevPost: Post | null;
    nextPost: Post | null;
};

export async function getFeaturedPosts(): Promise<Post[]> {
    return getAllPosts() //
        .then((posts) => posts.filter((post) => post.featured));
}

export async function getNoneFeaturedPosts(): Promise<Post[]> {
    return getAllPosts() //
        .then((posts) => posts.filter((post) => !post.featured));
}

export const getAllPosts = cache(async () => {
    const dataPath = path.join(process.cwd(), "data", "posts.json");
    return readFile(dataPath, "utf-8")
        .then<Post[]>(JSON.parse)
        .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

// export async function getAllPosts(): Promise<Post[]> {}

export async function getPostDetail(filePath: string): Promise<PostDetail> {
    const dataPath = path.join(
        process.cwd(),
        "data",
        "posts",
        `${filePath}.md`
    );
    const posts = await getAllPosts();
    const post = posts.find((post) => post.path === filePath);

    if (!post) throw new Error(`${filePath} file not found`);
    const postDetail = await readFile(dataPath, "utf-8");

    const index = posts.indexOf(post);
    const prevPost = index > 0 ? posts[index - 1] : null;
    const nextPost = index < posts.length - 1 ? posts[index + 1] : null;

    return {
        ...post,
        content: postDetail,
        prevPost,
        nextPost,
    };
}
