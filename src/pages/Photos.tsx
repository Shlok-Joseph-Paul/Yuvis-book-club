import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import PhotoGallery from '../components/PhotoGallery';
import PhotoLightbox from '../components/PhotoLightbox';
import { photos, tomfooleryPhotos } from '../data/photos';
import type { Photo } from '../types';

export default function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Photo album"
        title="Snapshots of the memories between the pages and outside the books"
      />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-7 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-burgundy">Book club</p>
          <h2 className="font-display text-3xl leading-tight text-espresso sm:text-4xl">
            The book club album
          </h2>
        </div>
        <PhotoGallery photos={photos} onSelect={setSelectedPhoto} />
      </section>
      <section className="mx-auto max-w-7xl border-t border-espresso/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-7 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-burgundy">Elsewhere</p>
          <h2 className="font-display text-3xl leading-tight text-espresso sm:text-4xl">
            out, about and some major tomfoolery
          </h2>
        </div>
        <PhotoGallery photos={tomfooleryPhotos} onSelect={setSelectedPhoto} />
      </section>
      <PhotoLightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </>
  );
}
