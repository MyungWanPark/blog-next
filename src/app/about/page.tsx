import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";

const contents = [
    {
        title: "Who am I?",
        contents: [
            "개발을 좋아하는 풀스택 개발자",
            "오래 머물 수 있는 웹사이트를 만들고 싶다.",
        ],
    },
    {
        title: "Career",
        contents: ["쿠글러 (-Now)", "아맛존 (-2021)", "메이스북 (-2019)"],
    },
    {
        title: "SKILLS?",
        contents: [
            "React, Next,js, Node.js",
            "TS, Python, Java",
            "Git, MySQL, MongoDB",
        ],
    },
];

export default function AboutPage() {
    return (
        <>
            <Hero />
            <div className="m-5 overflow-hidden bg-gray-200 text-center rounded-xl shadow-lg">
                {contents.map((content) => (
                    <AboutSection
                        contents={content.contents}
                        title={content.title}
                        key={content.title}
                    />
                ))}
            </div>
        </>
    );
}
