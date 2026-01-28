import type { JSX } from "react";
import { Currency, MonthlyIncome, TotalAmocnt } from "../steps";
import type { OnboardingStepComponentProps } from "../_types/form";

type StepComponent = (props: OnboardingStepComponentProps) => JSX.Element;

export const ONBOARDING_STEPS = [
  Currency,
  TotalAmocnt,
  MonthlyIncome,
] as const satisfies readonly StepComponent[];
