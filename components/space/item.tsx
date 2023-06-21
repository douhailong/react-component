import React, { useContext } from 'react';
import { SpaceContext } from '.';

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

    const { lastIndex, horizontalSize, verticalSize, supportFlex } =
        useContext(SpaceContext);

    // 兼容不支持 flex gap

    // let style: React.CSSProperties = {};

    // if (!supportFlex) {
    //     if (direction === 'vertical') {
    //         console.log(index, lastIndex, 'tttttt');
    //         if (index < lastIndex) {
    //             style = { marginBottom: horizontalSize };
    //         }
    //     } else {
    //         if (index < lastIndex) {
    //             style = { marginBottom: horizontalSize };
    //         }
    //     }
    // }

    return (
        <>
            <div className={className}>{children}</div>
            {index < lastIndex && split && (
                <span className={`${className}-split`}>{split}</span>
            )}
        </>
    );
};

export default Item;
