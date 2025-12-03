import { auth } from "../../../firebase/firebase";
import { LayoutInside } from "../_layout/LayoutInside";

export default function Profile() {
  const user = auth.currentUser;

  if (!user) return <p>No user logged in</p>;

  return (
    <LayoutInside title="Profile">
      <>
        <p>Name: {user.displayName}</p>
        <p>Email: {user.email}</p>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </>
    </LayoutInside>
  );
}
