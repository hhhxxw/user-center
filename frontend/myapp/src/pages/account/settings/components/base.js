import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { UploadOutlined } from '@ant-design/icons';
import { ProForm, ProFormDependency, ProFormFieldSet, ProFormSelect, ProFormText, ProFormTextArea, } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Button, Input, message, Upload } from 'antd';
import { queryCity, queryCurrent, queryProvince } from '../service';
import useStyles from './index.style';
const validatorPhone = (rule, value, callback) => {
    if (!value[0]) {
        callback('Please input your area code!');
    }
    if (!value[1]) {
        callback('Please input your phone number!');
    }
    callback();
};
const BaseView = () => {
    const { styles } = useStyles();
    // 头像组件 方便以后独立，增加裁剪之类的功能
    const AvatarView = ({ avatar }) => (_jsxs(_Fragment, { children: [_jsx("div", { className: styles.avatar_title, children: "\u5934\u50CF" }), _jsx("div", { className: styles.avatar, children: _jsx("img", { src: avatar, alt: "avatar" }) }), _jsx(Upload, { showUploadList: false, children: _jsx("div", { className: styles.button_view, children: _jsxs(Button, { children: [_jsx(UploadOutlined, {}), "\u66F4\u6362\u5934\u50CF"] }) }) })] }));
    const { data: currentUser, loading } = useRequest(() => {
        return queryCurrent();
    });
    const getAvatarURL = () => {
        if (currentUser) {
            if (currentUser.avatar) {
                return currentUser.avatar;
            }
            const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
            return url;
        }
        return '';
    };
    const handleFinish = async () => {
        message.success('更新基本信息成功');
    };
    return (_jsx("div", { className: styles.baseView, children: loading ? null : (_jsxs(_Fragment, { children: [_jsx("div", { className: styles.left, children: _jsxs(ProForm, { layout: "vertical", onFinish: handleFinish, submitter: {
                            searchConfig: {
                                submitText: '更新基本信息',
                            },
                            render: (_, dom) => dom[1],
                        }, initialValues: {
                            ...currentUser,
                            phone: currentUser?.phone.split('-'),
                        }, hideRequiredMark: true, children: [_jsx(ProFormText, { width: "md", name: "email", label: "\u90AE\u7BB1", rules: [
                                    {
                                        required: true,
                                        message: '请输入您的邮箱!',
                                    },
                                ] }), _jsx(ProFormText, { width: "md", name: "name", label: "\u6635\u79F0", rules: [
                                    {
                                        required: true,
                                        message: '请输入您的昵称!',
                                    },
                                ] }), _jsx(ProFormTextArea, { name: "profile", label: "\u4E2A\u4EBA\u7B80\u4ECB", rules: [
                                    {
                                        required: true,
                                        message: '请输入个人简介!',
                                    },
                                ], placeholder: "\u4E2A\u4EBA\u7B80\u4ECB" }), _jsx(ProFormSelect, { width: "sm", name: "country", label: "\u56FD\u5BB6/\u5730\u533A", rules: [
                                    {
                                        required: true,
                                        message: '请输入您的国家或地区!',
                                    },
                                ], options: [
                                    {
                                        label: '中国',
                                        value: 'China',
                                    },
                                ] }), _jsxs(ProForm.Group, { title: "\u6240\u5728\u7701\u5E02", size: 8, children: [_jsx(ProFormSelect, { rules: [
                                            {
                                                required: true,
                                                message: '请输入您的所在省!',
                                            },
                                        ], width: "sm", fieldProps: {
                                            labelInValue: true,
                                        }, name: "province", className: styles.item, request: async () => {
                                            return queryProvince().then(({ data }) => {
                                                return data.map((item) => {
                                                    return {
                                                        label: item.name,
                                                        value: item.id,
                                                    };
                                                });
                                            });
                                        } }), _jsx(ProFormDependency, { name: ['province'], children: ({ province }) => {
                                            return (_jsx(ProFormSelect, { params: {
                                                    key: province?.value,
                                                }, name: "city", width: "sm", rules: [
                                                    {
                                                        required: true,
                                                        message: '请输入您的所在城市!',
                                                    },
                                                ], disabled: !province, className: styles.item, request: async () => {
                                                    if (!province?.key) {
                                                        return [];
                                                    }
                                                    return queryCity(province.key || '').then(({ data }) => {
                                                        return data.map((item) => {
                                                            return {
                                                                label: item.name,
                                                                value: item.id,
                                                            };
                                                        });
                                                    });
                                                } }));
                                        } })] }), _jsx(ProFormText, { width: "md", name: "address", label: "\u8857\u9053\u5730\u5740", rules: [
                                    {
                                        required: true,
                                        message: '请输入您的街道地址!',
                                    },
                                ] }), _jsxs(ProFormFieldSet, { name: "phone", label: "\u8054\u7CFB\u7535\u8BDD", rules: [
                                    {
                                        required: true,
                                        message: '请输入您的联系电话!',
                                    },
                                    {
                                        validator: validatorPhone,
                                    },
                                ], children: [_jsx(Input, { className: styles.area_code }), _jsx(Input, { className: styles.phone_number })] })] }) }), _jsx("div", { className: styles.right, children: _jsx(AvatarView, { avatar: getAvatarURL() }) })] })) }));
};
export default BaseView;
