import React from 'react';

export function isFragment(children: React.ReactNode) {
    return React.isValidElement(children) && children.type === React.Fragment;
}

export function toArray(
    children: React.ReactNode,
    option: { keepEmpty?: boolean } = {}
): React.ReactElement[] {
    let ret: React.ReactElement[] = [];

    React.Children.forEach(children, (child: React.ReactElement) => {
        if ((child === null || child === undefined) && !option.keepEmpty)
            return;

        if (Array.isArray(child)) {
            ret = [...ret, ...toArray(child)];
        } else if (isFragment(child) && child?.props?.children) {
            ret = [...ret, ...toArray(child?.props?.children, option)];
        } else {
            ret.push(child);
        }
    });

    return ret;
}
