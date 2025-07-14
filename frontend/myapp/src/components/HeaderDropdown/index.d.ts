import type { DropDownProps } from 'antd/es/dropdown';
import React from 'react';
export type HeaderDropdownProps = {
    overlayClassName?: string;
    placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight' | 'bottomCenter';
} & Omit<DropDownProps, 'overlay'>;
declare const HeaderDropdown: React.FC<HeaderDropdownProps>;
export default HeaderDropdown;
