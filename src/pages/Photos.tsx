import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import PhotoGallery from '../components/PhotoGallery';
import PhotoLightbox from '../components/PhotoLightbox';
import { photos } from '../data/photos';
import type { Photo } from '../types';

export default function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Photo album"
        title="Snapshots from the meetings between the pages."
        description="A simple gallery for the tables, snacks, notes, and little memories that make the club feel like itself."
      />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <PhotoGallery photos={photos} onSelect={setSelectedPhoto} />
      </section>
      <PhotoLightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </>
  );
}
