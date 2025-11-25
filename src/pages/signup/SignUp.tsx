import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ name, email, password }) => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCred.user, { displayName: name });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign Up</h2>

      <input placeholder="Name" defaultValue="" {...register('name')} />
      {errors.name && <span>Name is required</span>}

      <input placeholder="Email"  defaultValue="" {...register('email')} />
      {errors.name && <span>Email is required</span>}

      <input placeholder="Password" type="password" defaultValue="" {...register('password')} />
      {errors.name && <span>Password is required</span>}

      <button type="submit">Create Account</button>
    </form>
  );
}
