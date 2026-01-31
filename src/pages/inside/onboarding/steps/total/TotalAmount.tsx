import { FormError } from "@ui/form/error/FormError";
import { MoneyField } from "@ui/form/fields/money/MoneyField";
import type { OnboardingStepComponentProps } from "../../_types/form";

export const TotalAmocnt = ({
  name,
  register,
  watch,
  errors
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
        registerField={register(name, { valueAsNumber: true })}
      />
      {errors[name] && (
        <FormError>This field is required</FormError>
      )}
    </>
  );
};
