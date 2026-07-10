export type Book = {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  dateRead: string;
  genre: string[];
  shortDescription: string;
  clubNotes: string;
  memorableQuote?: string;
  meetingMemory?: string;
  goodreadsUrl?: string;
};

export type Photo = {
  id: string;
  imageUrl: string;
  caption: string;
  date?: string;
  associatedBookId?: string;
  location?: string;
  altText?: string;
};

export type Member = {
  id: string;
  name: string;
  favoriteGenre?: string;
  note?: string;
};

export type SiteConfig = {
  bookClubName: string;
  welcomeMessage: string;
  footerMessage: string;
  about: {
    intro: string;
    howStarted: string;
    readingTaste: string;
    meetingRhythm: string;
    traditions: string[];
    closingNote: string;
  };
};
