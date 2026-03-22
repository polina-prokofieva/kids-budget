import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from 'react';

export type ButtonAppearence =
  | 'primary'
  | 'secondary'
  | 'danger';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  appearance?: ButtonAppearence;
};
