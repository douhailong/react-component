import React, { createContext, useMemo } from 'react';
import classNames from 'classnames';
import { toArray } from '../_util/reactNode';
import { tuple } from '../_util/type';
import useSupportFlex from '../_util/hooks/useSupportFlex';
import SpaceItem from './item';

import './style.less';

export const SpaceContext = createContext({
    lastIndex: 0,
    horizontalSize: 0,
    verticalSize: 0,
    supportFlex: false
});

const prefix = 'rc-space';
const SizeTypes = tuple('large', 'middle', 'small');

export type SizeType = (typeof SizeTypes)[number];
export type SpaceSize = SizeType | number;
export type SpaceProps = React.HTMLAttributes<HTMLDivElement> & {
    className: string;
    style: React.CSSProperties;
    size: SpaceSize | [SpaceSize, SpaceSize];
    direction: 'vertical' | 'horizontal';
    align: 'start' | 'end' | 'center' | 'baseline';
    split: React.ReactNode;
    wrap: boolean;
};

const spaceSize = {
    small: 8,
    middle: 16,
    large: 24
};

function getSpaceSize(size: SpaceSize) {
    return typeof size === 'string' ? spaceSize[size] : size || 0;
}

const Space: React.FC<Partial<SpaceProps>> = props => {
    const {
        className,
        style,
        align,
        size = 'small',
        direction = 'horizontal',
        wrap = false,
        split,
        children,
        ...restProps
    } = props;

    const childNodes = toArray(children, { keepEmpty: true });

    const supportFlex = useSupportFlex();

    if (!childNodes.length) {
        return null;
    }

    const mergedAlign =
        align === undefined && direction === 'horizontal' ? 'center' : align;
    const cla = classNames(
        prefix,
        `${prefix}-${direction}`,
        {
            [`${prefix}-align-${mergedAlign}`]: mergedAlign
        },
        className
    );
    const itemClassName = `${prefix}-item`;
    const [horizontalSize, verticalSize] = useMemo(() => {
        return (Array.isArray(size) ? size : [size, size]).map(item =>
            getSpaceSize(item)
        );
    }, [size]);

    let lastIndex = 0;
    const nodes = childNodes.map((child, i) => {
        const key = (child && child.key) || `${itemClassName}-${i}`;

        if (child !== undefined && child !== null) {
            lastIndex = i;
        }

        return (
            <SpaceItem
                className={itemClassName}
                key={key}
                index={i}
                split={split}
                direction={direction}
                wrap={wrap}
            >
                {child}
            </SpaceItem>
        );
    });

    const spaceContext = useMemo(
        () => ({
            horizontalSize,
            verticalSize,
            lastIndex,
            supportFlex
        }),
        [horizontalSize, verticalSize, lastIndex]
    );

    const GapStyle: React.CSSProperties = {};

    if (wrap) {
        GapStyle.flexWrap = 'wrap';

        // if (supportFlex) {
        // GapStyle.marginBottom = -verticalSize;
        // }
    }

    if (supportFlex) {
        GapStyle.columnGap = horizontalSize;
        GapStyle.rowGap = verticalSize;
    }

    return (
        <div className={cla} style={{ ...style, ...GapStyle }} {...restProps}>
            <SpaceContext.Provider value={spaceContext}>
                {nodes}
            </SpaceContext.Provider>
        </div>
    );
};

export default Space;
