import type { HighlightSegment } from "../types";

interface Props {
  text: string;
  highlights?: HighlightSegment[];
}

export function MultiHighlightedText({ text, highlights }: Props) {
  if (!highlights || highlights.length === 0) return <>{text}</>;

  const segments: { text: string; style?: string }[] = [];
  let searchStartIndex = 0;

  for (const { text: highlight, style } of highlights) {
    const index = text.indexOf(highlight, searchStartIndex);
    if (index === -1) continue;

    if (index > searchStartIndex) {
      segments.push({ text: text.slice(searchStartIndex, index) });
    }
    segments.push({ text: highlight, style });
    searchStartIndex = index + highlight.length;
  }

  if (searchStartIndex < text.length) {
    segments.push({ text: text.slice(searchStartIndex) });
  }

  return (
    <>
      {segments.map((segment, index) =>
        segment.style ? (
          <span key={index} className={segment.style}>
            {segment.text}
          </span>
        ) : (
          segment.text
        ),
      )}
    </>
  );
}
