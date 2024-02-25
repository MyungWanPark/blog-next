import Image from "next/image";
import profileImage from "../../public/images/posts/review-2021.png";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="text-center mb-3">
            <Image
                src={profileImage}
                alt="profile image"
                width={200}
                height={200}
                priority
                className="mx-auto rounded-full aspect-square"
            />
            <h2 className="text-2xl font-bold p-1">I'm Myungwan</h2>
            <h3 className="text-xl font-semibold">Full-Stack developer</h3>
            <p>유용한 기능을 개발하는 사람</p>
            <Link href="/contact">
                <button className="bg-yellow-500 py-1 px-4 rounded-lg font-bold mt-2">
                    Contact me
                </button>
            </Link>
        </section>
    );
}
