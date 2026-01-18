import { useEffect, useState } from "react";

import { auth } from "../../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

import { LayoutInside } from "../_layout/LayoutInside";
import type { UserDoc } from "../../../_types/users";

export default function Profile() {
  const user = auth.currentUser;

  const [userDoc, setUserDoc] = useState<UserDoc | null>(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    if (!user) return;

    const currentUser = user;

    async function loadUserDoc() {
      const ref = doc(db, "users", currentUser.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setUserDoc(snap.data() as UserDoc);
      }

      setLoading(false);
    }

    loadUserDoc();
  }, [user]);

  if (!user) return <p>No user logged in</p>;
  if (loading) return <p>Loading…</p>;

  return (
    <LayoutInside title="Profile">
      <section>
        <p>Name: {user.displayName}</p>
        <p>Email: {user.email}</p>

        {userDoc && (
          <>
            <hr />
            <p>Currency: {userDoc.currency}</p>
            <p>Starting balance: {userDoc.startingBalance}</p>
          </>
        )}

        <button onClick={() => auth.signOut()}>Sign out</button>
      </section>
    </LayoutInside>
  );
}
