import styles from './FormError.module.less';

export const FormError = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.FormError}>
      {children}
    </div>
  );
};
