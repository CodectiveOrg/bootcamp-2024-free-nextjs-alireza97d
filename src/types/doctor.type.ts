import { GenderEnums } from "@/enums/gender";

export interface AcademicDegree {
  en: string;
  fa: string;
}

export interface Specialty {
  en: string;
  fa: string;
}

export interface City {
  en: string;
  fa: string;
}

export interface Gender {
  en: `${GenderEnums}`;
  fa: string;
}

export interface Appointment {
  date: string;
  time: string;
}

export interface DoctorModel {
  id: string;
  name: string;
  image: string;
  isVerified: boolean;
  averageRating: number;
  totalVotes: number;
  address: string;
  nextAppointments: Appointment[];
  brief: string;
  badges: string[];
  degree: AcademicDegree;
  specialty: Specialty;
  gender: Gender;
  city: City;
}
