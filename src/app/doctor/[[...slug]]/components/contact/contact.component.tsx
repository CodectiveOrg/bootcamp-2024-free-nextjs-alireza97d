
import { ReactNode } from "react";

import CardComponent from "@/components/card/card.component";

import styles from "./contact.module.css";

const ContactComponent = (): ReactNode => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>آدرس و تلفن تماس</h2>
                <span className={styles.report}>
                    گزارش تلفن و آدرس صحیح
                </span>
            </div>

            <CardComponent>
                <div className={styles.contact}>
                    <strong>مطب دکتر معصومه دلجو</strong>
                    <address>
                        <span>تهران - </span>
                        <span>تهران، وحدت اسلامی، رازی</span>
                    </address>

                    <div className={styles.action_btn}>
                        <ul>
                            <li>
                                <button>
                                    <span>
                                        برنامه کاری پزشک
                                    </span>
                                </button>
                            </li>

                            <li>
                                <button>
                                    <a href="tel:02155635553">021-55635553</a>
                                </button>
                            </li>

                            <li>
                                <button>
                                    <span>
                                        مشاهده در نقشه و مسیریابی
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </CardComponent>
        </div>
    )
}

export default ContactComponent;
