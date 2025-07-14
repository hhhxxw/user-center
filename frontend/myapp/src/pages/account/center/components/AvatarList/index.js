import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Tooltip } from 'antd';
import classNames from 'classnames';
import React from 'react';
import useStyles from './index.style';
const Item = ({ src, size, tips, onClick = () => { } }) => {
    const { styles } = useStyles();
    const avatarSizeToClassName = (size) => classNames(styles.avatarItem, {
        [styles.avatarItemLarge]: size === 'large',
        [styles.avatarItemSmall]: size === 'small',
        [styles.avatarItemMini]: size === 'mini',
    });
    const cls = avatarSizeToClassName(size);
    return (_jsx("li", { className: cls, onClick: onClick, children: tips ? (_jsx(Tooltip, { title: tips, children: _jsx(Avatar, { src: src, size: size, style: {
                    cursor: 'pointer',
                } }) })) : (_jsx(Avatar, { src: src, size: size })) }));
};
const AvatarList = ({ children, size, maxLength = 5, excessItemsStyle, ...other }) => {
    const { styles } = useStyles();
    const numOfChildren = React.Children.count(children);
    const numToShow = maxLength >= numOfChildren ? numOfChildren : maxLength;
    const childrenArray = React.Children.toArray(children);
    const childrenWithProps = childrenArray.slice(0, numToShow).map((child) => React.cloneElement(child, {
        size,
    }));
    if (numToShow < numOfChildren) {
        const cls = avatarSizeToClassName(size);
        childrenWithProps.push(_jsx("li", { className: cls, children: _jsx(Avatar, { size: size, style: excessItemsStyle, children: `+${numOfChildren - maxLength}` }) }, "exceed"));
    }
    return (_jsx("div", { ...other, className: styles.avatarList, children: _jsxs("ul", { children: [" ", childrenWithProps, " "] }) }));
};
AvatarList.Item = Item;
export default AvatarList;
