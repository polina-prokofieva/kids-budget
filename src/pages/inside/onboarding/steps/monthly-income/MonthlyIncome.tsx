import type { OnboardingStepComponentProps } from "../../_types/form";
import { MoneyField } from "../../../../../_ui/fields/money/MoneyField";

export const MonthlyIncome = ({ register, watch }: OnboardingStepComponentProps) => {
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
          { valueAsNumber: true }
        )}
      />
    </>
  );
};
