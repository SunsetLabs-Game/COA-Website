import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function addEmailToWaitlist(email: string) {
  await addDoc(collection(db, "waitlist"), {
    email,
    createdAt: Timestamp.now(),
  });
}
