import type { OnboardingStepComponentProps } from '@pages/inside/onboarding/_types/form';
import { FormError } from '@ui/form/error/FormError';
import { MoneyField } from '@ui/form/fields/money/MoneyField';

export const TotalAmount = ({
  name,
  register,
  watch,
  errors,
}: OnboardingStepComponentProps) => {
  const selectedCurrency = watch('currency');

  return (
    <>
      <label htmlFor={name}>
        How much money do you have in general?
      </label>
      <MoneyField
        name={name}
        currency={selectedCurrency}
        registerField={register(name, {
          valueAsNumber: true,
        })}
      />
      {errors[name] && (
        <FormError>This field is required</FormError>
      )}
    </>
  );
};
