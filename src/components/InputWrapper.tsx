import { Label } from './Label'
import { ErrorType } from "./Input"

export type InputWrapperProps = ErrorType & {
  className?: string;
  labelHidden?: boolean;
  labelClassName?: string;
  htmlFor: string;
  required?: boolean;
  label: string | React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const InputWrapper = ({
  className = 'asm-input',
  labelHidden,
  labelClassName = 'asm-label',
  htmlFor,
  required,
  label,
  error,
  errorClassName = 'asm-input-error',
  children,
  style,
}: InputWrapperProps) => (
  <div className={className} style={style}>
    <Label style={labelHidden ? { visibility: "hidden" } : undefined} className={labelClassName} htmlFor={htmlFor} required={required}>
      {label}
    </Label>
    {children}
    {error && <span className={errorClassName}>{error}</span>}
  </div>
)
