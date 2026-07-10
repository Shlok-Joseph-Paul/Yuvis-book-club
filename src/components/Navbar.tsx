import { BookOpen, Images, Info, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { cn } from '../lib/utils';

const links = [
  { to: '/books', label: 'Books', icon: BookOpen },
  { to: '/photos', label: 'Photos', icon: Images },
  { to: '/about', label: 'About', icon: Info },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-espresso/10 bg-vellum/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="size-10 overflow-hidden rounded-full border border-espresso/10 bg-espresso shadow-soft transition group-hover:scale-105">
            <img
              src="/images/ybc-logo.jpg"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          </span>
          <span>
            <span className="block font-display text-xl text-espresso">
              {siteConfig.bookClubName}
            </span>
            <span className="hidden text-xs uppercase tracking-[0.24em] text-espresso/60 sm:block">
              NYC&apos;s Hottest Social Club
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-2 md:flex">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition',
                  isActive
                    ? 'bg-espresso text-vellum shadow-soft'
                    : 'text-espresso/75 hover:bg-espresso/10 hover:text-espresso',
                )
              }
            >
              <Icon size={17} aria-hidden="true" />
              {label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-espresso/15 text-espresso transition hover:bg-espresso/10 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          title={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-espresso/10 bg-vellum px-4 py-4 shadow-soft md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition',
                    isActive ? 'bg-espresso text-vellum' : 'text-espresso hover:bg-espresso/10',
                  )
                }
              >
                <Icon size={18} aria-hidden="true" />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
