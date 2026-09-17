import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Blogs pagination"
      className="@container flex justify-center items-center gap-x-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="text-[clamp(.85rem,0.5rem+1cqi,1rem)] font-semibold hover:text-blue transition-colors duration-175 ease-in-out disabled:opacity-30 disabled:pointer-events-none flex items-center">
        <span className="inline-block w-[1.5em] aspect-auto">
          <RiArrowLeftSLine className="w-full h-full" />
        </span>{" "}
        Prev
      </button>

      <span className="text-[clamp(.85rem,0.5rem+1cqi,1rem)] flex items-center justify-center text-center">{`${currentPage} of ${pages.length}`}</span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="text-[clamp(.85rem,0.5rem+1cqi,1rem)] font-semibold hover:text-blue transition-colors duration-175 ease-in-out disabled:opacity-30 disabled:pointer-events-none flex items-center">
        Next{" "}
        <span className="inline-block w-[1.5em] aspect-auto">
          <RiArrowRightSLine className="w-full h-full" />
        </span>
      </button>
    </nav>
  );
}
