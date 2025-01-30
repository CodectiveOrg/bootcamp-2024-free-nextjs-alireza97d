import { ReactElement } from "react";

import MingcuteThumbUp2Line from "@/icons/MingcuteThumbUp2Line";
import MingcuteShare2Line from "@/icons/MingcuteShare2Line";
import MingcuteMore2Line from "@/icons/MingcuteMore2Line";

import styles from "./review-item.module.css"

const ReviewItemComponent = (): ReactElement => {
    return (
        <div className={styles.container}>

            <div className={styles.user_info}>
                <div className={styles.owner}>
                    <div className={styles.image}>
                        <span>س</span>
                    </div>

                    <div className={styles.name_container}>
                        <div className={styles.name}>
                            <span>مسعود</span>
                            <span>ویزیت شده</span>
                        </div>
                        <div className={styles.date}>
                            <span>
                                شش روز پیش
                            </span>

                            &nbsp;<span>|</span>&nbsp;
                            
                            <span>
                                ویزیت آنلاین پذیرش24
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.rate_container}>
                    <span className={styles.rate}>5</span>

                    <div className={styles.more_btn}>
                        <MingcuteMore2Line />
                    </div>
                </div>
            </div>

            <p className={styles.text}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

            </p>

            <div className={styles.action_btn}>
                <button>
                    <MingcuteThumbUp2Line />
                    <span>
                        چقدر مفید بود؟
                    </span>
                </button>

                <button>
                    <MingcuteShare2Line />
                    <span>
                        ارسال کن
                    </span>
                </button>
            </div>
        </div>
    )
}

export default ReviewItemComponent;
