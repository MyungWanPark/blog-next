import { getNoneFeaturedPosts } from "@/service/posts";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";

export default async function CarouselPosts() {
    const posts = await getNoneFeaturedPosts();

    return (
        <section className="my-4">
            <h1 className="text-lg font-bold my-2">You May Like</h1>
            <MultiCarousel>
                {posts.map((post) => (
                    <PostCard post={post} key={post.path} />
                ))}
            </MultiCarousel>
        </section>
    );
}
