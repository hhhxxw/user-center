declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    standardFormRow: {
        display: "flex";
        marginBottom: string;
        paddingBottom: string;
        borderBottom: string;
        '.ant-form-item, .ant-legacy-form-item': {
            marginRight: string;
        };
        '.ant-form-item-label, .ant-legacy-form-item-label': {
            label: {
                marginRight: string;
                color: string;
            };
        };
        '.ant-form-item-label, .ant-legacy-form-item-label, .ant-form-item-control, .ant-legacy-form-item-control': {
            padding: string;
            lineHeight: string;
        };
    };
    label: {
        flex: string;
        marginRight: string;
        color: string;
        fontSize: number;
        textAlign: "right";
        '& > span': {
            display: "inline-block";
            height: string;
            lineHeight: string;
            '&::after': {
                content: "'：'";
            };
        };
    };
    content: {
        flex: string;
        '.ant-form-item, .ant-legacy-form-item': {
            '&:last-child': {
                marginRight: string;
            };
        };
    };
    standardFormRowLast: {
        marginBottom: string;
        paddingBottom: string;
        border: string;
    };
    standardFormRowBlock: {
        '.ant-form-item, .ant-legacy-form-item, div.ant-form-item-control-wrapper, div.ant-legacy-form-item-control-wrapper': {
            display: "block";
        };
    };
    standardFormRowGrid: {
        '.ant-form-item, .ant-legacy-form-item, div.ant-form-item-control-wrapper, div.ant-legacy-form-item-control-wrapper': {
            display: "block";
        };
        '.ant-form-item-label, .ant-legacy-form-item-label': {
            float: "left";
        };
    };
}>;
export default useStyles;
