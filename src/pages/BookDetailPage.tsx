import { Link, useParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import PageHeader from '../components/PageHeader';
import { books } from '../data/books';

export default function BookDetailPage() {
  const { bookId } = useParams();
  const book = books.find((item) => item.id === bookId);

  if (!book) {
    return (
      <>
        <PageHeader
          eyebrow="Missing page"
          title="That book is not on the shelf yet."
          description="The link may be old, or the book id may have changed in the data file."
        />
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            to="/books"
            className="inline-flex rounded-full bg-espresso px-5 py-3 text-sm font-bold text-vellum transition hover:bg-burgundy"
          >
            Return to books
          </Link>
        </section>
      </>
    );
  }

  return <BookDetail book={book} />;
}
