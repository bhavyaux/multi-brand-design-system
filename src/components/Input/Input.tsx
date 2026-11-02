import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import './Input.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label shown above the field. */
  label?: string;
  /** Helper text shown below the field. Replaced by `error` when both are set. */
  hint?: string;
  /** Error message. When set, the field shows its error state. */
  error?: string;
  /** Icon shown at the start of the field. */
  leadingIcon?: ReactNode;
  /** Icon shown at the end of the field. */
  trailingIcon?: ReactNode;
  /** Icon shown after the label text, for example an info icon. */
  labelIcon?: ReactNode;
  /** Element placed at the trailing end of the field, after `trailingIcon`. Usually a tertiary `Button`. */
  action?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, leadingIcon, trailingIcon, labelIcon, action, id, className, disabled, ...rest }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const message = error ?? hint;
    const messageId = message ? `${inputId}-message` : undefined;

    return (
      <div className={['ds-input', className].filter(Boolean).join(' ')} data-error={error ? '' : undefined} data-disabled={disabled ? '' : undefined}>
        {label && (
          <div className="ds-input__label-row">
            <label className="ds-input__label" htmlFor={inputId}>
              {label}
            </label>
            {labelIcon}
          </div>
        )}
        <div className="ds-input__field">
          {leadingIcon}
          <input
            ref={ref}
            id={inputId}
            className="ds-input__control"
            disabled={disabled}
            aria-invalid={error ? true : undefined}
            aria-describedby={messageId}
            {...rest}
          />
          {trailingIcon}
          {action && <div className="ds-input__action">{action}</div>}
        </div>
        {message && (
          <p id={messageId} className="ds-input__message">
            {message}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
