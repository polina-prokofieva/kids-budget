import type { UseFormRegisterReturn } from "react-hook-form";
import type { CurrencyCode } from "../../../_types/currency";
import { getCurrencySymbol } from "../../../_utils/currency";

import styles from './MoneyField.module.less';

type MoneyFieldProps = {
  name: string;
  currency: CurrencyCode;
  registerField: UseFormRegisterReturn;
};

export const MoneyField = ({ name, currency, registerField }: MoneyFieldProps) => {
  return (
    <div className={styles.MoneyField}>
      <div className={styles.currencySymbol}>
        {currency && getCurrencySymbol(currency)}
      </div>
      <input
        id={name}
        className={styles.amountField}
        type="number"
        placeholder="0.00"
        {...registerField}
      />
    </div>
  );
}
