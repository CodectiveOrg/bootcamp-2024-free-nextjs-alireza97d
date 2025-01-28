import { GenderEnums } from "@/enums/gender";

export interface Localized<T extends string = string> {
  en: T;
  fa: string;
}

export type AcademicDegree = Localized;
export type Specialty = Localized;
export type City = Localized;
export type Gender = Localized<`${GenderEnums}`>;
export interface Appointment {
  date: string;
  time: string;
}

export interface DoctorModel {
  slug: string;
  name: string;
  en_name: string;
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
