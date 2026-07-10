type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-espresso/10 bg-vellum">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-burgundy">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-4xl leading-tight text-espresso sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-espresso/70">{description}</p>
      </div>
    </section>
  );
}
