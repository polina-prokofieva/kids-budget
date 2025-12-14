import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignUpMutation } from "../../../store/api/authApi";

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

  const [signUp, { isLoading, error }] = useSignUpMutation();

  const onSubmit = (data: Inputs) => {
    signUp(data);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" defaultValue="" {...register('name')} />
        {errors.name && <span>Name is required</span>}

        <input placeholder="Email" defaultValue="" {...register('email')} />
        {errors.name && <span>Email is required</span>}

        <input placeholder="Password" type="password" defaultValue="" {...register('password')} />
        {errors.name && <span>Password is required</span>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Account"}
        </button>
      </form>
      <p>
        Already have an account? Please <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
}
