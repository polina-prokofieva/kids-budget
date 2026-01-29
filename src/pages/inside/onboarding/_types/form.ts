import type { CurrencyCode } from "@t/currency";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormWatch
} from "react-hook-form";

export type OnboardingInputs = {
  currency: CurrencyCode;
  totalAmount: number;
  regularMonthlyIncome: number;
};

export type OnboardingStepComponentProps = {
  register: UseFormRegister<OnboardingInputs>;
  watch: UseFormWatch<OnboardingInputs>;
  errors: FieldErrors<OnboardingInputs>;
};
