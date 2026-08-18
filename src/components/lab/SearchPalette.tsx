'use client'

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CornerDownLeft, Search } from "lucide-react";

export type SearchEntry = {
  group: string;
  title: string;
  sub: string;
  href: string;
};

const MAX_RESULTS = 12;

const SearchPalette = ({
  entries,
  open,
  onClose,
}: {
  entries: SearchEntry[];
  open: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries.slice(0, MAX_RESULTS);
    return entries
      .filter(
        (entry) =>
          entry.title.toLowerCase().includes(q) ||
          entry.sub.toLowerCase().includes(q)
      )
      .slice(0, MAX_RESULTS);
  }, [entries, query]);

  useEffect(() => {
    if (open) {
      const previous = document.activeElement as HTMLElement | null;
      setQuery("");
      setSelected(0);
      /* Wait a tick so the input exists before focusing */
      requestAnimationFrame(() => inputRef.current?.focus());
      return () => previous?.focus();
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  if (!open) return null;

  const go = (href: string) => {
    onClose();
    router.push(href);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") onClose();
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelected((index) => Math.min(index + 1, results.length - 1));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelected((index) => Math.max(index - 1, 0));
    }
    if (event.key === "Enter" && results[selected]) {
      go(results[selected].href);
    }
  };

  let lastGroup = "";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 p-4 pt-[12vh]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div
        className="cp-card mx-auto max-w-lg overflow-hidden"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <div className="flex items-center gap-3 border-b border-cp-line px-4">
          <Search className="size-4 shrink-0 text-cp-faint" strokeWidth={1.75} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search works, services, tools…"
            autoComplete="off"
            className="w-full bg-transparent py-3.5 text-sm text-cp-ink placeholder:text-cp-faint focus:outline-none"
          />
          <kbd className="shrink-0 rounded border border-cp-line px-1.5 py-0.5 text-[10px] text-cp-faint">
            ESC
          </kbd>
        </div>

        <ul className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-cp-faint">
              No results for “{query}”.
            </li>
          )}
          {results.map((entry, index) => {
            const showGroup = entry.group !== lastGroup;
            lastGroup = entry.group;
            return (
              <li key={entry.href}>
                {showGroup && (
                  <p className="px-3 pt-3 pb-1 text-[11px] font-semibold tracking-wide text-cp-faint uppercase">
                    {entry.group}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => go(entry.href)}
                  onMouseEnter={() => setSelected(index)}
                  className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm ${
                    index === selected
                      ? "bg-cp-hover text-cp-ink"
                      : "text-cp-mute"
                  }`}
                >
                  <span className="truncate">{entry.title}</span>
                  <span className="flex shrink-0 items-center gap-2 text-xs text-cp-faint">
                    {entry.sub}
                    {index === selected && (
                      <CornerDownLeft className="size-3" strokeWidth={1.75} />
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchPalette;
