import { ReactElement } from "react";

import { notFound } from "next/navigation";

import InfoCardComponent from "./components/info/info-card.component";
import AboutComponent from "./components/about/about.component";
import ReserveComponent from "./components/reserve/reserve.component";
import LocationComponent from "./components/location/location.component";
import ReviewsComponent from "./components/reviews/reviews.component";
import CounsulationComponent from "./components/counsulation/counsulation.component";

import { DoctorModel } from "@/types/doctor.type";

import { doctorsData } from "@/models/doctors";

import styles from "./page.module.css";

type Props = {
    params: {
        slug: string;
    };
}

const DoctorPage: React.FC<Props> = ({ params }): ReactElement => {
    let slug = "";
    if (!Array.isArray(params.slug)) return notFound();
    if (params.slug.length === 1) {
        slug = params.slug[0];
    } else if (params.slug.length === 2) {
        slug = params.slug[1];
    } else return notFound();


    const doctorDetails = doctorsData.filter((doctor: DoctorModel) => (slug === doctor.slug))[0]

    if (!doctorDetails) return notFound()


    return (
        <div className={styles.page}>
            <div className={styles.detaile}>
                <div className="">
                    <InfoCardComponent doctorDetails={doctorDetails} />
                </div>

                <div className="">
                    <AboutComponent />
                </div>

                <div className="">
                    <ReviewsComponent />
                </div>
            </div>

            <div className={styles.reserve}>
                <div>
                    <CounsulationComponent />
                </div>

                <div>
                    <ReserveComponent />
                </div>

                <div className="">
                    <LocationComponent />
                </div>
            </div>
        </div>
    )
}

export default DoctorPage;
