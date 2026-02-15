import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

import styles from './SignIn.module.less';
import { FormError } from "@ui/form/error/FormError";
import { useSignInMutation } from "@store/api/auth";

type Inputs = {
  email: string;
  password: string;
};

const SignIn = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });

  const [signIn, { isLoading, error }] = useSignInMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    signIn(data);
  };

  return (
    <div className={styles.SignIn}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="" {...register('email')} />
        {errors.email && <FormError>Email is required</FormError>}

        <input defaultValue="" {...register('password')} type="password" />
        {errors.password && <FormError>Password is required</FormError>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loggin in...' : "Login"}
        </button>
      </form>
      <p className={styles.link}>
        <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default SignIn;
