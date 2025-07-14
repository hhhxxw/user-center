import type { FC } from 'react';
import type { BasicListItemDataType } from '../data.d';
type OperationModalProps = {
    done: boolean;
    open: boolean;
    current: Partial<BasicListItemDataType> | undefined;
    onDone: () => void;
    onSubmit: (values: BasicListItemDataType) => void;
    children?: React.ReactNode;
};
declare const OperationModal: FC<OperationModalProps>;
export default OperationModal;
