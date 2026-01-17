import { useForm } from "react-hook-form";

import { LayoutInside } from "../_layout/LayoutInside";
import { CURRENCIES } from "../../../_consts/currencies";
import { MoneyField } from "../../../_ui/fields/money/MoneyField";

import type { CurrencyCode } from "../../../_types/currency";

type OnboardingInputs = {
  currency: CurrencyCode;
  totalAmount: number;
  regularMonthlyIncome: number;
};

export const OnboardingPage = () => {
  const {
    register,
    watch,
  } = useForm<OnboardingInputs>();

  const selectedCurrency = watch('currency');

  return (
    <LayoutInside title="Onboarding">
      <form>
        <label htmlFor="currency">What currency are you using?</label>
        <select
          id="currency"
          defaultValue={CURRENCIES[1]}
          {...register('currency')}
        >
          {CURRENCIES.map((currency) => (
            <option key={currency} value={currency}>
              {currency} — {new Intl.DisplayNames('en', { type: 'currency' }).of(currency)}
            </option>
          ))}
        </select>

        <label htmlFor="totalAmount">How much money do you have in general?</label>
        <MoneyField
          name="totalAmount"
          currency={selectedCurrency}
          registerField={register('totalAmount', { valueAsNumber: true })}
        />

        <label htmlFor="regularMonthlyIncome">How much money do you get each month?</label>
        <MoneyField
          name="regularMonthlyIncome"
          currency={selectedCurrency}
          registerField={register('regularMonthlyIncome', { valueAsNumber: true })}
        />

        <button type="submit">Save</button>
      </form>
    </LayoutInside>
  );
}
