import { readFile } from "fs/promises";
import path from "path";

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
};

export async function getFeaturedPosts(): Promise<Post[]> {
    return getAllPosts() //
        .then((posts) => posts.filter((post) => post.featured));
}

export async function getNoneFeaturedPosts(): Promise<Post[]> {
    return getAllPosts() //
        .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
    const dataPath = path.join(process.cwd(), "data", "posts.json");
    return readFile(dataPath, "utf-8")
        .then<Post[]>(JSON.parse)
        .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostDetail(filePath: string): Promise<PostDetail> {
    const dataPath = path.join(
        process.cwd(),
        "data",
        "posts",
        `${filePath}.md`
    );
    const metaData = await getAllPosts().then((posts) =>
        posts.find((post) => post.path === filePath)
    );

    if (!metaData) throw new Error(`${filePath} file not found`);
    const postDetail = await readFile(dataPath, "utf-8");

    return {
        ...metaData,
        content: postDetail,
    };
}
