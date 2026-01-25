import { useForm, type SubmitHandler } from "react-hook-form";

import { LayoutInside } from "../_layout/LayoutInside";
import type { OnboardingInputs } from "./_types/form";
import { Currency } from "./steps/currency/Currency";
import { TotalAmocnt } from "./steps/total/TotalAmount";
import { MonthlyIncome } from "./steps/monthly-income/MonthlyIncome";

export const OnboardingPage = () => {
  const {
    register,
    watch,
    handleSubmit,
  } = useForm<OnboardingInputs>();


  const submit: SubmitHandler<OnboardingInputs> = async (values: OnboardingInputs) => {
    console.log('Form submitted');
    console.log('values', values);
  };

  return (
    <LayoutInside title="Onboarding">
      <form onSubmit={handleSubmit(submit)}>
        <Currency register={register} watch={watch} />
        <TotalAmocnt register={register} watch={watch} />
        <MonthlyIncome register={register} watch={watch} />

        <button type="submit">Save</button>
      </form>
    </LayoutInside>
  );
}
