import type { HighlightText } from "../types";

interface Props extends HighlightText {
  text: string;
}

export function HighlightedText({
  text,
  highlight,
  highlightClassName,
}: Props) {
  if (!highlight) return <>{text}</>;

  const index = text.indexOf(highlight);
  if (index === -1) return <>{text}</>;

  const before = text.slice(0, index);
  const match = text.slice(index, index + highlight.length);
  const after = text.slice(index + highlight.length);

  return (
    <>
      {before}
      <span className={highlightClassName}>{match}</span>
      {after}
    </>
  );
}
