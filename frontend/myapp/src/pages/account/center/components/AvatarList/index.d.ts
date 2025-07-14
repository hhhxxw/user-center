import React from 'react';
export declare type SizeType = number | 'small' | 'default' | 'large';
export type AvatarItemProps = {
    tips: React.ReactNode;
    src: string;
    size?: SizeType;
    style?: React.CSSProperties;
    onClick?: () => void;
};
export type AvatarListProps = {
    Item?: React.ReactElement<AvatarItemProps>;
    size?: SizeType;
    maxLength?: number;
    excessItemsStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    children: React.ReactElement<AvatarItemProps> | React.ReactElement<AvatarItemProps>[];
};
declare const Item: React.FC<AvatarItemProps>;
declare const AvatarList: React.FC<AvatarListProps> & {
    Item: typeof Item;
};
export default AvatarList;
