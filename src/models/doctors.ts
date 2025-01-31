import { DoctorModel } from "@/types/doctor.type";

export const doctorsData: DoctorModel[] = [
  {
    slug: "9ffc",
    name: "پوراندخت جعفری",
    en_name: "dr-pourandokht-jafari",
    price: 190000,
    image:
      "https://cdn.paziresh24.com/getImage/p24/search-women/8cd097208180a48ff5206f6122b9a5a5.jpg?size=150",
    isVerified: true,
    averageRating: 4.99,
    totalVotes: 294,
    activeCounsulate: 325,
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
    about: `
 <div>
      <p><strong>دکتر پوراندخت جعفري</strong> یکی از متخصصان برجسته در زمینه <strong>پزشکی داخلی</strong> است. او دارای تجربه‌ای گسترده در درمان بیماری‌های مختلف می‌باشد.</p>
      
      <h2>ویژگی‌های دکتر پوراندخت جعفری:</h2>
      
      <ul>
        <li><strong>تجربه:</strong> بیش از 10 سال فعالیت در حوزه پزشکی.</li>
        <li><strong>تحصیلات:</strong> دکترای پزشکی از دانشگاه تهران.</li>
        <li><strong>تخصص:</strong> درمان بیماری‌های مزمن و پیچیده.</li>
      </ul>

      <h2>خدمات ارائه شده:</h2>
      <ol>
        <li>معاینه و تشخیص بیماری‌ها</li>
        <li>تجویز داروهای مناسب</li>
        <li>برنامه‌ریزی درمانی شخصی‌سازی شده</li>
      </ol>

      <h3>آمار و ارقام</h3>
      <table border="1" style="width: 100%; text-align: left;">
        <thead>
          <tr>
            <th>سال</th>
            <th>تعداد بیماران درمان شده</th>
            <th>نرخ رضایت بیماران</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2021</td>
            <td>150</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>2022</td>
            <td>200</td>
            <td>92%</td>
          </tr>
          <tr>
            <td>2023</td>
            <td>250</td>
            <td>95%</td>
          </tr>
        </tbody>
      </table>

      <p>برای اطلاعات بیشتر می‌توانید با پزشک تماس بگیرید. همچنین، می‌توانید از تجربیات دیگر بیماران بهره‌مند شوید.</p>

      <p style="font-style: italic;">توجه: همیشه قبل از شروع هر نوع درمانی با پزشک خود مشورت کنید.</p>
    </div>
   `,
    doctorsReviews: [
      {
        patientName: "محمدرضا",
        isVisited: true,
        date: "2025-01-25T12:30:00Z",
        text: "دکتر جعفری بسیار خوش برخورد و با حوصله بودند، تشخیص عالی و درمان مؤثر داشتند.",
        vote: 5,
      },
      {
        patientName: "الهام",
        isVisited: false,
        date: "2025-01-20T15:45:00Z",
        text: "متأسفانه هنوز نوبت من نرسیده ولی از تعریف‌هایی که شنیدم مطمئنم پزشک خوبی هستند.",
        vote: 4,
      },
    ],
  },
  {
    slug: "88f9",
    name: "مجتبی قدسی",
    en_name: "dr-mojtaba-ghodsi",
    price: 100000,
    image:
      "https://cdn.paziresh24.com/getImage/p24/search-men/9b45c32fe70f1321b4b349bc1a5aff9c.jpeg?size=150",
    isVerified: true,
    averageRating: 4.92,
    totalVotes: 1487,
    activeCounsulate: 35,
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
    about: `
 <div>
      <p><strong>دکتر مجتبی قدسی</strong> یکی از متخصصان برجسته در زمینه <strong>بیماری‌های کودکان</strong> است. او دارای تجربه‌ای گسترده در درمان بیماری‌های مختلف می‌باشد.</p>
      
      <h2>ویژگی‌های پزشک:</h2>
      
      <ul>
        <li><strong>تجربه:</strong> بیش از 10 سال فعالیت در حوزه پزشکی.</li>
        <li><strong>تحصیلات:</strong> دکترای پزشکی از دانشگاه تهران.</li>
        <li><strong>تخصص:</strong> درمان بیماری‌های مزمن و پیچیده.</li>
      </ul>

      <h2>خدمات ارائه شده:</h2>
      <ol>
        <li>معاینه و تشخیص بیماری‌ها</li>
        <li>تجویز داروهای مناسب</li>
        <li>برنامه‌ریزی درمانی شخصی‌سازی شده</li>
      </ol>

      <p>برای اطلاعات بیشتر می‌توانید با دکتر مجتبی قدسی تماس بگیرید. همچنین، می‌توانید از تجربیات دیگر بیماران بهره‌مند شوید.</p>

      <p style="font-style: italic;">توجه: همیشه قبل از شروع هر نوع درمانی با پزشک خود مشورت کنید.</p>
    </div>
   `,
    doctorsReviews: [
      {
        patientName: "حسین",
        isVisited: true,
        date: "2025-01-28T09:15:00Z",
        text: "پزشک بسیار متخصص و با دقت. رفتار عالی با کودکان و توصیه‌های مفید.",
        vote: 5,
      },
      {
        patientName: "زهرا",
        isVisited: true,
        date: "2025-01-26T14:20:00Z",
        text: "نسبت به هزینه‌ای که دریافت می‌کنند خدمات خیلی خوبی ارائه می‌دهند.",
        vote: 4,
      },
      {
        patientName: "علی",
        isVisited: false,
        date: "2025-01-18T18:00:00Z",
        text: "در انتظار نوبت هستم اما سیستم نوبت‌دهی بسیار سریع و کاربردی بود.",
        vote: 4,
      },
    ],
  },
  {
    slug: "406c",
    name: "امیرحسین پورداود",
    en_name: "dr-amirhossein-pourdavood",
    price: 150000,
    image:
      "https://cdn.paziresh24.com/getImage/p24/search-men/ac84246810671c2744de34cb4e938aa2.jpg?size=150",
    isVerified: true,
    averageRating: 5,
    totalVotes: 190,
    activeCounsulate: 105,
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
    about: `
 <div>
      <p><strong>دکتر امیرحسین پورداود</strong> یکی از متخصصان برجسته در زمینه <strong>بیماری‌های پوست</strong> است. او دارای تجربه‌ای گسترده در درمان بیماری‌های مختلف می‌باشد.</p>
      
      <h2>ویژگی‌های پزشک:</h2>
      
      <ul>
        <li><strong>تجربه:</strong> بیش از 10 سال فعالیت در حوزه پزشکی.</li>
        <li><strong>تحصیلات:</strong> دکترای پزشکی از دانشگاه تهران.</li>
        <li><strong>تخصص:</strong> درمان بیماری‌های مزمن و پیچیده.</li>
      </ul>

      <h2>خدمات ارائه شده:</h2>
      <ol>
        <li>معاینه و تشخیص بیماری‌ها</li>
        <li>تجویز داروهای مناسب</li>
        <li>برنامه‌ریزی درمانی شخصی‌سازی شده</li>
      </ol>

      <p>برای اطلاعات بیشتر می‌توانید با دکتر امیرحسین پورداود تماس بگیرید. همچنین، می‌توانید از تجربیات دیگر بیماران بهره‌مند شوید.</p>

      <p style="font-style: italic;">توجه: همیشه قبل از شروع هر نوع درمانی با پزشک خود مشورت کنید.</p>
    </div>
   `,
    doctorsReviews: [
      {
        patientName: "فرزاد",
        isVisited: true,
        date: "2025-01-22T11:40:00Z",
        text: "تجربه خوبی داشتم، مشاوره تخصصی و تجویز مناسب برای مشکلات پوستی من.",
        vote: 5,
      },
      {
        patientName: "سمیرا",
        isVisited: true,
        date: "2025-01-21T10:30:00Z",
        text: "نتایج درمانی بسیار خوب، اما هزینه کمی بالا بود.",
        vote: 4,
      },
    ],
  },
  {
    slug: "160d",
    name: "اعظم قهساره اردستانی",
    en_name: "dr-azam-ghahsareh-ardestani",
    price: 350000,
    image:
      "https://cdn.paziresh24.com/getImage/p24/search-women/dc1c321cabe87e09772530d3480d2adc.jpg?size=150",
    isVerified: true,
    averageRating: 4.95,
    totalVotes: 759,
    activeCounsulate: 5,
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
    about: `
 <div>
      <p><strong>دکتر اعظم قهساره اردستانی</strong> یکی از متخصصان برجسته در زمینه <strong>چشم</strong> است. او دارای تجربه‌ای گسترده در درمان بیماری‌های مختلف می‌باشد.</p>
      
      <h2>ویژگی‌های پزشک:</h2>
      
      <ul>
        <li><strong>تجربه:</strong> بیش از 10 سال فعالیت در حوزه پزشکی.</li>
        <li><strong>تحصیلات:</strong> دکترای پزشکی از دانشگاه تهران.</li>
        <li><strong>تخصص:</strong> درمان بیماری‌های مزمن و پیچیده.</li>
      </ul>

      <h2>خدمات ارائه شده:</h2>
      <ol>
        <li>معاینه و تشخیص بیماری‌ها</li>
        <li>تجویز داروهای مناسب</li>
        <li>برنامه‌ریزی درمانی شخصی‌سازی شده</li>
      </ol>

      <p>برای اطلاعات بیشتر می‌توانید با دکتر اعظم قهساره اردستانی تماس بگیرید. همچنین، می‌توانید از تجربیات دیگر بیماران بهره‌مند شوید.</p>

      <p style="font-style: italic;">توجه: همیشه قبل از شروع هر نوع درمانی با پزشک خود مشورت کنید.</p>
    </div>
   `,
    doctorsReviews: [
      {
        patientName: "نیما",
        isVisited: true,
        date: "2025-01-29T13:50:00Z",
        text: "دکتر اردستانی یکی از بهترین‌های تخصص چشم‌پزشکی است، توصیه می‌کنم.",
        vote: 5,
      },
    ],
  },
  {
    slug: "4c81",
    name: "رضا پورعلی",
    en_name: "dr-reza-pourali",
    price: 123000,
    image:
      "https://cdn.paziresh24.com/getImage/p24/search-men/c0a4da00da796354da26c3b1ed016ab3.png?size=150",
    isVerified: true,
    averageRating: 4.8259,
    totalVotes: 305,
    activeCounsulate: 65,
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
    about: `
 <div>
      <p><strong>دکتر رضا پورعلی</strong> یکی از متخصصان برجسته در زمینه <strong>بیماری‌های قلب و عروق</strong> است. او دارای تجربه‌ای گسترده در درمان بیماری‌های مختلف می‌باشد.</p>
      
      <h2>ویژگی‌های پزشک:</h2>
      
      <ul>
        <li><strong>تجربه:</strong> بیش از 10 سال فعالیت در حوزه پزشکی.</li>
        <li><strong>تحصیلات:</strong> دکترای پزشکی از دانشگاه تهران.</li>
        <li><strong>تخصص:</strong> درمان بیماری‌های مزمن و پیچیده.</li>
      </ul>

      <h2>خدمات ارائه شده:</h2>
      <ol>
        <li>معاینه و تشخیص بیماری‌ها</li>
        <li>تجویز داروهای مناسب</li>
        <li>برنامه‌ریزی درمانی شخصی‌سازی شده</li>
      </ol>

      <p>برای اطلاعات بیشتر می‌توانید با دکتر رضا پورعلی تماس بگیرید. همچنین، می‌توانید از تجربیات دیگر بیماران بهره‌مند شوید.</p>

      <p style="font-style: italic;">توجه: همیشه قبل از شروع هر نوع درمانی با پزشک خود مشورت کنید.</p>
    </div>
   `,
    doctorsReviews: [
      {
        patientName: "سعید",
        isVisited: true,
        date: "2025-01-23T16:10:00Z",
        text: "پزشک باتجربه و حرفه‌ای. درمان‌های مؤثری دارند و نتایج عالی بود.",
        vote: 5,
      },
      {
        patientName: "مریم",
        isVisited: false,
        date: "2025-01-19T17:45:00Z",
        text: "به‌زودی برای ویزیت خواهم رفت، اما شنیده‌ام که خیلی دقیق و کاربلد هستند.",
        vote: 4,
      },
    ],
  },
];
