import { MoneyField } from "../../../../../_ui/fields/money/MoneyField";
import type { OnboardingStepComponentProps } from "../../_types/form";

export const TotalAmocnt = ({ register, watch }: OnboardingStepComponentProps) => {
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
    </>
  );
};
