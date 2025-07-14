declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    tagSelect: {
        position: "relative";
        maxHeight: string;
        marginLeft: string;
        overflow: "hidden";
        lineHeight: string;
        transition: "all 0.3s";
        userSelect: "none";
        '.ant-tag': {
            marginRight: string;
            padding: string;
            fontSize: number;
        };
    };
    trigger: {
        position: "absolute";
        top: string;
        right: string;
        'span.anticon': {
            fontSize: string;
        };
    };
    expanded: {
        maxHeight: string;
        transition: "all 0.3s";
    };
    hasExpandTag: {
        paddingRight: string;
    };
}>;
export default useStyles;
