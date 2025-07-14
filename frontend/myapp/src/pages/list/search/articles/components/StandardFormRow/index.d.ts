import React from 'react';
type StandardFormRowProps = {
    title?: string;
    last?: boolean;
    block?: boolean;
    grid?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
};
declare const StandardFormRow: React.FC<StandardFormRowProps>;
export default StandardFormRow;
