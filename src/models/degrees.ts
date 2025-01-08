export type specialtyType = { id: string; en: string; fa: string; };
export type specialtyEnType = typeof degries[number]["en"];

export const degries = [
    {id:"degrie-1", en: "expert", fa: "متخصص" },

    {id:"degrie-2", en: "fellowship", fa: "فلوشیپ" },

    {id:"degrie-3", en: "specialized-doctorate", fa: "دکترای تخصصی" },

    {id:"degrie-4", en: "subspecialist", fa: "فوق تخصص" },

    {id:"degrie-5", en: "PhD", fa: "دکتری" },
];