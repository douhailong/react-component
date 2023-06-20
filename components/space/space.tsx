import React, { createContext } from 'react';

import Item from './item';

import { toArray } from '../_util/reactNode';

export const SpaceContext = createContext({
  lastIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false
});

export const SizeTypes = ['large', 'middle', 'small'] as const;
export type SizeType = (typeof SizeTypes)[number];

export type SpaceSize = SizeType | number;

export type SpaceProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  style?: React.CSSProperties;
  size?: SpaceSize | [SpaceSize, SpaceSize];
  direction?: 'vertical' | 'horizontal';
  align?: 'start' | 'end' | 'center' | 'baseline';
  split?: React.ReactNode;
  wrap?: boolean;
};

function getSize(size: SpaceSize) {
  const spaceSize = {
    small: 8,
    middle: 16,
    large: 24
  };

  return typeof size === 'string' ? spaceSize[size] : size || 0;
}

const Space: React.FC<SpaceProps> = (props) => {
  const {
    className,
    style,
    size = 'small',
    align,
    direction = 'horizontal',
    wrap,
    split,
    children
  } = props;

  const childNodes = toArray(children, { keepEmpty: true });

  let lastIndex = 0;
  const nodes = childNodes.map((child, i) => {
    if (child !== undefined && child !== null) {
      lastIndex = i;
    }

    return <Item index={i}></Item>;
  });

  console.log('.');

  return (
    <div>
      <SpaceContext.Provider
        value={{ lastIndex: 0, horizontalSize: 0, verticalSize: 0, supportFlexGap: false }}
      >
        {nodes}
      </SpaceContext.Provider>
    </div>
  );
};

export default Space;
