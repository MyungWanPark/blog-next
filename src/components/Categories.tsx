type Props = {
    categories: string[];
    selected: string;
    onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
    return (
        <section className="p-4">
            <h2 className="font-bold text-lg border-b border-sky-500">
                Category
            </h2>
            <ul className="">
                {categories.map((category) => (
                    <li
                        key={category}
                        className={`cursor-pointer hover:text-sky-500 ${
                            category === selected && "text-sky-500"
                        }`}
                        onClick={() => onClick(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </section>
    );
}
