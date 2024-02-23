type Props = {
    categories: string[];
    selected: string;
    onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
    return (
        <ul>
            {categories.map((category) => (
                <li key={category} onClick={() => onClick(category)}>
                    {category}
                </li>
            ))}
        </ul>
    );
}
