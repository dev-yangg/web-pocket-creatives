import { cn } from "../../../lib/utils";

interface Props {
  filters: string[];
  selectedCategory: string;
  onClick: (category: string) => void;
}
export default function FilterTabs({
  filters,
  selectedCategory,
  onClick,
}: Props) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
      {filters.map((filter) => (
        <li key={filter} className="uppercase">
          <button
            onClick={() => onClick(filter)}
            className={cn(
              "font-semibold hover:text-blue transition-colors duration-175 ease-in-out capitalize",
              {
                "text-yellow hover:text-yellow": filter === selectedCategory,
              },
            )}>
            {filter}
          </button>
        </li>
      ))}
    </ul>
  );
}
