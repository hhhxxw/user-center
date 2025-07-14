import { jsx as _jsx } from "react/jsx-runtime";
import { Modal } from 'antd';
const CreateForm = (props) => {
    const { modalVisible, onCancel } = props;
    return (_jsx(Modal, { destroyOnClose: true, title: "\u65B0\u5EFA\u89C4\u5219", open: modalVisible, onCancel: () => onCancel(), footer: null, children: props.children }));
};
export default CreateForm;
