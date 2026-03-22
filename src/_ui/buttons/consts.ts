import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from 'react';

export type ButtonAppearence =
  | 'primary'
  | 'secondary'
  | 'danger';

export type ButtonVariant = 'normal' | 'alt' | 'link';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  appearance?: ButtonAppearence;
  variant?: ButtonVariant | null;
};
