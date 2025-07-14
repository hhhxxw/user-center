declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    description: {
        maxWidth: string;
        lineHeight: string;
    };
    extra: {
        [x: string]: string | {
            marginLeft: string;
            color: string;
            fontStyle: "normal";
            '& > em'?: undefined;
        } | {
            '& > em': {
                display: "block";
                marginTop: string;
                marginLeft: string;
            };
            marginLeft?: undefined;
            color?: undefined;
            fontStyle?: undefined;
        };
        marginTop: string;
        color: string;
        lineHeight: string;
        '& > em': {
            marginLeft: string;
            color: string;
            fontStyle: "normal";
        };
    };
}>;
export default useStyles;
