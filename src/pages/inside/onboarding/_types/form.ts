import type { CurrencyCode } from "@t/currency";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormWatch
} from "react-hook-form";

export type OnboardingValues = {
  currency: CurrencyCode;
  totalAmount: number;
  regularMonthlyIncome: number;
};

export type OnboardingStepComponentProps = {
  name: keyof OnboardingValues;
  register: UseFormRegister<OnboardingValues>;
  watch: UseFormWatch<OnboardingValues>;
  errors: FieldErrors<OnboardingValues>;
};
