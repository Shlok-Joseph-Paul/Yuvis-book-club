import { BookMarked, CalendarDays, Sparkles, Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { members } from '../data/members';
import { siteConfig } from '../data/siteConfig';

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the club"
        title="A small circle, a growing shelf, and a lot of saved sentences."
        description={siteConfig.about.intro}
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="story-panel">
          <BookMarked className="text-burgundy" size={26} aria-hidden="true" />
          <h2>How it started</h2>
          <p>{siteConfig.about.howStarted}</p>
        </article>

        <article className="story-panel">
          <Sparkles className="text-marigold" size={26} aria-hidden="true" />
          <h2>What they read</h2>
          <p>{siteConfig.about.readingTaste}</p>
        </article>

        <article className="story-panel">
          <CalendarDays className="text-forest" size={26} aria-hidden="true" />
          <h2>Meeting rhythm</h2>
          <p>{siteConfig.about.meetingRhythm}</p>
        </article>

        <article className="story-panel">
          <Users className="text-navy" size={26} aria-hidden="true" />
          <h2>Favorite traditions</h2>
          <ul className="mt-4 space-y-3">
            {siteConfig.about.traditions.map((tradition) => (
              <li key={tradition} className="flex gap-3 text-espresso/75">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-burgundy" />
                <span>{tradition}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="bg-vellum">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-burgundy">
                Members
              </p>
              <h2 className="mt-3 font-display text-4xl text-espresso">The current circle</h2>
            </div>
          </div>

          {members.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {members.map((member) => (
                <article
                  key={member.id}
                  className="rounded-2xl border border-espresso/10 bg-parchment p-5 shadow-soft"
                >
                  <h3 className="font-display text-2xl text-espresso">{member.name}</h3>
                  {member.favoriteGenre ? (
                    <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-forest">
                      {member.favoriteGenre}
                    </p>
                  ) : null}
                  {member.note ? (
                    <p className="mt-4 leading-7 text-espresso/70">{member.note}</p>
                  ) : null}
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-espresso/25 bg-parchment p-8">
              <h3 className="font-display text-2xl text-espresso">No members added yet</h3>
              <p className="mt-2 text-espresso/70">
                Add the member list in src/data/members.ts.
              </p>
            </div>
          )}

          <div className="mt-10 rounded-2xl bg-espresso p-8 text-vellum shadow-lift">
            <p className="max-w-4xl font-display text-3xl leading-tight">
              {siteConfig.about.closingNote}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
