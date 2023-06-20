import React, { useContext } from 'react';
import { SpaceContext } from './space';

export type ItemProps = {
    className?: string;
    children?: React.ReactNode;
    index: number;
    direction?: 'horizontal' | 'vertical';
    split?: string | React.ReactNode;
    wrap?: boolean;
};

const Item: React.FC<ItemProps> = props => {
    const { className, index, split, children, direction, wrap } = props;

    if (children === undefined || children === null) {
        return null;
    }

    const { lastIndex, horizontalSize, verticalSize, supportFlexGap } =
        useContext(SpaceContext);

    let style: React.CSSProperties = {};

    if (!supportFlexGap) {
        if (direction === 'vertical') {
        } else {
        }
    }

    return (
        <>
            <div className={className} style={style}>
                {children}
            </div>
            {index < lastIndex && split && (
                <span className={`${className}-split`} style={style}>
                    {split}
                </span>
            )}
        </>
    );
};

export default Item;
