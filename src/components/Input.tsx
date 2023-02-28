import React, { ReactNode } from 'react';
import { Icon } from "./Icon"
import { InputWrapper } from "./InputWrapper"

export type ErrorType = {
  error?: string;
  errorClassName?: string;
}

export type InputProps = ErrorType & {
  id: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  labelClassName?: string;
  labelHidden?: boolean;
  placeholder?: string;
  type?: 'text' | 'url' | 'time' | 'tel' | 'search' | 'range' | 'password' | 'number' | 'email' | 'month' | 'week' | 'date' | 'datetime-local' | 'color';
  min?: number;
  max?: number;
  step?: number;
  icon?: string | ReactNode;
  iconColor?: string;
  loading?: boolean;
  iconPosition?: 'left' | 'right';
  onKeyDown?: any;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
};

export const Input = ({
  type = 'text',
  className = 'asm-input',
  disabled = false,
  required = false,
  labelHidden = false,
  placeholder,
  id,
  onChange,
  onClick,
  loading,
  value,
  label,
  labelClassName,
  error,
  errorClassName,
  style,
  icon,
  iconPosition,
  iconColor = '#333',
  min,
  max,
  step,
  ...rest
}: InputProps): JSX.Element => (
  <InputWrapper
    labelHidden={labelHidden}
    labelClassName={labelClassName}
    htmlFor={id}
    required={required}
    label={label}
    error={error}
    className={className}
    errorClassName={errorClassName}
    style={style}
  >
    {icon && iconPosition === "left" &&
      <span className="input-icon-left">{
        typeof icon === "string" ? <Icon color={iconColor} size='small' name={icon} /> : <Icon color={iconColor} size='small'>{icon}</Icon>
      }</span>
    }
    <input
      id={id}
      type={type}
      aria-labelledby={id}
      aria-label={label}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      onChange={onChange}
      onClick={onClick}
      value={value}
      min={min}
      max={max}
      step={step}
      {...rest}
    />
    {icon && iconPosition === "right" &&
      <span className="input-icon-right">{
        typeof icon === "string" ? <Icon color={iconColor} size='small' name={icon} /> : <Icon color={iconColor} size='small'>{icon}</Icon>
      }</span>
    }
  </InputWrapper>
);
