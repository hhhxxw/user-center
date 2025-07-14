import React, { FC } from 'react';
export interface TagSelectOptionProps {
    value: string | number;
    style?: React.CSSProperties;
    checked?: boolean;
    onChange?: (value: string | number, state: boolean) => void;
    children?: React.ReactNode;
}
declare const TagSelectOption: React.FC<TagSelectOptionProps> & {
    isTagSelectOption: boolean;
};
type TagSelectOptionElement = React.ReactElement<TagSelectOptionProps, typeof TagSelectOption>;
export interface TagSelectProps {
    onChange?: (value: (string | number)[]) => void;
    expandable?: boolean;
    value?: (string | number)[];
    defaultValue?: (string | number)[];
    style?: React.CSSProperties;
    hideCheckAll?: boolean;
    actionsText?: {
        expandText?: React.ReactNode;
        collapseText?: React.ReactNode;
        selectAllText?: React.ReactNode;
    };
    className?: string;
    Option?: TagSelectOptionProps;
    children?: TagSelectOptionElement | TagSelectOptionElement[];
}
declare const TagSelect: FC<TagSelectProps> & {
    Option: typeof TagSelectOption;
};
export default TagSelect;
