import { IApartment } from "./apartment";
import { IChildren } from "./childreen";
import { IReward } from "./rewards";

export interface IPerson {
    contactInfo: string
    name: string
    surname: string
    fathername: string
    birthdate: string
    fin: string
    familyAddress: string
    dateOfMartyrdomOrVeteran: string
    regionId: number
    identityPhotoId: string
    children: IChildren[]
    rewards: IReward[]
    apartments: IApartment[]
  }