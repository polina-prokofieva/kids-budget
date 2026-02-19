import { useMemo, useState } from 'react';
import {
  type SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useSetUserDocMutation } from '@store/api/user';

import { ONBOARDING_STEPS } from '../_consts/steps';
import type { OnboardingValues } from '../_types/form';
import styles from './OnboardingForm.module.less';

export default function OnboardingForm() {
  const {
    register,
    watch,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<OnboardingValues>();

  const [setUserDoc, { isLoading, error }] =
    useSetUserDocMutation();

  const [step, setStep] = useState<number>(0);
  const [isNextDisabled, setIsNextDisabled] =
    useState<boolean>(false);

  const StepComponent = ONBOARDING_STEPS[step].component;
  const currenctFieldName = ONBOARDING_STEPS[step].name;

  const goToNextStep = async () => {
    const isValid = await trigger(currenctFieldName);

    if (isValid && step < ONBOARDING_STEPS.length - 1) {
      setStep((s) => s + 1);
      setIsNextDisabled(false);
    }

    if (!isValid) setIsNextDisabled(true);
  };

  const goToPreviousStep = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const isFirst = useMemo(() => step === 0, [step]);
  const isLast = useMemo(
    () => step === ONBOARDING_STEPS.length - 1,
    [step],
  );

  const submit: SubmitHandler<OnboardingValues> = async (
    values: OnboardingValues,
  ) => {
    await setUserDoc(values);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <StepComponent
        name={currenctFieldName}
        register={register}
        watch={watch}
        errors={errors}
      />

      <p className={styles.buttons}>
        {!isFirst && (
          <button
            type='button'
            onClick={goToPreviousStep}
          >
            Back
          </button>
        )}

        {isLast ? (
          <button type='submit'>Save</button>
        ) : (
          <button
            type='button'
            onClick={goToNextStep}
            disabled={isNextDisabled}
          >
            Next
          </button>
        )}
      </p>
    </form>
  );
}
