import { CURRENCIES } from "../../../../../_consts/currencies";
import { FormError } from "../../../../../_ui/form/error/FormError";
import type { OnboardingStepComponentProps } from "../../_types/form";

export const Currency = ({
  register,
  errors
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
      {errors.currency && (
        <FormError>This field is required</FormError>
      )}
    </>
  );
}
