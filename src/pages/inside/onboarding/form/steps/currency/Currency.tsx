import { CURRENCIES } from "@consts/currencies";
import type { OnboardingStepComponentProps } from "../../_types/form";
import { FieldWrapper } from "@ui/form/fields/wrapper/FieldWrapper";

export const Currency = ({
  name,
  register,
  errors
}: OnboardingStepComponentProps) => {
  return (
    <FieldWrapper
      fieldName={name}
      label="What currency are you using?"
      isError={!!errors[name]}
      errorMessage='This field is required'
    >
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
    </FieldWrapper>
  );
}
