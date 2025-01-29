
import { ReactNode } from "react";

import CardComponent from "@/components/card/card.component";

import styles from "./about.module.css";

const dangerousHtml = `
 <div>
      <p>پزشک علیرضا یکی از متخصصان برجسته در زمینه <strong>پزشکی داخلی</strong> است. او دارای تجربه‌ای گسترده در درمان بیماری‌های مختلف می‌باشد.</p>
      
      <h2>ویژگی‌های پزشک علیرضا:</h2>
      
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

      <h3 style="background-color: yellow;">آمار و ارقام</h2>
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

      <p>برای اطلاعات بیشتر می‌توانید با پزشک علیرضا تماس بگیرید و یا به وب‌سایت او مراجعه کنید. همچنین، می‌توانید از تجربیات دیگر بیماران بهره‌مند شوید.</p>

      <p style="font-style: italic;">توجه: همیشه قبل از شروع هر نوع درمانی با پزشک خود مشورت کنید.</p>
    </div>
   `;

const AboutComponent = (): ReactNode => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>درباره دکتر</h2>
            </div>
            <CardComponent>
                <div
                    dangerouslySetInnerHTML={{ __html: dangerousHtml }}
                    className={styles.about}
                />
            </CardComponent>
        </div>
    )
}

export default AboutComponent;
