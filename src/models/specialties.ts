export type specialtyType = { id: string; en: string; fa: string };
export type specialtyEnType = (typeof specialties)[number]["en"];

export const specialties: specialtyType[] = [
  { id: "specialty-1", en: "internist", fa: "بیماری‌های داخلی" },

  { id: "specialty-2", en: "dermatologist", fa: "بیماری‌های پوست" },

  { id: "specialty-3", en: "ophthalmologist", fa: "چشم پزشکی" },

  {
    id: "specialty-4",
    en: "cardiovascular-specialist",
    fa: "بیماری‌های قبل و عروق",
  },

  { id: "specialty-5", en: "pediatric", fa: "بیماری‌های کودکان" },
] as const;
