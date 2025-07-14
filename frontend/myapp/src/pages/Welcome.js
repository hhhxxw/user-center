import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme } from 'antd';
/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard = ({ title, href, index, desc }) => {
    const { useToken } = theme;
    const { token } = useToken();
    return (_jsxs("div", { style: {
            backgroundColor: token.colorBgContainer,
            boxShadow: token.boxShadow,
            borderRadius: '8px',
            fontSize: '14px',
            color: token.colorTextSecondary,
            lineHeight: '22px',
            padding: '16px 19px',
            minWidth: '220px',
            flex: 1,
        }, children: [_jsxs("div", { style: {
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center',
                }, children: [_jsx("div", { style: {
                            width: 48,
                            height: 48,
                            lineHeight: '22px',
                            backgroundSize: '100%',
                            textAlign: 'center',
                            padding: '8px 16px 16px 12px',
                            color: '#FFF',
                            fontWeight: 'bold',
                            backgroundImage: "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
                        }, children: index }), _jsx("div", { style: {
                            fontSize: '16px',
                            color: token.colorText,
                            paddingBottom: 8,
                        }, children: title })] }), _jsx("div", { style: {
                    fontSize: '14px',
                    color: token.colorTextSecondary,
                    textAlign: 'justify',
                    lineHeight: '22px',
                    marginBottom: 8,
                }, children: desc }), _jsxs("a", { href: href, target: "_blank", rel: "noreferrer", children: ["\u4E86\u89E3\u66F4\u591A ", '>'] })] }));
};
const Welcome = () => {
    const { token } = theme.useToken();
    const { initialState } = useModel('@@initialState');
    return (_jsx(PageContainer, { children: _jsx(Card, { style: {
                borderRadius: 8,
            }, bodyStyle: {
                backgroundImage: initialState?.settings?.navTheme === 'realDark'
                    ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
                    : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
            }, children: _jsxs("div", { style: {
                    backgroundPosition: '100% -30%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '274px auto',
                    backgroundImage: "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
                }, children: [_jsx("div", { style: {
                            fontSize: '20px',
                            color: token.colorTextHeading,
                        }, children: "\u6B22\u8FCE\u4F7F\u7528 Ant Design Pro" }), _jsx("p", { style: {
                            fontSize: '14px',
                            color: token.colorTextSecondary,
                            lineHeight: '22px',
                            marginTop: 16,
                            marginBottom: 32,
                            width: '65%',
                        }, children: "Ant Design Pro \u662F\u4E00\u4E2A\u6574\u5408\u4E86 umi\uFF0CAnt Design \u548C ProComponents \u7684\u811A\u624B\u67B6\u65B9\u6848\u3002\u81F4\u529B\u4E8E\u5728\u8BBE\u8BA1\u89C4\u8303\u548C\u57FA\u7840\u7EC4\u4EF6\u7684\u57FA\u7840\u4E0A\uFF0C\u7EE7\u7EED\u5411\u4E0A\u6784\u5EFA\uFF0C\u63D0\u70BC\u51FA\u5178\u578B\u6A21\u677F/\u4E1A\u52A1\u7EC4\u4EF6/\u914D\u5957\u8BBE\u8BA1\u8D44\u6E90\uFF0C\u8FDB\u4E00\u6B65\u63D0\u5347\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u8BBE\u8BA1\u7814\u53D1\u8FC7\u7A0B\u4E2D\u7684\u300E\u7528\u6237\u300F\u548C\u300E\u8BBE\u8BA1\u8005\u300F\u7684\u4F53\u9A8C\u3002" }), _jsxs("div", { style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 16,
                        }, children: [_jsx(InfoCard, { index: 1, href: "https://umijs.org/docs/introduce/introduce", title: "\u4E86\u89E3 umi", desc: "umi \u662F\u4E00\u4E2A\u53EF\u6269\u5C55\u7684\u4F01\u4E1A\u7EA7\u524D\u7AEF\u5E94\u7528\u6846\u67B6,umi \u4EE5\u8DEF\u7531\u4E3A\u57FA\u7840\u7684\uFF0C\u540C\u65F6\u652F\u6301\u914D\u7F6E\u5F0F\u8DEF\u7531\u548C\u7EA6\u5B9A\u5F0F\u8DEF\u7531\uFF0C\u4FDD\u8BC1\u8DEF\u7531\u7684\u529F\u80FD\u5B8C\u5907\uFF0C\u5E76\u4EE5\u6B64\u8FDB\u884C\u529F\u80FD\u6269\u5C55\u3002" }), _jsx(InfoCard, { index: 2, title: "\u4E86\u89E3 ant design", href: "https://ant.design", desc: "antd \u662F\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u4E3B\u8981\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002" }), _jsx(InfoCard, { index: 3, title: "\u4E86\u89E3 Pro Components", href: "https://procomponents.ant.design", desc: "ProComponents \u662F\u4E00\u4E2A\u57FA\u4E8E Ant Design \u505A\u4E86\u66F4\u9AD8\u62BD\u8C61\u7684\u6A21\u677F\u7EC4\u4EF6\uFF0C\u4EE5 \u4E00\u4E2A\u7EC4\u4EF6\u5C31\u662F\u4E00\u4E2A\u9875\u9762\u4E3A\u5F00\u53D1\u7406\u5FF5\uFF0C\u4E3A\u4E2D\u540E\u53F0\u5F00\u53D1\u5E26\u6765\u66F4\u597D\u7684\u4F53\u9A8C\u3002" })] })] }) }) }));
};
export default Welcome;
