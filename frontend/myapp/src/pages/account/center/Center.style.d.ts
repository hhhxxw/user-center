declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    avatarHolder: {
        marginBottom: string;
        textAlign: "center";
        '& > img': {
            width: string;
            height: string;
            marginBottom: string;
        };
    };
    name: {
        marginBottom: string;
        color: string;
        fontWeight: "500";
        fontSize: string;
        lineHeight: string;
    };
    detail: {
        p: {
            position: "relative";
            marginBottom: string;
            paddingLeft: string;
            '&:last-child': {
                marginBottom: string;
            };
        };
        i: {
            position: "absolute";
            top: string;
            left: string;
            width: string;
            height: string;
        };
    };
    tagsTitle: {
        marginBottom: string;
        color: string;
        fontWeight: "500";
    };
    teamTitle: {
        marginBottom: string;
        color: string;
        fontWeight: "500";
    };
    tags: {
        '.ant-tag': {
            marginBottom: string;
        };
    };
    team: {
        '.ant-avatar': {
            marginRight: string;
        };
        a: {
            display: "block";
            marginBottom: string;
            overflow: "hidden";
            color: string;
            whiteSpace: "nowrap";
            textOverflow: "ellipsis";
            wordBreak: "break-all";
            transition: "color 0.3s";
            '&:hover': {
                color: string;
            };
        };
    };
    tabsCard: {
        '.ant-card-head': {
            padding: string;
        };
    };
}>;
export default useStyles;
