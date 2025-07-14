declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    standardList: {
        [x: string]: {
            borderBottom: string;
            padding?: undefined;
            lineHeight?: undefined;
            marginTop?: undefined;
            textAlign?: undefined;
            width?: undefined;
            height?: undefined;
            '.ant-list-item-content'?: undefined;
            '.ant-list-item-action'?: undefined;
        } | {
            padding: string;
            lineHeight: string;
            borderBottom?: undefined;
            marginTop?: undefined;
            textAlign?: undefined;
            width?: undefined;
            height?: undefined;
            '.ant-list-item-content'?: undefined;
            '.ant-list-item-action'?: undefined;
        } | {
            padding: string;
            borderBottom?: undefined;
            lineHeight?: undefined;
            marginTop?: undefined;
            textAlign?: undefined;
            width?: undefined;
            height?: undefined;
            '.ant-list-item-content'?: undefined;
            '.ant-list-item-action'?: undefined;
        } | {
            marginTop: string;
            textAlign: "right";
            borderBottom?: undefined;
            padding?: undefined;
            lineHeight?: undefined;
            width?: undefined;
            height?: undefined;
            '.ant-list-item-content'?: undefined;
            '.ant-list-item-action'?: undefined;
        } | {
            width: string;
            height: string;
            lineHeight: string;
            borderBottom?: undefined;
            padding?: undefined;
            marginTop?: undefined;
            textAlign?: undefined;
            '.ant-list-item-content'?: undefined;
            '.ant-list-item-action'?: undefined;
        } | {
            '.ant-list-item-content': {
                display: "block";
                flex: string;
                width: string;
            };
            '.ant-list-item-action': {
                marginLeft: string;
            };
            borderBottom?: undefined;
            padding?: undefined;
            lineHeight?: undefined;
            marginTop?: undefined;
            textAlign?: undefined;
            width?: undefined;
            height?: undefined;
        };
        '.ant-card-head': {
            borderBottom: string;
        };
        '.ant-card-head-title': {
            padding: string;
            lineHeight: string;
        };
        '.ant-card-extra': {
            padding: string;
        };
        '.ant-list-pagination': {
            marginTop: string;
            textAlign: "right";
        };
        '.ant-avatar-lg': {
            width: string;
            height: string;
            lineHeight: string;
        };
    };
    headerInfo: {
        [x: string]: "center" | "relative" | {
            display: "inline-block";
            marginBottom: string;
            color: string;
            fontSize: number;
            lineHeight: string;
            margin?: undefined;
            position?: undefined;
            top?: undefined;
            right?: undefined;
            width?: undefined;
            height?: undefined;
            backgroundColor?: undefined;
            '& > em'?: undefined;
        } | {
            margin: string;
            color: string;
            fontSize: string;
            lineHeight: string;
            display?: undefined;
            marginBottom?: undefined;
            position?: undefined;
            top?: undefined;
            right?: undefined;
            width?: undefined;
            height?: undefined;
            backgroundColor?: undefined;
            '& > em'?: undefined;
        } | {
            position: "absolute";
            top: string;
            right: string;
            width: string;
            height: string;
            backgroundColor: string;
            display?: undefined;
            marginBottom?: undefined;
            color?: undefined;
            fontSize?: undefined;
            lineHeight?: undefined;
            margin?: undefined;
            '& > em'?: undefined;
        } | {
            marginBottom: string;
            '& > em': {
                display: "none";
            };
            display?: undefined;
            color?: undefined;
            fontSize?: undefined;
            lineHeight?: undefined;
            margin?: undefined;
            position?: undefined;
            top?: undefined;
            right?: undefined;
            width?: undefined;
            height?: undefined;
            backgroundColor?: undefined;
        };
        position: "relative";
        textAlign: "center";
        '& > span': {
            display: "inline-block";
            marginBottom: string;
            color: string;
            fontSize: number;
            lineHeight: string;
        };
        '& > p': {
            margin: string;
            color: string;
            fontSize: string;
            lineHeight: string;
        };
        '& > em': {
            position: "absolute";
            top: string;
            right: string;
            width: string;
            height: string;
            backgroundColor: string;
        };
    };
    listContent: {
        [x: string]: string | {
            marginLeft: string;
            '& > div': {
                marginLeft: string;
                display?: undefined;
            };
            '& > div:last-child'?: undefined;
            textAlign?: undefined;
        } | {
            '& > div': {
                display: "block";
                marginLeft?: undefined;
            };
            '& > div:last-child': {
                top: string;
                width: string;
            };
            marginLeft?: undefined;
            textAlign?: undefined;
        } | {
            '& > div': {
                marginLeft: string;
                display?: undefined;
            };
            '& > div:last-child': {
                top: string;
                width?: undefined;
            };
            marginLeft?: undefined;
            textAlign?: undefined;
        } | {
            textAlign: "right";
            '& > div:last-child': {
                top: string;
                width?: undefined;
            };
            marginLeft?: undefined;
            '& > div'?: undefined;
        };
        fontSize: string;
        '@media screen and (max-width: 1400px)': {
            textAlign: "right";
            '& > div:last-child': {
                top: string;
            };
        };
    };
    listContentItem: {
        display: "inline-block";
        marginLeft: string;
        color: string;
        fontSize: number;
        verticalAlign: string;
        '> span': {
            lineHeight: string;
        };
        '> p': {
            marginTop: string;
            marginBottom: string;
            lineHeight: string;
        };
    };
    extraContentSearch: {
        [x: string]: string | {
            width: string;
            marginLeft: string;
        };
        width: string;
        marginLeft: string;
    };
    listCard: {
        [x: string]: {
            '.ant-card-head-title': {
                overflow: "open";
            };
            '.ant-radio-group'?: undefined;
        } | {
            '.ant-radio-group': {
                display: "block";
                marginBottom: string;
            };
            '.ant-card-head-title'?: undefined;
        };
    };
    standardListForm: {
        '.ant-form-item': {
            marginBottom: string;
            '&:last-child': {
                marginBottom: string;
                paddingTop: string;
            };
        };
    };
    formResult: {
        width: string;
        "[class^='title']": {
            marginBottom: string;
        };
    };
}>;
export default useStyles;
