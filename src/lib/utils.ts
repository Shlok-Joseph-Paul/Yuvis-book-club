export function formatMonthYear(dateString: string) {
  const date = new Date(`${dateString}T00:00:00`);

  return new Intl.DateTimeFormat('en', {
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function byRecentDate<T extends { dateRead: string }>(items: T[]) {
  return [...items].sort(
    (a, b) => new Date(b.dateRead).getTime() - new Date(a.dateRead).getTime(),
  );
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}
