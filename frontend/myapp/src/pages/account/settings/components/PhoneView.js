import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from 'antd';
import useStyles from './index.style';
const PhoneView = (props) => {
    const { styles } = useStyles();
    const { value, onChange } = props;
    let values = ['', ''];
    if (value) {
        values = value.split('-');
    }
    return (_jsxs(_Fragment, { children: [_jsx(Input, { className: styles.area_code, value: values[0], onChange: (e) => {
                    if (onChange) {
                        onChange(`${e.target.value}-${values[1]}`);
                    }
                } }), _jsx(Input, { className: styles.phone_number, onChange: (e) => {
                    if (onChange) {
                        onChange(`${values[0]}-${e.target.value}`);
                    }
                }, value: values[1] })] }));
};
export default PhoneView;
