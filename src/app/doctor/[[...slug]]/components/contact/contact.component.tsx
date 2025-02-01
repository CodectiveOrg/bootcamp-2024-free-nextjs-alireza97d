import { ReactNode } from "react";

import CardComponent from "@/components/card/card.component";

import MingcutePencilLine from "@/icons/MingcutePencilLine";
import MingcuteCalendar2Line from "@/icons/MingcuteCalendar2Line";
import MingcutePhoneLine from "@/icons/MingcutePhoneLine";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";

import styles from "./contact.module.css";

type Props = {
  address: string;
  doctorName: string;
};

const extractCityAndAddress = (fullAddress: string) => {
  const parts = fullAddress.split(/[,.،]/);
  const city = parts[0]?.trim() || "";
  const remainingAddress = parts.slice(1).join(", ").trim();
  return { city, remainingAddress };
};

const ContactComponent: React.FC<Props> = ({
  address,
  doctorName,
}): ReactNode => {
  const { city, remainingAddress } = extractCityAndAddress(address);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>آدرس و تلفن تماس</h2>

        <div className={styles.report}>
          <MingcutePencilLine />
          <span>گزارش تلفن و آدرس صحیح</span>
        </div>
      </div>

      <CardComponent>
        <div className={styles.contact}>
          <strong>مطب دکتر {doctorName}</strong>
          <address>
            <span>{city} - </span>
            <span>{remainingAddress}</span>
          </address>

          <div className={styles.action_btn}>
            <ul>
              <li>
                <button>
                  <MingcuteCalendar2Line />
                  <span>برنامه کاری پزشک</span>
                </button>
              </li>

              <li>
                <a href="tel:02155635553">
                  <button>
                    <MingcutePhoneLine />
                    <span>021-55635553</span>
                  </button>
                </a>
              </li>

              <li>
                <button>
                  <MingcuteLocationLine />
                  <span>مشاهده در نقشه و مسیریابی</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </CardComponent>
    </div>
  );
};

export default ContactComponent;
