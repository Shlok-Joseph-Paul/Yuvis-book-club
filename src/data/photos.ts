import type { Photo } from '../types';

// Add more club photos here. Keep image files in public/images/photos and
// update caption, date, associatedBookId, and location as the archive grows.
export const photos: Photo[] = [
  {
    id: 'vera-or-faith-wine-room',
    imageUrl: '/images/photos/vera-or-faith-wine-room.jpg',
    caption: 'Vera, or Faith in the dictator Yuvi',
    associatedBookId: 'vera-or-faith',
    location: 'Wine room',
    altText:
      'A book club member holding Vera, or Faith and a tablet while standing in a warmly lit wine room.',
  },
  {
    id: 'midnight-library-table',
    imageUrl: '/images/photos/midnight-library-table.jpg',
    caption: 'A candlelit Midnight Library spread with notes, bracelets, drinks, and dessert.',
    associatedBookId: 'the-midnight-library',
    location: 'Living room',
    altText:
      'Coffee table with copies of The Midnight Library, printed discussion notes, drinks, bracelets, a candle, and chocolate desserts.',
  },
  {
    id: 'wedding-people-sidewalk',
    imageUrl: '/images/photos/wedding-people-sidewalk.jpg',
    caption: 'Keenan Thompson, a well read YBC fan',
    associatedBookId: 'the-wedding-people',
    location: 'Outdoor table',
    altText:
      'Book club members smiling around an outdoor table at night while holding copies of The Wedding People.',
  },
  {
    id: 'wine-room-group-selfie',
    imageUrl: '/images/photos/wine-room-group-selfie.jpg',
    caption: 'A full-circle group selfie among the shelves and string lights.',
    associatedBookId: 'vera-or-faith',
    location: 'Wine room',
    altText:
      'Book club group selfie in a warmly lit wine room with wooden shelves, bottles, and string lights.',
  },
];

export const tomfooleryPhotos: Photo[] = Array.from({ length: 12 }, (_, index) => {
  const photoNumber = index + 1;
  const paddedNumber = String(photoNumber).padStart(2, '0');

  return {
    id: `out-about-${paddedNumber}`,
    imageUrl: `/images/photos/tomfoolery/out-about-${paddedNumber}.jpg`,
    caption: String(photoNumber),
    kicker: 'Out and about',
    altText: `Out and about and tomfoolery photo ${photoNumber}.`,
  };
});
