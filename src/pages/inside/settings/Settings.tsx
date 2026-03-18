import { LayoutInside } from "../_layout/LayoutInside";
import { IncomeCategories } from "./categories/income/IncomeCategories";

export const Settings = () => {
  return (
    <LayoutInside title='Settings'>
      <section>
        <IncomeCategories />
      </section>
    </LayoutInside>
  );
};
