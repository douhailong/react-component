import React from 'react';
import { isFragment } from '../_util/reactNode';

export const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
export const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

export function insertSpace(child: React.ReactChild, needInserted: boolean) {
  if (child === null || child === undefined) return;

  const space = needInserted ? ' ' : '';

  if (
    typeof child !== 'string' &&
    typeof child !== 'number' &&
    typeof child.type === 'string' &&
    isTwoCNChar(child.props.children)
  ) {
    return React.cloneElement(child, {
      children: child.props.children.split('').join(space)
    });
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
  let pre = false;
  const childList: React.ReactNode[] = [];

  React.Children.forEach(children, child => {
    // ['aaa','bbb'] 这种类型children合并进一个元素
    const cur = typeof child === 'string' || typeof child === 'number';
    if (pre && cur) {
      const lastIndex = childList.length - 1;
      const lastChild = childList[lastIndex];

      childList[lastIndex] = `${lastChild}${child}`;
    } else {
      childList.push(child);
    }
    pre = cur;
  });

  return React.Children.map(childList, child => {
    return insertSpace(child as React.ReactChild, needInserted);
  });
}
