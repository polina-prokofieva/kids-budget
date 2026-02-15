import type { JSX } from "react";
import { Currency, MonthlyIncome, TotalAmount } from "../form/steps";
import type {
  OnboardingValues,
  OnboardingStepComponentProps
} from "../_types/form";

type StepComponent = (props: OnboardingStepComponentProps) => JSX.Element;

export const ONBOARDING_STEPS: {
  name: keyof OnboardingValues;
  component: StepComponent;
}[] = [
  {
    name: 'currency',
    component: Currency,
  }, {
    name: 'totalAmount',
    component: TotalAmount,
  }, {
    name: 'regularMonthlyIncome',
    component: MonthlyIncome,
  }
] as const;
