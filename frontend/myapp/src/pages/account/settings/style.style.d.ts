declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    main: {
        [x: string]: string | {
            borderBottom: string;
            paddingTop?: undefined;
            paddingBottom?: undefined;
            flexDirection?: undefined;
        } | {
            paddingTop: string;
            paddingBottom: string;
            borderBottom?: undefined;
            flexDirection?: undefined;
        } | {
            flexDirection: "column";
            borderBottom?: undefined;
            paddingTop?: undefined;
            paddingBottom?: undefined;
        };
        display: "flex";
        width: string;
        height: string;
        paddingTop: string;
        paddingBottom: string;
        backgroundColor: string;
        '.ant-list-split .ant-list-item:last-child': {
            borderBottom: string;
        };
        '.ant-list-item': {
            paddingTop: string;
            paddingBottom: string;
        };
    };
    leftMenu: {
        [x: string]: string | {
            border: string;
            fontWeight?: undefined;
            width?: undefined;
        } | {
            fontWeight: "bold";
            border?: undefined;
            width?: undefined;
        } | {
            width: string;
            border: string;
            fontWeight?: undefined;
        };
        width: string;
        borderRight: string;
        '.ant-menu-inline': {
            border: string;
        };
        '.ant-menu-horizontal': {
            fontWeight: "bold";
        };
    };
    right: {
        [x: string]: string | {
            padding: string;
        };
        flex: string;
        padding: string;
    };
    title: {
        marginBottom: string;
        color: string;
        fontWeight: "500";
        fontSize: string;
        lineHeight: string;
    };
    taobao: {
        display: "block";
        color: "#ff4000";
        fontSize: string;
        lineHeight: string;
        borderRadius: number;
    };
    dingding: {
        margin: string;
        padding: string;
        color: "#fff";
        fontSize: string;
        lineHeight: string;
        backgroundColor: "#2eabff";
        borderRadius: number;
    };
    alipay: {
        color: "#2eabff";
        fontSize: string;
        lineHeight: string;
        borderRadius: number;
    };
    ':global': {
        'font.strong': {
            color: string;
        };
        'font.medium': {
            color: string;
        };
        'font.weak': {
            color: string;
        };
    };
}>;
export default useStyles;
