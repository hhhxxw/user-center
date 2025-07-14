import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ClusterOutlined, ContactsOutlined, HomeOutlined, PlusOutlined } from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Avatar, Card, Col, Divider, Input, Row, Tag } from 'antd';
import { useRef, useState } from 'react';
import useStyles from './Center.style';
import Applications from './components/Applications';
import Articles from './components/Articles';
import Projects from './components/Projects';
import { queryCurrent } from './service';
const operationTabList = [
    {
        key: 'articles',
        tab: (_jsxs("span", { children: ["\u6587\u7AE0", ' ', _jsx("span", { style: {
                        fontSize: 14,
                    }, children: "(8)" })] })),
    },
    {
        key: 'applications',
        tab: (_jsxs("span", { children: ["\u5E94\u7528", ' ', _jsx("span", { style: {
                        fontSize: 14,
                    }, children: "(8)" })] })),
    },
    {
        key: 'projects',
        tab: (_jsxs("span", { children: ["\u9879\u76EE", ' ', _jsx("span", { style: {
                        fontSize: 14,
                    }, children: "(8)" })] })),
    },
];
const TagList = ({ tags }) => {
    const { styles } = useStyles();
    const ref = useRef(null);
    const [newTags, setNewTags] = useState([]);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const showInput = () => {
        setInputVisible(true);
        if (ref.current) {
            // eslint-disable-next-line no-unused-expressions
            ref.current?.focus();
        }
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleInputConfirm = () => {
        let tempsTags = [...newTags];
        if (inputValue && tempsTags.filter((tag) => tag.label === inputValue).length === 0) {
            tempsTags = [
                ...tempsTags,
                {
                    key: `new-${tempsTags.length}`,
                    label: inputValue,
                },
            ];
        }
        setNewTags(tempsTags);
        setInputVisible(false);
        setInputValue('');
    };
    return (_jsxs("div", { className: styles.tags, children: [_jsx("div", { className: styles.tagsTitle, children: "\u6807\u7B7E" }), (tags || []).concat(newTags).map((item) => (_jsx(Tag, { children: item.label }, item.key))), inputVisible && (_jsx(Input, { ref: ref, type: "text", size: "small", style: {
                    width: 78,
                }, value: inputValue, onChange: handleInputChange, onBlur: handleInputConfirm, onPressEnter: handleInputConfirm })), !inputVisible && (_jsx(Tag, { onClick: showInput, style: {
                    borderStyle: 'dashed',
                }, children: _jsx(PlusOutlined, {}) }))] }));
};
const Center = () => {
    const { styles } = useStyles();
    const [tabKey, setTabKey] = useState('articles');
    //  获取用户信息
    const { data: currentUser, loading } = useRequest(() => {
        return queryCurrent();
    });
    //  渲染用户信息
    const renderUserInfo = ({ title, group, geographic }) => {
        return (_jsxs("div", { className: styles.detail, children: [_jsxs("p", { children: [_jsx(ContactsOutlined, { style: {
                                marginRight: 8,
                            } }), title] }), _jsxs("p", { children: [_jsx(ClusterOutlined, { style: {
                                marginRight: 8,
                            } }), group] }), _jsxs("p", { children: [_jsx(HomeOutlined, { style: {
                                marginRight: 8,
                            } }), (geographic || {
                            province: {
                                label: '',
                            },
                        }).province.label, (geographic || {
                            city: {
                                label: '',
                            },
                        }).city.label] })] }));
    };
    // 渲染tab切换
    const renderChildrenByTabKey = (tabValue) => {
        if (tabValue === 'projects') {
            return _jsx(Projects, {});
        }
        if (tabValue === 'applications') {
            return _jsx(Applications, {});
        }
        if (tabValue === 'articles') {
            return _jsx(Articles, {});
        }
        return null;
    };
    return (_jsx(GridContent, { children: _jsxs(Row, { gutter: 24, children: [_jsx(Col, { lg: 7, md: 24, children: _jsx(Card, { bordered: false, style: {
                            marginBottom: 24,
                        }, loading: loading, children: !loading && currentUser && (_jsxs("div", { children: [_jsxs("div", { className: styles.avatarHolder, children: [_jsx("img", { alt: "", src: currentUser.avatar }), _jsx("div", { className: styles.name, children: currentUser.name }), _jsx("div", { children: currentUser?.signature })] }), renderUserInfo(currentUser), _jsx(Divider, { dashed: true }), _jsx(TagList, { tags: currentUser.tags || [] }), _jsx(Divider, { style: {
                                        marginTop: 16,
                                    }, dashed: true }), _jsxs("div", { className: styles.team, children: [_jsx("div", { className: styles.teamTitle, children: "\u56E2\u961F" }), _jsx(Row, { gutter: 36, children: currentUser.notice &&
                                                currentUser.notice.map((item) => (_jsx(Col, { lg: 24, xl: 12, children: _jsxs("a", { href: item.href, children: [_jsx(Avatar, { size: "small", src: item.logo }), item.member] }) }, item.id))) })] })] })) }) }), _jsx(Col, { lg: 17, md: 24, children: _jsx(Card, { className: styles.tabsCard, bordered: false, tabList: operationTabList, activeTabKey: tabKey, onTabChange: (_tabKey) => {
                            setTabKey(_tabKey);
                        }, children: renderChildrenByTabKey(tabKey) }) })] }) }));
};
export default Center;
