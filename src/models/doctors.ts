import { DoctorModel } from "@/types/doctor.type";

export const doctorsData: DoctorModel[] = [
  {
    id: "9ffc",
    name: "پوراندخت جعفري",
    slug: "dr-pourandokht-jafari",
    image: "https://cdn.paziresh24.com/getImage/p24/search-women/8cd097208180a48ff5206f6122b9a5a5.jpg?size=150",
    isVerified: true,
    averageRating: 4.99,
    totalVotes: 294,
    address:
      "تهران، بین چهارراه بانک و میدان شهدا،ساختمان پزشکان مانا طبقه چهارم",
    nextAppointments: [
      { date: "2025-01-07", time: "12:00" },
      { date: "2025-01-08", time: "09:00" },
    ],
    brief: "متخصص بیماری‌های داخلی",
    badges: ["خوش برخورد", "کمترین معطلی"],
    degree: {
      en: "expert",
      fa: "متخصص",
    },
    specialty: {
      en: "internist",
      fa: "بیماری‌های داخلی",
    },
    gender: {
      en: "female",
      fa: "مرد",
    },
    city: {
      en: "tehran",
      fa: "تهران",
    },
  },
  {
    id: "88f9",
    name: "مجتبی قدسی",
    slug: "dr-mojtaba-ghodsi",
    image: "https://cdn.paziresh24.com/getImage/p24/search-men/9b45c32fe70f1321b4b349bc1a5aff9c.jpeg?size=150",
    isVerified: true,
    averageRating: 4.92,
    totalVotes: 1487,
    address:
      "رشت، اول خیابان والی، خیابان شهیدان نوعی اقدم، نرسیده به بیمارستان امام خمینی، جنب داروخانه دکترنصیرپور",
    nextAppointments: [
      { date: "2025-01-08", time: "11:00" },
      { date: "2025-01-09", time: "14:00" },
    ],
    brief: "فلوشیپ بیماری‌های کودکان",
    badges: ["خوش برخورد", "کمترین معطلی"],
    degree: {
      en: "fellowship",
      fa: "فلوشیپ",
    },
    specialty: {
      en: "pediatric",
      fa: "بیماری‌های کودکان",
    },
    gender: {
      en: "male",
      fa: "مرد",
    },
    city: {
      en: "rasht",
      fa: "رشت",
    },
  },
  {
    id: "406c",
    name: "امیرحسین پورداود",
    slug: "dr-amirhossein-pourdavood",
    image: "https://cdn.paziresh24.com/getImage/p24/search-men/ac84246810671c2744de34cb4e938aa2.jpg?size=150",
    isVerified: true,
    averageRating: 5,
    totalVotes: 190,
    address: "بندرعباس، خیابان ۲۲ بهمن ،جنب بانک مسکن ،ساختمان حکیم ،طبقه سوم",
    nextAppointments: [
      { date: "2025-01-08", time: "11:00" },
      { date: "2025-01-09", time: "14:00" },
    ],
    brief: "بیماری‌های پوست، زیبایی،درمان هموروئید و فیشر و...",
    badges: ["خوش برخورد", "کمترین معطلی"],
    degree: {
      en: "specialized-doctorate",
      fa: "دکترای تخصصی",
    },
    specialty: {
      en: "dermatologist",
      fa: "بیماری‌های پوست",
    },
    gender: {
      en: "male",
      fa: "مرد",
    },
    city: {
      en: "bandarabas",
      fa: "بندرعباس",
    },
  },
  {
    id: "160d",
    name: "اعظم قهساره اردستانی",
    slug: "dr-azam-ghahsareh-ardestani",
    image: "https://cdn.paziresh24.com/getImage/p24/search-women/dc1c321cabe87e09772530d3480d2adc.jpg?size=150",
    isVerified: true,
    averageRating: 4.95,
    totalVotes: 759,
    address:
      "زاهدان, شهرک ولی عصر .بیمارستان فوق تخصصی میلاد کلینیک  اطفال ونوزادان",
    nextAppointments: [
      { date: "2025-01-08", time: "11:00" },
      { date: "2025-01-09", time: "14:00" },
    ],
    brief: "فوق تخصص چشم پزشکی",
    badges: ["فعال شدن نوبت‌دهی اینترنتی 12 دی 23:59", "خوش برخورد"],
    degree: {
      en: "subspecialist",
      fa: "فوق تخصص",
    },
    specialty: {
      en: "ophthalmologist",
      fa: "چشم پزشکی",
    },
    gender: {
      en: "female",
      fa: "مرد",
    },
    city: {
      en: "zahedan",
      fa: "زاهدان",
    },
  },
  {
    id: "4c81",
    name: "رضا پورعلی",
    slug: "dr-reza-pourali",
    image: "https://cdn.paziresh24.com/getImage/p24/search-men/c0a4da00da796354da26c3b1ed016ab3.png?size=150",
    isVerified: true,
    averageRating: 4.8259,
    totalVotes: 305,
    address:
      "کلینیک خیام بیمارستان تخصصی و فوق تخصصی حکیم|اردبیل, میدان بسیج، ابتدای جاده باغرود، مرکز اموزشی پژوهشی و درمانی حکیم (درمانگاه طب سنتی ; آدرس: کلینیک امام علی : بلوار جمهوری - بین جمهوری 6و 8)",
    nextAppointments: [
      { date: "2025-01-08", time: "11:00" },
      { date: "2025-01-09", time: "14:00" },
    ],
    brief: "دکتری بیماری‌های قبل و عروق",
    badges: [
      "فعال شدن نوبت‌دهی اینترنتی 13 دی 08:00",
      "خوش برخورد",
      "کمترین معطلی",
    ],
    degree: {
      en: "PhD",
      fa: "دکتری",
    },
    specialty: {
      en: "cardiovascular-specialist",
      fa: "بیماری‌های قبل و عروق",
    },
    gender: {
      en: "male",
      fa: "مرد",
    },
    city: {
      en: "ardebil",
      fa: "اردبیل",
    },
  },
];
