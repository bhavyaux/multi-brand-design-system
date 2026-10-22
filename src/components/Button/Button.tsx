import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button. */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Size of the button. */
  size?: 'sm' | 'md' | 'lg';
  /** Icon shown before the label. */
  leadingIcon?: ReactNode;
  /** Icon shown after the label. */
  trailingIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', leadingIcon, trailingIcon, children, type = 'button', ...rest },
    ref,
  ) => (
    <button ref={ref} type={type} className="ds-btn" data-variant={variant} data-size={size} {...rest}>
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  ),
);

Button.displayName = 'Button';
