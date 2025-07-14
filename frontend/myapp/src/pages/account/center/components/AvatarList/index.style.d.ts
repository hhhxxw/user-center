declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    avatarList: {
        display: "inline-block";
        ul: {
            display: "inline-block";
            marginLeft: string;
            fontSize: string;
        };
    };
    avatarItem: {
        display: "inline-block";
        width: number;
        height: number;
        marginLeft: string;
        fontSize: number;
        '.ant-avatar': {
            border: string;
        };
    };
    avatarItemLarge: {
        width: number;
        height: number;
    };
    avatarItemSmall: {
        width: number;
        height: number;
    };
    avatarItemMini: {
        width: string;
        height: string;
        '.ant-avatar': {
            width: string;
            height: string;
            lineHeight: string;
            '.ant-avatar-string': {
                fontSize: string;
                lineHeight: string;
            };
        };
    };
}>;
export default useStyles;
