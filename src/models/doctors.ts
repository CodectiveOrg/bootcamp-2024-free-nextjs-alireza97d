import { DoctorModel } from "@/types/doctor.type";

export const doctorsData: DoctorModel[] = [
  {
    id: "97420f0d-b576-4f65-9ffc-a81b4b1b4e77",
    name: "پوراندخت جعفري",
    image: "",
    isVerified: true,
    averageRating: 4.99,
    totalVotes: 294,
    address: "تهران، بین چهارراه بانک و میدان شهدا،ساختمان پزشکان مانا طبقه چهارم",
    nextAppointments: [
      { date: "2025-01-07", time: "12:00" },
      { date: "2025-01-08", time: "09:00" }
    ],
    brief: "متخصص بیماری‌های داخلی",
    badges: ["خوش برخورد", "کمترین معطلی"],
    degree: {
      en: "expert",
      fa: "متخصص"
    },
    specialty: {
      en: "internist",
      fa: "بیماری‌های داخلی"
    },
    gender: {
      en: 'female',
      fa: 'مرد'
    },
    city: {
      en: "tehran",
      fa: "تهران",
    }
  },
  {
    id: "e6719f23-e846-4a95-88f9-c013c5d9cb4f",
    name: "مجتبی قدسی",
    image: "",
    isVerified: true,
    averageRating: 4.92,
    totalVotes: 1487,
    address: "رشت، اول خیابان والی، خیابان شهیدان نوعی اقدم، نرسیده به بیمارستان امام خمینی، جنب داروخانه دکترنصیرپور",
    nextAppointments: [
      { date: "2025-01-08", time: "11:00" },
      { date: "2025-01-09", time: "14:00" }
    ],
    brief: "فلوشیپ بیماری‌های کودکان",
    badges: ["خوش برخورد", "کمترین معطلی"],
    degree: {
      en: "fellowship",
      fa: "فلوشیپ"
    },
    specialty: {
      en: "pediatric",
      fa: "بیماری‌های کودکان"
    },
    gender: {
      en: 'male',
      fa: 'مرد'
    },
    city: {
      en: "rasht",
      fa: "رشت",
    }
  },
  {
    id: "4a7403d4-e0a2-406c-8dea-3e557bae54d2",
    name: "امیرحسین پورداود",
    image: "",
    isVerified: true,
    averageRating: 5,
    totalVotes: 190,
    address: "بندرعباس، خیابان ۲۲ بهمن ،جنب بانک مسکن ،ساختمان حکیم ،طبقه سوم",
    nextAppointments: [
      { date: "2025-01-08", time: "11:00" },
      { date: "2025-01-09", time: "14:00" }
    ],
    brief: "بیماری‌های پوست، زیبایی،درمان هموروئید و فیشر و...",
    badges: ["خوش برخورد", "کمترین معطلی"],
    degree: {
      en: "specialized-doctorate",
      fa: "دکترای تخصصی"
    },
    specialty: {
      en: "dermatologist",
      fa: "بیماری‌های پوست"
    },
    gender: {
      en: 'male',
      fa: 'مرد'
    },
    city: {
      en: "bandarabas",
      fa: "بندرعباس",
    }
  },
  {
    id: "06d3a495-160d-4722-815e-286ff5d82ed2",
    name: "اعظم قهساره اردستانی",
    image: "",
    isVerified: true,
    averageRating: 4.95,
    totalVotes: 759,
    address:
      "زاهدان, شهرک ولی عصر .بیمارستان فوق تخصصی میلاد کلینیک  اطفال ونوزادان",
    nextAppointments: [
      { date: "2025-01-08", time: "11:00" },
      { date: "2025-01-09", time: "14:00" }
    ],
    brief: "فوق تخصص چشم پزشکی",
    badges: ["فعال شدن نوبت‌دهی اینترنتی 12 دی 23:59", "خوش برخورد"],
    degree: {
      en: "subspecialist",
      fa: "فوق تخصص"
    },
    specialty: {
      en: "ophthalmologist",
      fa: "چشم پزشکی"
    },
    gender: {
      en: 'female',
      fa: 'مرد'
    },
    city: {
      en: "zahedan",
      fa: "زاهدان",
    }
  },
  {
    id: "7f39ff5b-4c81-4c59-80fa-7872b675bb18",
    name: "رضا پورعلی",
    image:
      "",
    isVerified: true,
    averageRating: 4.8259,
    totalVotes: 305,
    address:
      "کلینیک خیام بیمارستان تخصصی و فوق تخصصی حکیم|اردبیل, میدان بسیج، ابتدای جاده باغرود، مرکز اموزشی پژوهشی و درمانی حکیم (درمانگاه طب سنتی ; آدرس: کلینیک امام علی : بلوار جمهوری - بین جمهوری 6و 8)",
    nextAppointments: [
      { date: "2025-01-08", time: "11:00" },
      { date: "2025-01-09", time: "14:00" }
    ],
    brief: "دکتری بیماری‌های قبل و عروق",
    badges: [
      "فعال شدن نوبت‌دهی اینترنتی 13 دی 08:00",
      "خوش برخورد",
      "کمترین معطلی"
    ],
    degree: {
      en: "PhD",
      fa: "دکتری"
    },
    specialty: {
      en: "cardiovascular-specialist",
      fa: "بیماری‌های قبل و عروق"
    },
    gender: {
      en: 'male',
      fa: 'مرد'
    },
    city: {
      en: "ardebil",
      fa: "اردبیل",
    }
  }
];