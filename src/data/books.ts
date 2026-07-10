import type { Book } from '../types';

const goodreadsSearchUrl = (title: string, author: string) =>
  `https://www.goodreads.com/search?q=${encodeURIComponent(`${title} ${author}`)}`;

// Yuvi's real book list starts here. Replace dateRead with the club's actual
// meeting months when you have them. Leave coverImage blank for generated
// placeholder covers, or point it to a file in public/images/covers.
export const books: Book[] = [
  {
    id: 'tell-me-everything',
    title: 'Tell Me Everything',
    author: 'Elizabeth Strout',
    coverImage: '/images/covers/tell-me-everything.jpg',
    dateRead: '2026-07-01',
    genre: ['Literary', 'Small Town', 'Reflective'],
    shortDescription:
      'A tender return to Crosby, Maine, where ordinary conversations reveal the depth of love, grief, friendship, and attention.',
    clubNotes:
      'A gentle, talkative book that rewards readers who like emotional nuance over fireworks. The club could use this one to talk about what people choose to reveal, what they protect, and how stories become a form of care.',
    memorableQuote: 'Add a favorite line from the discussion here.',
    meetingMemory:
      'Add the real meeting memory here once the group has one saved.',
    goodreadsUrl: goodreadsSearchUrl('Tell Me Everything', 'Elizabeth Strout'),
  },
  {
    id: 'vera-or-faith',
    title: 'Vera, or Faith',
    author: 'Gary Shteyngart',
    coverImage: '/images/covers/vera-or-faith.jpg',
    dateRead: '2026-06-01',
    genre: ['Satire', 'Dystopian', 'Coming of Age'],
    shortDescription:
      'A sharp, funny, anxious near-future story told through the eyes of a young girl trying to make sense of family and country.',
    clubNotes:
      'The group can lean into the tonal mix here: comic absurdity, political dread, and the strange clarity children bring to adult messes. A good pick for a livelier, sharper discussion night.',
    memorableQuote: 'Add a favorite line from the discussion here.',
    meetingMemory:
      'Add the real meeting memory here once the group has one saved.',
    goodreadsUrl: goodreadsSearchUrl('Vera, or Faith', 'Gary Shteyngart'),
  },
  {
    id: 'orbital',
    title: 'Orbital',
    author: 'Samantha Harvey',
    coverImage: '/images/covers/orbital.jpg',
    dateRead: '2026-05-01',
    genre: ['Literary', 'Science', 'Meditative'],
    shortDescription:
      'A luminous, compact novel following astronauts as they circle Earth and notice the planet from an astonishing distance.',
    clubNotes:
      'This is a beautiful fit for a quieter meeting: less plot recap, more awe, perspective, climate, home, and the odd intimacy of seeing everything from far away.',
    memorableQuote: 'Add a favorite line from the discussion here.',
    meetingMemory:
      'Add the real meeting memory here once the group has one saved.',
    goodreadsUrl: goodreadsSearchUrl('Orbital', 'Samantha Harvey'),
  },
  {
    id: 'martyr',
    title: 'Martyr!',
    author: 'Kaveh Akbar',
    coverImage: '/images/covers/martyr.jpg',
    dateRead: '2026-04-01',
    genre: ['Literary', 'Identity', 'Art'],
    shortDescription:
      'A searching, funny, grief-soaked novel about faith, family history, addiction, art, and the hunger for a meaningful life.',
    clubNotes:
      'A strong discussion book because it has so many doors into it: poetry, belief, immigrant family stories, self-destruction, and the desire to turn pain into something lasting.',
    memorableQuote: 'Add a favorite line from the discussion here.',
    meetingMemory:
      'Add the real meeting memory here once the group has one saved.',
    goodreadsUrl: goodreadsSearchUrl('Martyr!', 'Kaveh Akbar'),
  },
  {
    id: 'remarkably-bright-creatures',
    title: 'Remarkably Bright Creatures',
    author: 'Shelby Van Pelt',
    coverImage: '/images/covers/remarkably-bright-creatures.jpg',
    dateRead: '2026-03-01',
    genre: ['Contemporary', 'Heartwarming', 'Mystery'],
    shortDescription:
      'A warm, gently mysterious novel about loneliness, unlikely connection, and one very observant octopus.',
    clubNotes:
      'A crowd-pleaser with just enough sweetness and puzzle-solving to keep the room happy. This one is perfect for talking about grief, friendship, and found family.',
    memorableQuote: 'Add a favorite line from the discussion here.',
    meetingMemory:
      'Add the real meeting memory here once the group has one saved.',
    goodreadsUrl: goodreadsSearchUrl('Remarkably Bright Creatures', 'Shelby Van Pelt'),
  },
  {
    id: 'the-heaven-and-earth-grocery-store',
    title: 'The Heaven & Earth Grocery Store',
    author: 'James McBride',
    coverImage: '/images/covers/the-heaven-and-earth-grocery-store.jpg',
    dateRead: '2026-02-01',
    genre: ['Historical', 'Community', 'Literary'],
    shortDescription:
      'A generous, many-voiced novel about secrets, neighbors, race, faith, and community in a Pennsylvania town.',
    clubNotes:
      'A big-hearted book for a big table. There is plenty to discuss in the way McBride builds community, lets side characters bloom, and turns a neighborhood into a moral universe.',
    memorableQuote: 'Add a favorite line from the discussion here.',
    meetingMemory:
      'Add the real meeting memory here once the group has one saved.',
    goodreadsUrl: goodreadsSearchUrl('The Heaven & Earth Grocery Store', 'James McBride'),
  },
  {
    id: 'yellowface',
    title: 'Yellowface',
    author: 'R. F. Kuang',
    coverImage: '/images/covers/yellowface.jpg',
    dateRead: '2026-01-01',
    genre: ['Satire', 'Publishing', 'Contemporary'],
    shortDescription:
      'A biting literary thriller about ambition, appropriation, authorship, and the online machinery of reputation.',
    clubNotes:
      'This is the kind of book that makes everyone talk at once. Ideal for debating who gets to tell which stories, what success excuses, and how ugly envy can get.',
    memorableQuote: 'Add a favorite line from the discussion here.',
    meetingMemory:
      'Add the real meeting memory here once the group has one saved.',
    goodreadsUrl: goodreadsSearchUrl('Yellowface', 'R. F. Kuang'),
  },
  {
    id: 'the-midnight-library',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    coverImage: '/images/covers/the-midnight-library.jpg',
    dateRead: '2025-12-01',
    genre: ['Speculative', 'Hopeful', 'Philosophical'],
    shortDescription:
      'A reflective novel about regret, alternate lives, and the surprising shape of contentment.',
    clubNotes:
      'A gentle invitation to talk about roads not taken without letting regret take over the room. The best conversations here are about choice, acceptance, and what makes a life feel lived.',
    memorableQuote: 'Between life and death there is a library.',
    meetingMemory:
      'Add the real meeting memory here once the group has one saved.',
    goodreadsUrl: goodreadsSearchUrl('The Midnight Library', 'Matt Haig'),
  },
  {
    id: 'tomorrow-and-tomorrow-and-tomorrow',
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin',
    coverImage: '/images/covers/tomorrow-and-tomorrow-and-tomorrow.jpg',
    dateRead: '2025-11-01',
    genre: ['Contemporary', 'Friendship', 'Creative Life'],
    shortDescription:
      'A layered story about creative partnership, ambition, loss, and the lifelong ways people keep choosing each other.',
    clubNotes:
      'A rich choice for talking about friendship as a creative act. The group can dig into collaboration, ego, forgiveness, and the way shared work can become its own kind of love story.',
    memorableQuote: 'What is a game? It is tomorrow, and tomorrow, and tomorrow.',
    meetingMemory:
      'Add the real meeting memory here once the group has one saved.',
    goodreadsUrl: goodreadsSearchUrl('Tomorrow, and Tomorrow, and Tomorrow', 'Gabrielle Zevin'),
  },
  {
    id: 'a-gentleman-in-moscow',
    title: 'A Gentleman in Moscow',
    author: 'Amor Towles',
    coverImage: '/images/covers/a-gentleman-in-moscow.jpg',
    dateRead: '2025-10-01',
    genre: ['Historical', 'Elegant', 'Character Study'],
    shortDescription:
      'A graceful historical novel about a count confined to a grand hotel and the full life he builds within its walls.',
    clubNotes:
      'An elegant, cozy discussion pick with real substance underneath. This one invites conversation about manners, resilience, chosen family, and making a world inside limits.',
    memorableQuote: 'Add a favorite line from the discussion here.',
    meetingMemory:
      'Add the real meeting memory here once the group has one saved.',
    goodreadsUrl: goodreadsSearchUrl('A Gentleman in Moscow', 'Amor Towles'),
  },
  {
    id: 'the-wedding-people',
    title: 'The Wedding People',
    author: 'Alison Espach',
    coverImage: '/images/covers/the-wedding-people.jpg',
    dateRead: '2025-09-01',
    genre: ['Contemporary', 'Dark Comedy', 'Hopeful'],
    shortDescription:
      'A bittersweet, funny novel about a woman at a seaside wedding who finds unexpected reasons to keep going.',
    clubNotes:
      'Good for a conversation that can hold both humor and heartbreak. The wedding setting gives the book sparkle, but the emotional core is about loneliness, strangers, and small rescues.',
    memorableQuote: 'Add a favorite line from the discussion here.',
    meetingMemory:
      'Add the real meeting memory here once the group has one saved.',
    goodreadsUrl: goodreadsSearchUrl('The Wedding People', 'Alison Espach'),
  },
  {
    id: 'the-guest',
    title: 'The Guest',
    author: 'Emma Cline',
    coverImage: '/images/covers/the-guest.jpg',
    dateRead: '2025-08-01',
    genre: ['Literary', 'Suspense', 'Social'],
    shortDescription:
      'A tense, sunlit novel following a young woman drifting through wealthy spaces where she does not quite belong.',
    clubNotes:
      'A good mood-and-morality book: uncomfortable in useful ways, with lots to say about class performance, desperation, beauty, and the stories people invent to survive.',
    memorableQuote: 'Add a favorite line from the discussion here.',
    meetingMemory:
      'Add the real meeting memory here once the group has one saved.',
    goodreadsUrl: goodreadsSearchUrl('The Guest', 'Emma Cline'),
  },
  {
    id: 'the-alchemist',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    coverImage: '/images/covers/the-alchemist.jpg',
    dateRead: '2025-07-01',
    genre: ['Fable', 'Spiritual', 'Adventure'],
    shortDescription:
      'A modern fable about a shepherd, a journey, and the search for purpose through signs, dreams, and courage.',
    clubNotes:
      'A short classic that makes room for big questions. The group can talk about destiny, faith, simplicity, and whether the book feels profound, sentimental, or both.',
    memorableQuote: 'Add a favorite line from the discussion here.',
    meetingMemory:
      'Add the real meeting memory here once the group has one saved.',
    goodreadsUrl: goodreadsSearchUrl('The Alchemist', 'Paulo Coelho'),
  },
  {
    id: 'a-marriage-at-sea',
    title: 'A Marriage at Sea',
    author: 'Sophie Elmhirst',
    coverImage: '/images/covers/a-marriage-at-sea.jpg',
    dateRead: '2025-06-01',
    genre: ['Nonfiction', 'Survival', 'Marriage'],
    shortDescription:
      'A true story of a couple, a shipwreck, and the emotional complexity of surviving together far from land.',
    clubNotes:
      'A strong nonfiction pick for talking about partnership under pressure. Beyond the survival story, the club can dig into obsession, endurance, and what a marriage becomes in crisis.',
    memorableQuote: 'Add a favorite line from the discussion here.',
    meetingMemory:
      'Add the real meeting memory here once the group has one saved.',
    goodreadsUrl: goodreadsSearchUrl('A Marriage at Sea', 'Sophie Elmhirst'),
  },
];
