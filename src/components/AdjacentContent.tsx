import { Post } from "@/service/posts";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
    post: Post;
    type: "prev" | "next";
};

const ICONS_CLASS = "text-yellow-400 text-xl m-4 group-hover:text-3xl";

export default function AdjacentContent({
    post: { description, title },
    type,
}: Props) {
    return (
        <div className="absolute top-1/2 left-1/2 w-full text-white flex items-center justify-around -translate-x-1/2 -translate-y-1/2">
            {type === "prev" && <FaArrowLeft className={`${ICONS_CLASS}`} />}
            <div className="w-2/3">
                <h2 className="text-2xl">{title}</h2>
                <p className="text-xl">{description}</p>
            </div>
            {type === "next" && <FaArrowRight className={`${ICONS_CLASS}`} />}
        </div>
    );
}
