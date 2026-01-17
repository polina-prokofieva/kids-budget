import { useForm } from "react-hook-form";

import { LayoutInside } from "../_layout/LayoutInside";
import { CURRENCIES } from "../../../_consts/currencies";
import { getCurrencySymbol } from "../../../_utils/currency";
import type { CurrencyCode } from "../../../_types/currency";

import styles from './OnboardingPage.module.less'

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
      <form className={styles.OnboardingPage}>
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
        <div className={styles.amountFieldWrapper}>
          <div className={styles.currencySymbol}>
            {selectedCurrency && getCurrencySymbol(selectedCurrency)}
          </div>
          <input
            id="totalAmount"
            className={styles.amountField}
            type="number"
            placeholder="0.00"
            {...register('totalAmount', { valueAsNumber: true })}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </LayoutInside>
  );
}
