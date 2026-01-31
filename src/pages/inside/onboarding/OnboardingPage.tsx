import { useForm, type SubmitHandler } from "react-hook-form";

import { LayoutInside } from "../_layout/LayoutInside";
import type { OnboardingInputs } from "./_types/form";
import { useMemo, useState } from "react";
import { ONBOARDING_STEPS } from "./_consts/steps";

import styles from "./OnboardingPage.module.less";

export const OnboardingPage = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<OnboardingInputs>();

  const [step, setStep] = useState<number>(0);

  const StepComponent = ONBOARDING_STEPS[step].component;

  const goToNextStep = () => {
    if (step < ONBOARDING_STEPS.length - 1)
      setStep((s) => s + 1);
  }

  const goToPreviousStep = () => {
    if (step > 0)
      setStep((s) => s - 1);
  }

  const isFirst = useMemo(() => step === 0, [step]);
  const isLast = useMemo(() => step === ONBOARDING_STEPS.length - 1, [step]);

  const submit: SubmitHandler<OnboardingInputs> = async (values: OnboardingInputs) => {
    console.log('Form submitted');
    console.log('values', values);
    console.log('errors', errors);
  };

  return (
    <LayoutInside title="Onboarding">
      <form onSubmit={handleSubmit(submit)}>
        <StepComponent
          name={ONBOARDING_STEPS[step].name}
          register={register}
          watch={watch}
          errors={errors}
        />

        <p className={styles.buttons}>
          {!isFirst && <button
            type="button"
            onClick={goToPreviousStep}
          >
            Back
          </button>}

          {isLast ? <button type="submit">Save</button> : <button
            type="button"
            onClick={goToNextStep}
          >
            Next
          </button>}
        </p>
      </form>
    </LayoutInside>
  );
}
