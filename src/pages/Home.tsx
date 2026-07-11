import { ArrowRight, BookOpen, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { books } from '../data/books';
import { siteConfig } from '../data/siteConfig';
import { byRecentDate, formatMonthYear } from '../lib/utils';

const recentBooks = byRecentDate(books);
const recentBook = recentBooks[0];

const collageItems = [
  {
    to: '/photos',
    imageUrl: '/images/photos/midnight-library-table.jpg',
    alt: 'A Midnight Library meeting table with books, drinks, notes, desserts, and a candle.',
    className: 'home-collage-large',
  },
  {
    to: '/books/tell-me-everything',
    imageUrl: '/images/covers/tell-me-everything.jpg',
    alt: 'Tell Me Everything book cover.',
    className: 'home-collage-cover',
  },
  {
    to: '/books/tomorrow-and-tomorrow-and-tomorrow',
    imageUrl: '/images/covers/tomorrow-and-tomorrow-and-tomorrow.jpg',
    alt: 'Tomorrow, and Tomorrow, and Tomorrow book cover.',
    className: 'home-collage-cover',
  },
  {
    to: '/photos',
    imageUrl: '/images/photos/book-club-extra-02.jpg',
    alt: 'Book club table spread with cookies, drinks, and books.',
    className: 'home-collage-tall',
  },
  {
    to: '/books/martyr',
    imageUrl: '/images/covers/martyr.jpg',
    alt: 'Martyr! book cover.',
    className: 'home-collage-spine',
  },
  {
    to: '/books/orbital',
    imageUrl: '/images/covers/orbital.jpg',
    alt: 'Orbital book cover.',
    className: 'home-collage-cover',
  },
  {
    to: '/photos',
    imageUrl: '/images/photos/wedding-people-sidewalk.jpg',
    alt: 'Book club members gathered around an outdoor table at night.',
    className: 'home-collage-wide',
  },
  {
    to: '/books/the-heaven-and-earth-grocery-store',
    imageUrl: '/images/covers/the-heaven-and-earth-grocery-store.jpg',
    alt: 'The Heaven and Earth Grocery Store book cover.',
    className: 'home-collage-cover',
  },
  {
    to: '/books/yellowface',
    imageUrl: '/images/covers/yellowface.jpg',
    alt: 'Yellowface book cover.',
    className: 'home-collage-cover',
  },
];

const quickLinks = [
  {
    title: 'The archive',
    text: 'Books, captions, photos, and the club lore in one place.',
    to: '/books',
  },
  {
    title: 'Photo roll',
    text: 'The meetings, the tables, the nights out, and the evidence.',
    to: '/photos',
  },
  {
    title: 'The thesis',
    text: 'Yuvi chooses, the people obey, literature survives.',
    to: '/about',
  },
];

export default function Home() {
  return (
    <>
      <section className="home-editorial-shell">
        <div className="home-editorial-hero">
          <div className="home-editorial-copy">
            <p className="home-edition-badge">East Village Edition</p>
            <h1 className="home-editorial-title">{siteConfig.welcomeMessage}</h1>
            <p className="home-editorial-lede">{siteConfig.about.intro}</p>
            <div className="home-editorial-actions">
              <Link className="home-editorial-button home-editorial-button-primary" to="/books">
                <BookOpen size={18} aria-hidden="true" />
                Enter archive
              </Link>
              <Link className="home-editorial-button" to="/photos">
                <Camera size={18} aria-hidden="true" />
                Photo roll
              </Link>
            </div>
          </div>

          <div className="home-collage" aria-label="Yuvi's Book Club books and memories">
            {collageItems.map((item) => (
              <Link key={`${item.to}-${item.imageUrl}`} to={item.to} className={item.className}>
                <img src={item.imageUrl} alt={item.alt} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-archive-strip" aria-label="Club highlights">
        <Link
          className="home-archive-cell"
          to={recentBook ? `/books/${recentBook.id}` : '/books'}
        >
          <span>Currently reading</span>
          <strong>{recentBook?.title ?? siteConfig.bookClubName}</strong>
          <small>
            {recentBook
              ? `${formatMonthYear(recentBook.dateRead)} by ${recentBook.author}`
              : 'The next official selection'}
          </small>
        </Link>
        {quickLinks.map((item) => (
          <Link key={item.title} className="home-archive-cell" to={item.to}>
            <span>{item.title}</span>
            <strong>{item.text}</strong>
            <small>
              Visit
              <ArrowRight size={14} aria-hidden="true" />
            </small>
          </Link>
        ))}
      </section>

      <section className="bg-vellum">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 border-b border-espresso/15 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-burgundy">
                Latest shelf
              </p>
              <h2 className="mt-2 font-display text-4xl leading-tight text-espresso">
                Recent appointments from the benevolent autocrat.
              </h2>
            </div>
            <Link className="inline-flex items-center gap-2 text-sm font-bold text-burgundy" to="/books">
              Browse every book
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {recentBooks.slice(0, 6).map((book) => (
              <Link
                key={book.id}
                to={`/books/${book.id}`}
                className="group min-w-0"
                aria-label={`Read notes for ${book.title}`}
              >
                <img
                  className="aspect-[2/3] w-full border-2 border-espresso object-cover transition group-hover:-translate-y-1"
                  src={book.coverImage}
                  alt={`${book.title} book cover`}
                />
                <span className="mt-3 block truncate text-sm font-bold text-espresso group-hover:text-burgundy">
                  {book.title}
                </span>
                <span className="mt-1 block text-xs font-semibold text-espresso/55">
                  {formatMonthYear(book.dateRead)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
