import React, { useContext } from 'react';

import SpaceContext from './index';

export type ItemProps = {
  className?: string;
  children?: React.ReactNode;
  index: number;
  direction?: 'horizontal' | 'vertical';
  split?: string | React.ReactNode;
  wrap?: boolean;
};

const Item: React.FC<ItemProps> = (props) => {
  const { className, index, split, children } = props;

  if (children === undefined || children === null) {
    return null;
  }

  return (
    <>
      <div>{children}</div>
      {index < lastIndex && split && <span className={`${className}-split`}>{split}</span>}
    </>
  );
};

export default Item;
