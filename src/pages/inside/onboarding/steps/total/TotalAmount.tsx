import { FormError } from "@ui/form/error/FormError";
import { MoneyField } from "@ui/form/fields/money/MoneyField";
import type { OnboardingStepComponentProps } from "../../_types/form";

export const TotalAmocnt = ({
  register,
  watch,
  errors
}: OnboardingStepComponentProps) => {
  const selectedCurrency = watch('currency');

  return (
    <>
      <label htmlFor="totalAmount">
        How much money do you have in general?
      </label>
      <MoneyField
        name="totalAmount"
        currency={selectedCurrency}
        registerField={register('totalAmount', { valueAsNumber: true })}
      />
      {errors.totalAmount && (
        <FormError>This field is required</FormError>
      )}
    </>
  );
};
