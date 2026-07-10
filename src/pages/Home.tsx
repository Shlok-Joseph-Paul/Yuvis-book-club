import { ArrowRight, BookOpen, Camera, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { books } from '../data/books';
import { siteConfig } from '../data/siteConfig';
import { byRecentDate, formatMonthYear } from '../lib/utils';
import BookCover from '../components/BookCover';

const recentBook = byRecentDate(books)[0];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[72vh] overflow-hidden bg-ink text-vellum">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/hero-book-club.png"
          alt="Cozy book club table with books, mugs, notebooks, and warm lamplight."
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,32,29,0.86),rgba(35,32,29,0.52),rgba(35,32,29,0.12))]" />

        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-vellum/20 bg-vellum/10 px-4 py-2 text-sm font-semibold text-vellum/85 backdrop-blur">
              <Heart size={16} aria-hidden="true" />
              A private literary circle
            </p>
            <h1 className="font-display text-5xl leading-[1.02] text-vellum sm:text-7xl lg:text-8xl">
              {siteConfig.bookClubName}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-vellum/85 sm:text-xl">
              {siteConfig.welcomeMessage}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="hero-button bg-burgundy text-vellum hover:bg-forest" to="/books">
                <BookOpen size={18} aria-hidden="true" />
                Books
              </Link>
              <Link className="hero-button bg-vellum text-espresso hover:bg-marigold" to="/photos">
                <Camera size={18} aria-hidden="true" />
                Photos
              </Link>
              <Link
                className="hero-button border border-vellum/35 bg-vellum/10 text-vellum backdrop-blur hover:bg-vellum hover:text-espresso"
                to="/about"
              >
                <Users size={18} aria-hidden="true" />
                About
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-vellum">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-burgundy">
              Most recent read
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-espresso">
              The latest chapter in the club archive.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-espresso/70">
              Each book becomes part of the club's shared memory: the notes, the snacks, the
              arguments, and the one line someone still brings up weeks later.
            </p>
          </div>

          {recentBook ? (
            <Link
              to={`/books/${recentBook.id}`}
              className="group grid gap-5 rounded-2xl border border-espresso/10 bg-parchment p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift sm:grid-cols-[140px_1fr]"
            >
              <BookCover book={recentBook} className="w-full rounded-xl" />
              <span className="flex flex-col justify-center">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-forest">
                  {formatMonthYear(recentBook.dateRead)}
                </span>
                <span className="mt-2 font-display text-3xl leading-tight text-espresso group-hover:text-burgundy">
                  {recentBook.title}
                </span>
                <span className="mt-1 text-sm font-semibold text-espresso/65">
                  by {recentBook.author}
                </span>
                <span className="mt-4 leading-7 text-espresso/70">
                  {recentBook.shortDescription}
                </span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-burgundy">
                  Read the notes
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </span>
            </Link>
          ) : (
            <div className="rounded-2xl border border-dashed border-espresso/25 bg-parchment p-8">
              <h2 className="font-display text-2xl text-espresso">No books added yet</h2>
              <p className="mt-2 text-espresso/70">
                Add a book in src/data/books.ts to feature it here.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            {
              title: 'A living bookshelf',
              text: 'Browse the club archive by title, author, date, or mood.',
              to: '/books',
            },
            {
              title: 'Meeting memories',
              text: 'Keep snapshots, captions, locations, and book pairings together.',
              to: '/photos',
            },
            {
              title: 'The club story',
              text: 'Save the origin story, rhythms, traditions, and member notes.',
              to: '/about',
            },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="rounded-2xl border border-espresso/10 bg-vellum p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <h2 className="font-display text-2xl text-espresso">{item.title}</h2>
              <p className="mt-3 leading-7 text-espresso/70">{item.text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-burgundy">
                Visit
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
