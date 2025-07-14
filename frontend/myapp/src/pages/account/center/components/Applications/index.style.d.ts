declare const useStyles: (props?: unknown) => import("antd-style").ReturnStyles<{
    filterCardList: {
        marginBottom: string;
        '.ant-card-meta-content': {
            marginTop: string;
        };
        '.ant-card-meta-avatar': {
            fontSize: string;
        };
        '.ant-list .ant-list-item-content-single': {
            maxWidth: string;
        };
    };
    cardInfo: {
        marginTop: string;
        marginLeft: string;
        zoom: "1";
        '&::before, &::after': {
            display: "table";
            content: "' '";
        };
        '&::after': {
            clear: "both";
            height: string;
            fontSize: string;
            visibility: "hidden";
        };
        '& > div': {
            position: "relative";
            float: "left";
            width: string;
            textAlign: "left";
            p: {
                margin: string;
                fontSize: string;
                lineHeight: string;
            };
            'p:first-child': {
                marginBottom: string;
                color: string;
                fontSize: string;
                lineHeight: string;
            };
        };
    };
}>;
export default useStyles;
