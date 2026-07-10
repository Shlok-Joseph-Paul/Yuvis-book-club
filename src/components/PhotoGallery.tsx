import { Camera } from 'lucide-react';
import type { Photo } from '../types';
import { formatMonthYear } from '../lib/utils';

type PhotoGalleryProps = {
  photos: Photo[];
  onSelect: (photo: Photo) => void;
};

export default function PhotoGallery({ photos, onSelect }: PhotoGalleryProps) {
  if (photos.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-espresso/25 bg-vellum p-10 text-center">
        <Camera className="mx-auto text-burgundy" size={34} aria-hidden="true" />
        <h2 className="mt-4 font-display text-2xl text-espresso">No photos yet</h2>
        <p className="mx-auto mt-2 max-w-md text-espresso/70">
          Add the first meeting photo in src/data/photos.ts and it will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {photos.map((photo, index) => (
        <button
          type="button"
          key={photo.id}
          className="gallery-item group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-espresso/10 bg-vellum text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift focus:outline-none focus-visible:ring-4 focus-visible:ring-burgundy/30"
          onClick={() => onSelect(photo)}
        >
          <img
            className="h-auto w-full transition duration-300 group-hover:scale-[1.03]"
            src={photo.imageUrl}
            alt={photo.altText ?? photo.caption}
            loading={index < 3 ? 'eager' : 'lazy'}
          />
          <span className="block p-4">
            <span className="block font-semibold leading-6 text-espresso">{photo.caption}</span>
            <span className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-espresso/60">
              {photo.date ? <span>{formatMonthYear(photo.date)}</span> : null}
              {photo.location ? <span>{photo.location}</span> : null}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}
