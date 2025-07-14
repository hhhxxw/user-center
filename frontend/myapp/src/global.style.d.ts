declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    colorWeak: {
        filter: "invert(80%)";
    };
    'ant-layout': {
        minHeight: string;
    };
    'ant-pro-sider.ant-layout-sider.ant-pro-sider-fixed': {
        left: string;
    };
    canvas: {
        display: "block";
    };
    body: {
        textRendering: "optimizeLegibility";
        WebkitFontSmoothing: string;
        MozOsxFontSmoothing: string;
    };
    'ul,ol': {
        listStyle: "none";
    };
    '@media(max-width: 768px)': {
        'ant-table': {
            width: string;
            overflowX: "auto";
            '&-thead > tr,    &-tbody > tr': {
                '> th,      > td': {
                    whiteSpace: "pre";
                    '> span': {
                        display: "block";
                    };
                };
            };
        };
    };
}>;
export default useStyles;
