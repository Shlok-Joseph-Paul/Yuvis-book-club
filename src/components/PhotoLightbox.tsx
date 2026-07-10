import { CalendarDays, MapPin, X } from 'lucide-react';
import { books } from '../data/books';
import { formatMonthYear } from '../lib/utils';
import type { Photo } from '../types';

type PhotoLightboxProps = {
  photo: Photo | null;
  onClose: () => void;
};

export default function PhotoLightbox({ photo, onClose }: PhotoLightboxProps) {
  if (!photo) {
    return null;
  }

  const associatedBook = books.find((book) => book.id === photo.associatedBookId);

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-ink/75 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption}
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-vellum shadow-lift"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-ink/70 text-vellum transition hover:bg-burgundy"
          onClick={onClose}
          aria-label="Close photo"
          title="Close photo"
        >
          <X size={20} aria-hidden="true" />
        </button>
        <div className="grid max-h-[90vh] lg:grid-cols-[1.35fr_0.65fr]">
          <img
            className="h-full min-h-[320px] w-full bg-ink object-contain"
            src={photo.imageUrl}
            alt={photo.altText ?? photo.caption}
          />
          <div className="overflow-y-auto p-6 lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-burgundy">
              Club photo
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-espresso">
              {photo.caption}
            </h2>
            <div className="mt-6 space-y-3 text-espresso/70">
              {photo.date ? (
                <p className="flex items-center gap-2">
                  <CalendarDays size={18} className="text-forest" aria-hidden="true" />
                  {formatMonthYear(photo.date)}
                </p>
              ) : null}
              {photo.location ? (
                <p className="flex items-center gap-2">
                  <MapPin size={18} className="text-forest" aria-hidden="true" />
                  {photo.location}
                </p>
              ) : null}
            </div>

            {associatedBook ? (
              <div className="mt-8 rounded-2xl bg-parchment p-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-forest">
                  Associated book
                </p>
                <p className="mt-2 font-display text-2xl text-espresso">{associatedBook.title}</p>
                <p className="mt-1 text-sm font-semibold text-espresso/65">
                  by {associatedBook.author}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
