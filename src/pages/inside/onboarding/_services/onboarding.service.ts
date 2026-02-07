import { auth, db } from "@fb/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import type { OnboardingValues } from "../_types/form";

export async function saveOnboarding(values: OnboardingValues) {
  const user = auth.currentUser;

  if (!user) throw new Error('No authenticate user');

  const ref = doc(db, 'users', user.uid);

  await setDoc(
    ref,
    {
      ...values,
      onboardingCompleted: true,
      updatedAt: serverTimestamp(),
      createdAt: serverTimestamp(),
    },
    { merge: true }
  );
}
