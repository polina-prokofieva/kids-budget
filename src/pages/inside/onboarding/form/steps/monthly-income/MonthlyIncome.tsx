import type { OnboardingStepComponentProps } from "../../_types/form";
import { MoneyField } from "@ui/form/fields/money/MoneyField";
import { FormError } from "@ui/form/error/FormError";

export const MonthlyIncome = ({
  name,
  register,
  watch,
  errors
}: OnboardingStepComponentProps) => {
  const selectedCurrency = watch('currency');

  return (
    <>
      <label htmlFor={name}>
        How much money do you get each month?
      </label>
      <MoneyField
        name={name}
        currency={selectedCurrency}
        registerField={register(
          name,
          {
            valueAsNumber: true,
            required: true,
          }
        )}
      />
      {errors[name] && (
        <FormError>This field is required</FormError>
      )}
    </>
  );
};
