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
    caption: 'hammered',
    associatedBookId: 'vera-or-faith',
    location: 'Wine room',
    altText:
      'Book club group selfie in a warmly lit wine room with wooden shelves, bottles, and string lights.',
  },
  {
    id: 'book-club-extra-01',
    imageUrl: '/images/photos/book-club-extra-01.jpg',
    caption: 'Couple goals',
    altText: 'Book club photo 1.',
  },
  {
    id: 'book-club-extra-02',
    imageUrl: '/images/photos/book-club-extra-02.jpg',
    caption: 'Heaven and Earth in Meghans cookies',
    altText: 'Book club photo 2.',
  },
];

const tomfooleryPhoto = (photoNumber: number, caption: string): Photo => {
  const paddedNumber = String(photoNumber).padStart(2, '0');

  return {
    id: `out-about-${paddedNumber}`,
    imageUrl: `/images/photos/tomfoolery/out-about-${paddedNumber}.jpg`,
    caption,
    kicker: 'Out and about',
    altText: `Out and about and tomfoolery photo ${photoNumber}.`,
  };
};

export const tomfooleryPhotos: Photo[] = [
  tomfooleryPhoto(2, 'The greatest night of our lives.'),
  tomfooleryPhoto(1, 'Ah to be the bros drinking in New York together'),
  tomfooleryPhoto(3, 'Megan forever dinner guest at the Chugh Thomas household'),
  tomfooleryPhoto(4, 'Guru and Yuvi engrossed in discussion about books no doubt'),
  tomfooleryPhoto(5, 'Freedom!'),
  tomfooleryPhoto(6, 'The boys read fantasy and Shlok dreams he has hair again'),
  tomfooleryPhoto(7, '26 scoops or 6 foot 3 inches in Yuvis world'),
  tomfooleryPhoto(8, 'McGoobin'),
  tomfooleryPhoto(9, 'Changing Shloks life with Aux Marveilleux'),
  tomfooleryPhoto(10, "POV youre a UPS box moving to SK and Yuvi's new crib"),
  tomfooleryPhoto(11, 'Dude said his favorite activity was running in 2015 what a liar'),
  tomfooleryPhoto(12, 'Smoochy'),
  tomfooleryPhoto(13, 'Meg GG and Yuvi McGroovy'),
  tomfooleryPhoto(14, "MegG's window"),
  tomfooleryPhoto(15, 'Post golf brews'),
  tomfooleryPhoto(16, 'Nights on McDougal'),
  tomfooleryPhoto(17, 'Trifecta'),
];
