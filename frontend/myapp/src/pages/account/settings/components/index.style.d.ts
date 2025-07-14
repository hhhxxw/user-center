declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    baseView: {
        [x: string]: string | {
            width: string;
            flexDirection?: undefined;
        } | {
            flexDirection: "column-reverse";
            width?: undefined;
        };
        display: "flex";
        paddingTop: string;
        '.ant-legacy-form-item .ant-legacy-form-item-control-wrapper': {
            width: string;
        };
    };
    left: {
        minWidth: string;
        maxWidth: string;
    };
    right: {
        [x: string]: string | {
            display: "flex";
            flexDirection: "column";
            alignItems: "center";
            maxWidth: string;
            padding: string;
        };
        flex: string;
        paddingLeft: string;
    };
    avatar_title: {
        [x: string]: string | number | {
            display: "none";
        };
        height: string;
        marginBottom: string;
        color: string;
        fontSize: number;
        lineHeight: string;
    };
    avatar: {
        width: string;
        height: string;
        marginBottom: string;
        overflow: "hidden";
        img: {
            width: string;
        };
    };
    button_view: {
        width: string;
        textAlign: "center";
    };
    area_code: {
        width: string;
    };
    phone_number: {
        width: string;
    };
}>;
export default useStyles;
