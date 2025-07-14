import React from 'react';
type CreateFormProps = {
    modalVisible: boolean;
    children?: React.ReactNode;
    onCancel: () => void;
};
declare const CreateForm: React.FC<CreateFormProps>;
export default CreateForm;
