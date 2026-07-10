import { BookHeart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  return (
    <footer className="border-t border-espresso/10 bg-espresso text-vellum">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-vellum/10 px-3 py-1 text-sm text-vellum/80">
            <BookHeart size={16} aria-hidden="true" />
            {siteConfig.bookClubName}
          </div>
          <p className="font-display text-3xl leading-tight text-vellum">
            {siteConfig.footerMessage}
          </p>
        </div>
        <nav className="flex flex-wrap items-start gap-3 md:justify-end" aria-label="Footer navigation">
          <Link className="footer-link" to="/books">
            Books
          </Link>
          <Link className="footer-link" to="/photos">
            Photos
          </Link>
          <Link className="footer-link" to="/about">
            About
          </Link>
        </nav>
      </div>
      <div className="border-t border-vellum/10 px-4 py-4 text-center text-xs font-semibold tracking-[0.16em] text-vellum/60 sm:px-6 lg:px-8">
        Made by Shlok for his best friend
      </div>
    </footer>
  );
}
