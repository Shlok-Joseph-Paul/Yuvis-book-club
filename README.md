# Yuvi's Book Club

A polished, static React website for a private book club. It is built with Vite, React, TypeScript, Tailwind CSS, and React Router, with all content edited through local TypeScript data files.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Edit The Book Club Name

Open `src/data/siteConfig.ts` and change:

```ts
bookClubName: "Yuvi's Book Club"
```

That same file also controls the homepage welcome message, footer message, and About page text.

## Add Books

Open `src/data/books.ts` and add a new object to the `books` array. Each book should include a stable `id`, title, author, cover image path, `dateRead`, genres, short description, and club notes.

Place replacement cover images in `public/images/covers`, then reference them like:

```ts
coverImage: '/images/covers/my-book-cover.jpg'
```

## Add Goodreads Links

Goodreads links are stored manually in `src/data/books.ts`:

```ts
goodreadsUrl: 'https://www.goodreads.com/book/show/...'
```

The site does not scrape Goodreads or fetch book data.

## Add Photos

Open `src/data/photos.ts` and edit the `photos` array. Place real images in `public/images/photos`, then reference them like:

```ts
imageUrl: '/images/photos/june-meeting.jpg'
```

You can optionally connect a photo to a book by setting `associatedBookId` to the matching book `id` from `src/data/books.ts`.

## Deploy On Vercel

Vercel should auto-detect Vite.

Recommended settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Deploy On Cloudflare Pages

Use these settings:

- Build command: `npm run build`
- Output directory: `dist`

If Cloudflare asks for a framework preset, choose Vite or React.

## Deploy On Netlify

Use these settings:

- Build command: `npm run build`
- Publish directory: `dist`

## Deploy On GitHub Pages

Run:

```bash
npm run build
```

Then publish the generated `dist` folder with your preferred GitHub Pages workflow. If the site will be served from a subpath, update Vite's `base` option in `vite.config.ts`.

## Add A Custom Domain Later

Do not hard-code the final domain in the app. Add the domain in your host's dashboard after deployment:

- Vercel: Project Settings > Domains
- Cloudflare Pages: Custom domains
- Netlify: Site configuration > Domain management
- GitHub Pages: Repository Settings > Pages > Custom domain

Then update DNS records where the domain is registered, following the hosting provider's instructions.
