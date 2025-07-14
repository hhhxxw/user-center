import React from 'react';
import type { TableListItem } from '../data';
export type FormValueType = {
    target?: string;
    template?: string;
    type?: string;
    time?: string;
    frequency?: string;
} & Partial<TableListItem>;
export type UpdateFormProps = {
    onCancel: (flag?: boolean, formVals?: FormValueType) => void;
    onSubmit: (values: FormValueType) => Promise<void>;
    updateModalVisible: boolean;
    values: Partial<TableListItem>;
};
declare const UpdateForm: React.FC<UpdateFormProps>;
export default UpdateForm;
