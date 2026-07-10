import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import BookCard from '../components/BookCard';
import PageHeader from '../components/PageHeader';
import { books } from '../data/books';

type SortOption = 'date-desc' | 'date-asc' | 'title' | 'author';

export default function Books() {
  const [query, setQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortBy, setSortBy] = useState<SortOption>('date-desc');

  const genres = useMemo(
    () => ['all', ...Array.from(new Set(books.flatMap((book) => book.genre))).sort()],
    [],
  );

  const filteredBooks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return books
      .filter((book) => {
        const matchesQuery =
          normalizedQuery.length === 0 ||
          [book.title, book.author, book.shortDescription, book.clubNotes]
            .join(' ')
            .toLowerCase()
            .includes(normalizedQuery);

        const matchesGenre = selectedGenre === 'all' || book.genre.includes(selectedGenre);

        return matchesQuery && matchesGenre;
      })
      .sort((a, b) => {
        if (sortBy === 'date-desc') {
          return new Date(b.dateRead).getTime() - new Date(a.dateRead).getTime();
        }

        if (sortBy === 'date-asc') {
          return new Date(a.dateRead).getTime() - new Date(b.dateRead).getTime();
        }

        if (sortBy === 'author') {
          return a.author.localeCompare(b.author);
        }

        return a.title.localeCompare(b.title);
      });
  }, [query, selectedGenre, sortBy]);

  return (
    <>
      <PageHeader
        eyebrow="Bookshelf"
        title="Every book, note, and conversation worth keeping."
        description="Search the club archive, filter by genre, and open any book for the fuller reflection."
      />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-espresso/10 bg-vellum p-4 shadow-soft">
          <div className="grid gap-4 lg:grid-cols-[1fr_220px_220px]">
            <label className="relative block">
              <span className="sr-only">Search books</span>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-espresso/45"
                size={19}
                aria-hidden="true"
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="field pl-11"
                type="search"
                placeholder="Search by title, author, or note"
              />
            </label>

            <label>
              <span className="sr-only">Filter by genre</span>
              <select
                className="field"
                value={selectedGenre}
                onChange={(event) => setSelectedGenre(event.target.value)}
              >
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre === 'all' ? 'All genres' : genre}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className="sr-only">Sort books</span>
              <select
                className="field"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value as SortOption)}
              >
                <option value="date-desc">Newest first</option>
                <option value="date-asc">Oldest first</option>
                <option value="title">Title A-Z</option>
                <option value="author">Author A-Z</option>
              </select>
            </label>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {filteredBooks.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-espresso/25 bg-vellum p-10 text-center">
            <h2 className="font-display text-2xl text-espresso">No books match that search</h2>
            <p className="mt-2 text-espresso/70">
              Try another title, author, or genre. New books can be added in src/data/books.ts.
            </p>
          </div>
        ) : null}
      </section>
    </>
  );
}
