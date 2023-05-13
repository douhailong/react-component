import React from 'react';
import { tuple } from './../_util/type';
import type { ButtonHTMLType, ButtonShape, ButtonType } from './buttonHelpers';

export type BaseButtonProps = {
  type?: ButtonType;
  shape?: ButtonShape;
  size?: 'small' | 'middle' | 'large' | undefined;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, 'type' | 'onClick'>;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const Button = () => {
  return <div>Button</div>;
};

export default Button;
