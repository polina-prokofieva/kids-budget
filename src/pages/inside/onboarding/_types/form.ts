import type { UseFormRegister, UseFormWatch } from "react-hook-form";
import type { CurrencyCode } from "../../../../_types/currency";

export type OnboardingInputs = {
  currency: CurrencyCode;
  totalAmount: number;
  regularMonthlyIncome: number;
};

export type OnboardingStepComponentProps = {
  register: UseFormRegister<OnboardingInputs>;
  watch: UseFormWatch<OnboardingInputs>;
};
