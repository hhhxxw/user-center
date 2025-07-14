declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    card: {
        '.ant-card-meta-title': {
            marginBottom: string;
            '& > a': {
                display: "inline-block";
                maxWidth: string;
                color: string;
            };
        };
        '.ant-card-meta-description': {
            height: string;
            overflow: "hidden";
            lineHeight: string;
        };
        '&:hover': {
            '.ant-card-meta-title > a': {
                color: string;
            };
        };
    };
    cardItemContent: {
        display: "flex";
        height: string;
        marginTop: string;
        marginBottom: string;
        lineHeight: string;
        '& > span': {
            flex: string;
            color: string;
            fontSize: string;
        };
    };
    avatarList: {
        flex: string;
    };
    cardList: {
        marginTop: string;
    };
    coverCardList: {
        '.ant-list .ant-list-item-content-single': {
            maxWidth: string;
        };
    };
}>;
export default useStyles;
