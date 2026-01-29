import type { OnboardingStepComponentProps } from "../../_types/form";
import { MoneyField } from "@ui/form/fields/money/MoneyField";
import { FormError } from "@ui/form/error/FormError";

export const MonthlyIncome = ({
  register,
  watch,
  errors
}: OnboardingStepComponentProps) => {
  const selectedCurrency = watch('currency');

  return (
    <>
      <label htmlFor="regularMonthlyIncome">
        How much money do you get each month?
      </label>
      <MoneyField
        name="regularMonthlyIncome"
        currency={selectedCurrency}
        registerField={register(
          'regularMonthlyIncome',
          {
            valueAsNumber: true,
            required: true,
          }
        )}
      />
      {errors.regularMonthlyIncome && (
        <FormError>This field is required</FormError>
      )}
    </>
  );
};
