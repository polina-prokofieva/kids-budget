import { CURRENCIES } from "../../../../../_consts/currencies";
import type { OnboardingStepComponentProps } from "../../_types/form";

export const Currency = ({
  register
}: OnboardingStepComponentProps) => {
  return (
    <>
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
    </>
  );
}
