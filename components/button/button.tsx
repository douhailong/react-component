import React, { createRef, forwardRef } from 'react';
import classNames from 'classnames';
import { spaceChildren } from './buttonHelpers';
import './style.less';

export type ButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text';
export type ButtonShape = 'default' | 'circle' | 'round';
export type ButtonSize = 'small' | 'middle' | 'large' | undefined;
export type ButtonHTMLType = React.ButtonHTMLAttributes<HTMLButtonElement>['type'];

export type BaseButtonProps = {
  type?: ButtonType;
  shape?: ButtonShape;
  size?: ButtonSize;
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

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const {
    loading = false,
    type = 'default',
    shape = 'default',
    danger,
    className,
    icon,
    ghost = false,
    block = false,
    disabled,
    size,
    htmlType,
    onClick,
    children,
    ...rest
  } = props;

  const cls = classNames('rc-btn', {
    'rc-btn-primary': true
  });

  function hasBorder(buttonType: ButtonType) {
    return !(buttonType === 'text' || buttonType === 'link');
  }

  function needInsert() {
    return React.Children.count(children) === 1 && hasBorder(type);
  }

  function handleClick(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) {
    if (disabled) {
      return e.preventDefault();
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  }

  const kids = children || children === 0 ? spaceChildren(children, needInsert()) : null;

  if (rest.href !== undefined) {
    return (
      <a {...(rest as AnchorButtonProps)} onClick={handleClick}>
        {kids}
      </a>
    );
  }

  console.log(kids, 'kids');
  return (
    <button {...(rest as NativeButtonProps)} className={cls} type={htmlType} onClick={handleClick}>
      {kids}
    </button>
  );
};

const Button = forwardRef<unknown, ButtonProps>(InternalButton);

export default Button;
