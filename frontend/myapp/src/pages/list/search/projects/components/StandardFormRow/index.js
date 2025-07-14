import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import useStyles from './index.style';
const StandardFormRow = ({ title, children, last, block, grid, ...rest }) => {
    const { styles } = useStyles();
    const cls = classNames(styles.standardFormRow, {
        [styles.standardFormRowBlock]: block,
        [styles.standardFormRowLast]: last,
        [styles.standardFormRowGrid]: grid,
    });
    return (_jsxs("div", { className: cls, ...rest, children: [title && (_jsx("div", { className: styles.label, children: _jsx("span", { children: title }) })), _jsx("div", { className: styles.content, children: children })] }));
};
export default StandardFormRow;
