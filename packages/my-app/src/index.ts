import { Doctor } from "@my-hospital-sdk/doctor";
import { Patient } from "@my-hospital-sdk/patient";
import { Schedule } from '@my-hospital-sdk/schedule';

console.log(new Doctor().get(1));
console.log(new Schedule());
console.log(new Patient());
