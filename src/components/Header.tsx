import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between p-4">
            <Link href="/" className="text-2xl font-bold">
                Wan's Blog
            </Link>
            <nav className="flex gap-3">
                <Link href="/">home</Link>
                <Link href="/about">about</Link>
                <Link href="/posts">posts</Link>
                <Link href="/contact">contact</Link>
            </nav>
        </header>
    );
}
