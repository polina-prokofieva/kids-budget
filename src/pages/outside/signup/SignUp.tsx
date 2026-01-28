import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignUpMutation } from "../../../store/api/authApi";
import { FormError } from "../../../_ui/form/error/FormError";

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
        {errors.name && <FormError>Name is required</FormError>}

        <input placeholder="Email" defaultValue="" {...register('email')} />
        {errors.name && <FormError>Email is required</FormError>}

        <input placeholder="Password" type="password" defaultValue="" {...register('password')} />
        {errors.name && <FormError>Password is required</FormError>}

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
