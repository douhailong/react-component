import React from 'react';
import { isFragment } from '../_util/reactNode';

export const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
export const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

export function isString(string: unknown) {
  return typeof string === 'string';
}

export function insertSpace(child: React.ReactChild, needInserted: boolean) {
  if (child === null || child === undefined) return;

  const space = needInserted ? ' ' : '';

  if (
    typeof child !== 'string' &&
    typeof child !== 'number' &&
    isString(child.type) &&
    isTwoCNChar(child.props.children)
  ) {
    return React.cloneElement(child, { children: child.props.children.split('').join(space) });
  }

  if (typeof child === 'string') {
    return isTwoCNChar(child) ? <span>{child.split('').join(space)}</span> : <span>{child}</span>;
  }

  if (isFragment(child)) {
    return <span>{child}</span>;
  }

  return child;
}

export function spaceChildren(children: React.ReactNode, needInserted: boolean) {
  const childList: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {});
}

const ButtonTypes = ['default', 'primary', 'ghost', 'dashed', 'link', 'text'] as const;
export type ButtonType = (typeof ButtonTypes)[number];

const ButtonShapes = ['default', 'circle', 'round'] as const;
export type ButtonShape = (typeof ButtonShapes)[number];

export type ButtonHTMLType = React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
