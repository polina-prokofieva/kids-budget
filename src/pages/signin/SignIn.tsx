import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const SignIn = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign In</h2>
        <input defaultValue="" {...register('email')} />
        {errors.email && <span>Email is required</span>}

        <input defaultValue="" {...register('password')} type="password" />
        {errors.password && <span>Password is required</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
