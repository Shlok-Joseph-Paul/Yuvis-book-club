import type { CSSProperties } from 'react';
import { cn } from '../lib/utils';
import type { Book } from '../types';

type BookCoverProps = {
  book: Book;
  className?: string;
};

const palettes = [
  { background: '#2d4059', accent: '#d29a45', text: '#fffaf1' },
  { background: '#8f2f45', accent: '#f7f0e3', text: '#fffaf1' },
  { background: '#245244', accent: '#d29a45', text: '#fffaf1' },
  { background: '#4a3329', accent: '#b8c3a5', text: '#fffaf1' },
  { background: '#fffaf1', accent: '#8f2f45', text: '#23201d' },
  { background: '#b8c3a5', accent: '#2d4059', text: '#23201d' },
];

function paletteFor(id: string) {
  const hash = [...id].reduce((sum, character) => sum + character.charCodeAt(0), 0);

  return palettes[hash % palettes.length];
}

export default function BookCover({ book, className }: BookCoverProps) {
  if (book.coverImage) {
    return (
      <img
        className={cn('aspect-[3/4] object-cover', className)}
        src={book.coverImage}
        alt={`${book.title} cover`}
      />
    );
  }

  const palette = paletteFor(book.id);
  const style = {
    '--cover-bg': palette.background,
    '--cover-accent': palette.accent,
    '--cover-text': palette.text,
  } as CSSProperties;

  return (
    <div
      className={cn(
        'relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-xl border border-espresso/10 p-5 shadow-inner',
        className,
      )}
      style={{ ...style, backgroundColor: 'var(--cover-bg)', color: 'var(--cover-text)' }}
      role="img"
      aria-label={`${book.title} placeholder cover by ${book.author}`}
    >
      <span className="absolute -right-14 -top-12 size-36 rounded-full bg-[var(--cover-accent)] opacity-80" />
      <span className="absolute -bottom-16 left-6 size-44 rounded-full border-[18px] border-[var(--cover-accent)] opacity-35" />
      <span className="relative text-xs font-bold uppercase tracking-[0.22em] opacity-80">
        Yuvi's Book Club
      </span>
      <span className="relative">
        <span className="block break-words font-display text-[clamp(1.05rem,2.4vw,2rem)] font-bold leading-[1.02]">
          {book.title}
        </span>
        <span className="mt-4 block text-xs font-bold uppercase tracking-[0.18em] opacity-80">
          {book.author}
        </span>
      </span>
      <span className="relative h-1.5 w-16 rounded-full bg-[var(--cover-accent)]" />
    </div>
  );
}
