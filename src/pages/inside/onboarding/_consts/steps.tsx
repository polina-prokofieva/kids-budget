import type { JSX } from 'react';

import type {
  OnboardingStepComponentProps,
  OnboardingValues,
} from '../_types/form';
import Currency from '../form/steps/currency/Currency';
import MonthlyIncome from '../form/steps/monthly-income/MonthlyIncome';
import TotalAmount from '../form/steps/total/TotalAmount';

type StepComponent = (
  props: OnboardingStepComponentProps,
) => JSX.Element;

export const ONBOARDING_STEPS: {
  name: keyof OnboardingValues;
  component: StepComponent;
}[] = [
  {
    name: 'currency',
    component: Currency,
  },
  {
    name: 'totalAmount',
    component: TotalAmount,
  },
  {
    name: 'regularMonthlyIncome',
    component: MonthlyIncome,
  },
] as const;
