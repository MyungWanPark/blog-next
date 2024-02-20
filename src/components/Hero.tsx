import Image from "next/image";
import profileImage from "../../public/images/posts/review-2021.png";
import Link from "next/link";

export default function Hero() {
    return (
        <section>
            <Image
                src={profileImage}
                alt="profile image"
                width={250}
                height={250}
                priority
            />
            <h2>I'm Myungwan</h2>
            <h3>Full-Stack developer</h3>
            <p>유용한 기능을 개발하는 사람</p>
            <Link href="/contact">
                <button>Contact me</button>
            </Link>
        </section>
    );
}
