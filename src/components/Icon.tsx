import React from 'react';
import classNames from 'classnames'

export type IconProps = {
  className?: string;
  color?: string;
  rotate?: number;
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive';
  ariaLabel?: string;
  ariaHidden?: boolean;
  style?: React.CSSProperties;
}

export type SvgProps = {
  name?: never;
  as?: never;
  children: React.ReactNode;
};

export type IProps = {
  name: string;
  as?: string;
  children?: never;
};

export const Icon = ({
  as = "i",
  className = 'asm-icon',
  color = '#000',
  name,
  rotate = 0,
  size = 'small',
  ariaLabel,
  ariaHidden,
  children,
  style,
  ...rest
}: IconProps & (SvgProps | IProps)) => {

  const getIconAriaOptions = () => {
    const ariaOptions: any = {};
    if (!ariaLabel) {
      ariaOptions['aria-hidden'] = 'true';
    } else {
      ariaOptions['aria-label'] = ariaLabel;
    }

    if (ariaHidden) {
      ariaOptions['aria-hidden'] = ariaHidden;
    }

    return ariaOptions;
  };

  const ariaOptions = getIconAriaOptions();

  if (!!React.Children.toArray(children).length) {
    return (
      <div
        className={classNames(className, size)}
        style={{ transform: `rotate(${rotate}deg)`, color: color, ...style }}
        {...ariaOptions}
      >
        {children}
      </div>
    )
  }

  const ElementType = as;

  const classes = [
    name,
    size,
    className,
  ];

  return (
    React.createElement(
      ElementType,
      { ...rest, ...ariaOptions, style: { color: color, transform: `rotate(${rotate}deg)` }, className: classNames(classes) }
    )
  );
};

export default Icon;
