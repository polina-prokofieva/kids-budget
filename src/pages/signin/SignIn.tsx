import { useForm, type SubmitHandler } from "react-hook-form";

import { useSignInMutation } from "../../store/api/authApi";

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

  const [signIn, {isLoading, error}] = useSignInMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    signIn(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign In</h2>
        <input defaultValue="" {...register('email')} />
        {errors.email && <span>Email is required</span>}

        <input defaultValue="" {...register('password')} type="password" />
        {errors.password && <span>Password is required</span>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loggin in...' : "Login"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
