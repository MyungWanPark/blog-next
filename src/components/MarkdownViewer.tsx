import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

export default function MarkdownViewer({ content }: { content: string }) {
    return (
        <Markdown
            className="prose lg:prose-xl max-w-none p-2"
            remarkPlugins={[remarkGfm]}
            components={{
                code(props) {
                    const { children, className, node, ref, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                        <SyntaxHighlighter
                            {...rest}
                            style={materialDark}
                            ref={null}
                            PreTag="div"
                            language={match[1]}
                        >
                            {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                    ) : (
                        <code {...rest} className={className}>
                            {children}
                        </code>
                    );
                },
                img: (image) => (
                    <Image
                        src={image.src || ""}
                        alt={image.alt || ""}
                        width={500}
                        height={320}
                        className="w-full max-h-60 object-cover"
                    />
                ),
            }}
        >
            {content}
        </Markdown>
    );
}
