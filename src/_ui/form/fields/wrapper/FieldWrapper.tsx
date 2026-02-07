import { FormError } from "@ui/form/error/FormError";

type FieldWrapperProps = {
  fieldName: string;
  label?: string;
  isError?: boolean;
  errorMessage: string;
  children: React.ReactNode;
};

export const FieldWrapper = ({
  fieldName,
  label,
  isError = false,
  errorMessage,
  children
}: FieldWrapperProps
) => {
  return (
    <>
      {label && (
        <label htmlFor={fieldName}>{label}</label>
      )}
      {children}
      {isError && errorMessage && (
        <FormError>{errorMessage}</FormError>
      )}
    </>
  );
};