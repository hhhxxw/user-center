import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import classNames from 'classnames';
import { useMergedState } from 'rc-util';
import React, { useState } from 'react';
import useStyles from './index.style';
const { CheckableTag } = Tag;
const TagSelectOption = ({ children, checked, onChange, value }) => (_jsx(CheckableTag, { checked: !!checked, onChange: (state) => onChange && onChange(value, state), children: children }, value));
TagSelectOption.isTagSelectOption = true;
const TagSelect = (props) => {
    const { styles } = useStyles();
    const { children, hideCheckAll = false, className, style, expandable, actionsText = {} } = props;
    const [expand, setExpand] = useState(false);
    const [value, setValue] = useMergedState(props.defaultValue || [], {
        value: props.value,
        defaultValue: props.defaultValue,
        onChange: props.onChange,
    });
    const isTagSelectOption = (node) => node &&
        node.type &&
        (node.type.isTagSelectOption || node.type.displayName === 'TagSelectOption');
    const getAllTags = () => {
        const childrenArray = React.Children.toArray(children);
        const checkedTags = childrenArray
            .filter((child) => isTagSelectOption(child))
            .map((child) => child.props.value);
        return checkedTags || [];
    };
    const onSelectAll = (checked) => {
        let checkedTags = [];
        if (checked) {
            checkedTags = getAllTags();
        }
        setValue(checkedTags);
    };
    const handleTagChange = (tag, checked) => {
        const checkedTags = [...(value || [])];
        const index = checkedTags.indexOf(tag);
        if (checked && index === -1) {
            checkedTags.push(tag);
        }
        else if (!checked && index > -1) {
            checkedTags.splice(index, 1);
        }
        setValue(checkedTags);
    };
    const checkedAll = getAllTags().length === value?.length;
    const { expandText = '展开', collapseText = '收起', selectAllText = '全部' } = actionsText;
    const cls = classNames(styles.tagSelect, className, {
        [styles.hasExpandTag]: expandable,
        [styles.expanded]: expand,
    });
    return (_jsxs("div", { className: cls, style: style, children: [hideCheckAll ? null : (_jsx(CheckableTag, { checked: checkedAll, onChange: onSelectAll, children: selectAllText }, "tag-select-__all__")), children &&
                React.Children.map(children, (child) => {
                    if (isTagSelectOption(child)) {
                        return React.cloneElement(child, {
                            key: `tag-select-${child.props.value}`,
                            value: child.props.value,
                            checked: value && value.indexOf(child.props.value) > -1,
                            onChange: handleTagChange,
                        });
                    }
                    return child;
                }), expandable && (_jsx("a", { className: styles.trigger, onClick: () => {
                    setExpand(!expand);
                }, children: expand ? (_jsxs(_Fragment, { children: [collapseText, " ", _jsx(UpOutlined, {})] })) : (_jsxs(_Fragment, { children: [expandText, _jsx(DownOutlined, {})] })) }))] }));
};
TagSelect.Option = TagSelectOption;
export default TagSelect;
