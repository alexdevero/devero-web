import { DocumentData } from 'firebase/firestore'

export type Email = { [x: string]: DocumentData }

export type EmailRecord = {
  [id: string]: {
    message: string;
    email: string;
    name: string;
  };
}
