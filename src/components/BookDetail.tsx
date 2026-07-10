import { ArrowLeft, ExternalLink, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatMonthYear } from '../lib/utils';
import type { Book } from '../types';
import BookCover from './BookCover';

type BookDetailProps = {
  book: Book;
};

export default function BookDetail({ book }: BookDetailProps) {
  return (
    <article className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[360px_1fr] lg:px-8">
      <aside>
        <Link
          to="/books"
          className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-espresso/70 transition hover:text-burgundy"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to books
        </Link>
        <BookCover book={book} className="w-full rounded-2xl bg-vellum shadow-lift" />
      </aside>

      <div className="min-w-0">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-burgundy">
          {formatMonthYear(book.dateRead)}
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-espresso sm:text-6xl">
          {book.title}
        </h1>
        <p className="mt-3 text-xl font-semibold text-forest">by {book.author}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {book.genre.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-espresso/80">
          {book.shortDescription}
        </p>

        <section className="mt-8 rounded-2xl border border-espresso/10 bg-vellum p-6 shadow-soft">
          <h2 className="font-display text-2xl text-espresso">Club reflection</h2>
          <p className="mt-4 leading-8 text-espresso/75">{book.clubNotes}</p>
        </section>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {book.memorableQuote ? (
            <section className="rounded-2xl border border-burgundy/15 bg-burgundy/10 p-5">
              <Quote size={22} className="text-burgundy" aria-hidden="true" />
              <h2 className="mt-3 font-display text-xl text-espresso">Memorable quote</h2>
              <p className="mt-3 leading-7 text-espresso/75">"{book.memorableQuote}"</p>
            </section>
          ) : null}

          {book.meetingMemory ? (
            <section className="rounded-2xl border border-forest/15 bg-forest/10 p-5">
              <h2 className="font-display text-xl text-espresso">Meeting memory</h2>
              <p className="mt-3 leading-7 text-espresso/75">{book.meetingMemory}</p>
            </section>
          ) : null}
        </div>

        {book.goodreadsUrl ? (
          <a
            href={book.goodreadsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-3 text-sm font-bold text-vellum transition hover:bg-burgundy"
          >
            Open on Goodreads
            <ExternalLink size={17} aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
