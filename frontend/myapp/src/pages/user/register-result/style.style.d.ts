declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    registerResult: {
        width: string;
        minHeight: string;
        margin: string;
        padding: string;
        background: string;
    };
    anticon: {
        fontSize: string;
    };
    title: {
        marginTop: string;
        fontSize: string;
        lineHeight: string;
    };
    actions: {
        marginTop: string;
        'a + a': {
            marginLeft: string;
        };
    };
}>;
export default useStyles;
