import { ReactElement } from "react";

import { notFound } from "next/navigation";

import AboutComponent from "./components/about/about.component";
import ActivitiesComponent from "./components/activities/activities.component";
import CharacteristicsComponent from "./components/characteristics/characteristics.component";
import ContactComponent from "./components/contact/contact.component";
import CounsulationComponent from "./components/counsulation/counsulation.component";
import InfoCardComponent from "./components/info/info-card.component";
import ReserveComponent from "./components/reserve/reserve.component";
import ReviewsWrapperComponent from "./components/reviews/reviews-wrapper-component";
import ReviewsComponent from "./components/reviews/reviews.component";
import ServicesComponent from "./components/services/services.component";

import { doctorsData } from "@/models/doctors";
import { DoctorModel } from "@/types/doctor.type";

import styles from "./page.module.css";

type Props = {
  params: {
    slug: string;
  };
};

const DoctorPage: React.FC<Props> = ({ params }): ReactElement => {
  let slug = "";
  if (!Array.isArray(params.slug)) return notFound();
  if (params.slug.length === 1) {
    slug = params.slug[0];
  } else if (params.slug.length === 2) {
    slug = params.slug[1];
  } else return notFound();

  const doctorDetails = doctorsData.filter(
    (doctor: DoctorModel) => slug === doctor.slug,
  )[0];

  if (!doctorDetails) return notFound();

  return (
    <div className={styles.page}>
      <div className={styles.detaile}>
        <div className="">
          <InfoCardComponent doctorDetails={doctorDetails} />
        </div>

        <div className="">
          <AboutComponent aboutText={doctorDetails?.about} />
        </div>

        <div className="">
          <ActivitiesComponent
            doctorName={doctorDetails?.name}
            activeCounsulate={doctorDetails?.activeCounsulate}
          />
        </div>

        <div className="">
          <ServicesComponent
            doctorName={doctorDetails?.name}
            services={doctorDetails?.services}
          />
        </div>

        <div className="">
          <CharacteristicsComponent
            doctorName={doctorDetails?.name}
            characteristics={doctorDetails?.characteristics}
          />
        </div>

        <div className="">
          <ReviewsWrapperComponent
            doctorsReviews={doctorDetails?.doctorsReviews}
          >
            <ReviewsComponent
              doctorName={doctorDetails?.name}
              totalVotes={doctorDetails?.totalVotes}
              averageRating={doctorDetails?.averageRating}
              doctorsReviews={doctorDetails?.doctorsReviews}
              ratingProgress={doctorDetails?.ratingProgress}
            />
          </ReviewsWrapperComponent>
        </div>
      </div>

      <div className={styles.reserve}>
        <div>
          <CounsulationComponent price={doctorDetails?.price} />
        </div>

        <div>
          <ReserveComponent />
        </div>

        <div className="">
          <ContactComponent
            address={doctorDetails?.address}
            doctorName={doctorDetails?.name}
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
