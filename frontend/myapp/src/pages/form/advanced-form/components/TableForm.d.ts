import type { FC } from 'react';
type TableFormDateType = {
    key: string;
    workId?: string;
    name?: string;
    department?: string;
    isNew?: boolean;
    editable?: boolean;
};
type TableFormProps = {
    value?: TableFormDateType[];
    onChange?: (value: TableFormDateType[]) => void;
};
declare const TableForm: FC<TableFormProps>;
export default TableForm;
