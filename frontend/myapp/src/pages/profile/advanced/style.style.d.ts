declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    main: {
        '.ant-descriptions-row > td': {
            paddingBottom: string;
        };
        '.ant-page-header-heading-extra': {
            flexDirection: "column";
        };
    };
    headerList: {
        marginBottom: string;
        '.ant-descriptions-row > td': {
            paddingBottom: string;
        };
    };
    stepDescription: {
        [x: string]: string | {
            marginTop: string;
            marginBottom: string;
            left?: undefined;
        } | {
            left: string;
            marginTop?: undefined;
            marginBottom?: undefined;
        };
        position: "relative";
        left: string;
        paddingTop: string;
        fontSize: string;
        textAlign: "left";
        '> div': {
            marginTop: string;
            marginBottom: string;
        };
    };
    pageHeader: {
        [x: string]: {
            marginLeft: string;
            '.ant-pro-page-header-wrap-row'?: undefined;
        } | {
            '.ant-pro-page-header-wrap-row': {
                flexDirection: "column";
            };
            marginLeft?: undefined;
        };
        '.ant-page-header-heading-extra > * + *': {
            marginLeft: string;
        };
    };
    moreInfo: {
        display: "flex";
        justifyContent: "space-between";
        width: string;
    };
}>;
export default useStyles;
