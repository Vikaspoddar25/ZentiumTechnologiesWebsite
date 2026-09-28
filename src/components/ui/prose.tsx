import type { Block } from "@/content/posts";

export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="mt-6 text-2xl font-semibold tracking-tight text-ink-50 sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="mt-4 text-lg font-medium text-ink-50 sm:text-xl">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={index} className="text-[1.05rem] leading-[1.75] text-ink-200">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={index} className="flex flex-col gap-3 pl-1">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[1.02rem] leading-[1.7] text-ink-200">
                    <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-400" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="flex flex-col gap-3">
                {block.items.map((item, itemIndex) => (
                  <li key={item} className="flex gap-3.5 text-[1.02rem] leading-[1.7] text-ink-200">
                    <span className="mt-0.5 font-mono text-sm text-accent-300">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="my-2 border-l-2 border-brand-500/60 pl-6 text-[1.1rem] italic leading-relaxed text-ink-100"
              >
                {block.text}
              </blockquote>
            );
          case "code":
            return (
              <pre
                key={index}
                className="overflow-x-auto rounded-2xl border border-white/8 bg-ink-900 p-5 text-[0.82rem] leading-relaxed"
              >
                <code className="font-mono text-ink-200">{block.code}</code>
              </pre>
            );
        }
      })}
    </div>
  );
}
