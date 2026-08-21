import { useEffect, useRef } from "react";

interface ReviewProps {
  id: number;
  author: string;
  quote: string;
}

const reviewList: ReviewProps[] = [
  {
    id: 1,
    author: "Marcus Ramtohul",
    quote:
      "I've shot with Pocket Creatives on a number of occasions as a model and actor. Always delivering amazing results for clients - gorgeous images and a fun and creative environment. I am constantly looking forward to the next opportunity to shoot with...",
  },
  {
    id: 2,
    author: "Klara Niklewicz",
    quote:
      "Really enjoyed working with Pocket Creatives on a video campaign & webinar. Delivery was quick and to high standard. Thank you!",
  },
  {
    id: 3,
    author: "Michelle Vellacott",
    quote:
      "Pocket Creatives are a great, friendly production company and we love having them use our studios at Tower Bridge Studios. Always a wonderful atmosphere when they are here. Pre-production for the shoot is always very smooth and efficient. A great...",
  },
  {
    id: 4,
    author: "Winnie Asawakanjanakit",
    quote:
      "I had a such a great time working with Steven and his team! They were very professional and they created a safe space for me which made my job as a model on set easier and more enjoyable. Would definitely love to work with them again. :)",
  },
  {
    id: 5,
    author: "Crime And Comedy Theatre Corporation",
    quote:
      "Steve & Charlie at Pocket Creatives were fantastic, first class. Our project involved an older actor and not only did they conduct the pre-shoot with personable, fact-finding efficiency, but they were very considerate, accommodating olved an older actor and not only did they conduct the pre-shoot with personable, fact-finding efficiency, but they were very considerate, accommodating ",
  },
  {
    id: 6,
    author: "John Bond",
    quote:
      "Very professional company to deal with and delighted with the product videos received. Always a pleasure to dela with Steven and his team.",
  },
];

const STEP_DURATION = 600; // ms — how long one card's scroll animation takes
const HOLD_DURATION = 2000; // ms — how long it rests on each card before scrolling again
const PAUSE_POLL_INTERVAL = 200; // ms — how often to check "are we still paused" while paused

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export default function ReviewsCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const stepWidthRef = useRef(0); // one card's width + gap, in px
  const halfWidthRef = useRef(0); // width of one full (non-duplicated) list, in px
  const currentIndexRef = useRef(0); // which "step" we're currently sitting on

  const timeoutRef = useRef<number | undefined>(undefined);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const track = itemRefs.current[0]?.parentElement as HTMLUListElement | null;
    if (!track) return;

    const measure = () => {
      const a = itemRefs.current[0];
      const b = itemRefs.current[1];
      const firstOfSecondCopy = itemRefs.current[reviewList.length]; // start of the duplicate list

      if (a && b) {
        stepWidthRef.current = b.offsetLeft - a.offsetLeft;
      }
      if (a && firstOfSecondCopy) {
        // exact distance from copy-1's first card to copy-2's first card
        halfWidthRef.current = firstOfSecondCopy.offsetLeft - a.offsetLeft;
      }
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(track);

    // animate scrollLeft from `from` to `from + distance` over `duration`, then call onDone
    const animateStep = (
      from: number,
      distance: number,
      duration: number,
      onDone: () => void,
    ) => {
      const start = performance.now();
      const el = containerRef.current;

      const frame = (now: number) => {
        if (!el) return;
        const elapsed = now - start;
        const t = Math.min(elapsed / duration, 1);
        el.scrollLeft = from + distance * easeInOutQuad(t);

        if (t < 1) {
          rafRef.current = requestAnimationFrame(frame);
        } else {
          onDone();
        }
      };
      rafRef.current = requestAnimationFrame(frame);
    };

    const runLoop = () => {
      const el = containerRef.current;
      if (!el || stepWidthRef.current === 0) {
        timeoutRef.current = window.setTimeout(runLoop, PAUSE_POLL_INTERVAL);
        return;
      }

      const from = el.scrollLeft;
      const distance = stepWidthRef.current;

      animateStep(from, distance, STEP_DURATION, () => {
        currentIndexRef.current += 1;

        // once stepped past the original list length, we're sitting on
        // the duplicate's first card — which looks identical to the real first card, so jump back instantly and reset the counter

        if (currentIndexRef.current >= reviewList.length) {
          el.scrollLeft -= halfWidthRef.current;
          currentIndexRef.current -= reviewList.length;
        }

        timeoutRef.current = window.setTimeout(runLoop, HOLD_DURATION);
      });
    };

    runLoop();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <ul
        style={
          {
            "--col-gap": "0.75rem",
          } as React.CSSProperties
        }
        className="flex gap-x-3 scrollbar-none w-max">
        {[...reviewList, ...reviewList].map((review, index) => (
          <li
            key={`${review.id}-${index}`}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="shrink-0 w-[min(340px,100%)]">
            <ReviewCard
              id={review.id}
              quote={review.quote}
              author={review.author}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReviewCard({ author, quote }: ReviewProps) {
  return (
    <article
      style={
        {
          "--inner-round": "1rem",
          "--pad-x": "calc(var(--spacing) * 2)",
          "--pad-bottom": "var(--spacing)",
        } as React.CSSProperties
      }
      className="bg-gray flex flex-col w-full px-(--pad-x) pt-(--pad-x) pb-(--pad-bottom) h-full rounded-t-[calc(var(--inner-round)+var(--pad-x))] rounded-b-[calc(var(--inner-round)+var(--pad-bottom))]">
      <blockquote className="bg-white grow p-3 rounded-(--inner-round)">
        <p className="line-clamp-7">{quote}</p>
      </blockquote>
      <footer className="truncate pt-2 pb-0.5 px-(--pad-x) text-grayblue font-bold">
        {author}
      </footer>
    </article>
  );
}
