import { CURRENCIES } from "@consts/currencies";
import { FormError } from "@ui/form/error/FormError";
import type { OnboardingStepComponentProps } from "../../_types/form";

export const Currency = ({
  name,
  register,
  errors
}: OnboardingStepComponentProps) => {
  return (
    <>
      <label htmlFor={name}>What currency are you using?</label>
      <select
        id={name}
        defaultValue={CURRENCIES[1]}
        {...register(name)}
      >
        {CURRENCIES.map((currency) => (
          <option key={currency} value={currency}>
            {currency} — {new Intl.DisplayNames(
              'en',
              { type: 'currency' }
            ).of(currency)}
          </option>
        ))}
      </select>
      {errors[name] && (
        <FormError>This field is required</FormError>
      )}
    </>
  );
}
