declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    listItemMetaTitle: {
        color: string;
    };
    listItemExtra: {
        [x: string]: string | {
            width: string;
            height: string;
        };
        width: string;
        height: string;
    };
    selfTrigger: {
        [x: string]: string | {
            display: "block";
            marginLeft: string;
        };
        marginLeft: string;
    };
}>;
export default useStyles;
