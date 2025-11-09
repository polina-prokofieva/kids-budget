import { auth } from "../../firebase/firebase";

export default function Profile() {
  const user = auth.currentUser;

  if (!user) return <p>No user logged in</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
}
