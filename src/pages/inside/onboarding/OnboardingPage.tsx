import { LayoutInside } from "../_layout/LayoutInside";
import { OnboardingForm } from "./form/OnboardingForm";

export const OnboardingPage = () => {
  return (
    <LayoutInside title="Onboarding">
      <OnboardingForm />
    </LayoutInside>
  );
}
