import { ArrowRight, ExternalLink, Plus } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Book } from '../types';
import { formatMonthYear } from '../lib/utils';
import BookCover from './BookCover';

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-espresso/10 bg-vellum shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="grid gap-5 p-5 sm:grid-cols-[120px_1fr]">
        <Link to={`/books/${book.id}`} className="block overflow-hidden rounded-xl bg-parchment">
          <BookCover
            book={book}
            className="h-full w-full transition duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="flex min-w-0 flex-col">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burgundy">
            {formatMonthYear(book.dateRead)}
          </p>
          <h2 className="mt-2 font-display text-2xl leading-tight text-espresso">
            <Link to={`/books/${book.id}`} className="hover:text-burgundy">
              {book.title}
            </Link>
          </h2>
          <p className="mt-1 text-sm font-semibold text-forest">by {book.author}</p>
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-espresso/70">
            {book.shortDescription}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {book.genre.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-espresso/10 px-5 py-4">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-semibold text-vellum transition hover:bg-burgundy"
            onClick={() => setIsExpanded((value) => !value)}
            aria-expanded={isExpanded}
          >
            <Plus size={16} aria-hidden="true" />
            {isExpanded ? 'Hide notes' : 'Quick notes'}
          </button>
          <Link
            to={`/books/${book.id}`}
            className="inline-flex items-center gap-2 rounded-full border border-espresso/15 px-4 py-2 text-sm font-semibold text-espresso transition hover:bg-espresso hover:text-vellum"
          >
            Details
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          {book.goodreadsUrl ? (
            <a
              href={book.goodreadsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-burgundy transition hover:bg-burgundy/10"
            >
              Goodreads
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          ) : null}
        </div>

        {isExpanded ? (
          <div className="mt-4 rounded-xl bg-parchment p-4 text-sm leading-6 text-espresso/75">
            <p>{book.clubNotes}</p>
            {book.meetingMemory ? (
              <p className="mt-3 font-semibold text-forest">Meeting memory: {book.meetingMemory}</p>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
