import { useForm } from "react-hook-form";

import { LayoutInside } from "../_layout/LayoutInside";
import { CURRENCIES } from "../../../_consts/currencies";
import { getCurrencySymbol } from "../../../_utils/currency";
import type { CurrencyCode } from "../../../_types/currency";

type OnboardingInputs = {
  currency: CurrencyCode;
  totalAmount: number;
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
        <p>What currency are you using?</p>
        <select defaultValue={CURRENCIES[1]} {...register('currency')}>
          {CURRENCIES.map((currency) => (
            <option key={currency} value={currency}>
              {currency} — {new Intl.DisplayNames('en', { type: 'currency' }).of(currency)}
            </option>
          ))}
        </select>

        <p>How much money do you have in general?</p>
        <input
          type="number"
          placeholder="Amount in selected currency"
          {...register('totalAmount', { valueAsNumber: true })}
        />
        {selectedCurrency && getCurrencySymbol(selectedCurrency)}
        <button type="submit">Save</button>
      </form>
    </LayoutInside>
  );
}
