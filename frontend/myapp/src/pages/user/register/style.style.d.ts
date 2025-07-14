declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    main: {
        width: string;
        margin: string;
        h3: {
            marginBottom: string;
            fontSize: string;
        };
    };
    password: {
        marginBottom: string;
        '.ant-form-item-explain': {
            display: "none";
        };
    };
    getCaptcha: {
        display: "block";
        width: string;
    };
    footer: {
        width: string;
        display: "flex";
        alignItems: "center";
        justifyContent: "space-between";
    };
    submit: {
        width: string;
    };
    success: {
        transition: "color 0.3s";
        color: string;
    };
    warning: {
        transition: "color 0.3s";
        color: string;
    };
    error: {
        transition: "color 0.3s";
        color: string;
    };
    'progress-pass > .progress': {
        '.ant-progress-bg': {
            backgroundColor: string;
        };
    };
}>;
export default useStyles;
