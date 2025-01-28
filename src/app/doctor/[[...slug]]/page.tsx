import { ReactElement } from "react";

import { notFound } from "next/navigation";

import { DoctorModel } from "@/types/doctor.type";

import { doctorsData } from "@/models/doctors";


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


    const doctorDetails = doctorsData.filter((doctor: DoctorModel) => (slug === doctor.slug))

    if (doctorDetails.length === 0) return notFound()
  

    return (
        <div className=''>{slug}</div>
    )
}

export default DoctorPage;
