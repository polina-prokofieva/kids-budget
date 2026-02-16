import type {
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';
import type { CurrencyCode } from '@t/currency';

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
