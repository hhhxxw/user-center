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
        '.ant-card-body:hover': {
            '.ant-card-meta-title > a': {
                color: string;
            };
        };
    };
    item: {
        height: string;
    };
    cardList: {
        '.ant-list .ant-list-item-content-single': {
            maxWidth: string;
        };
    };
    extraImg: {
        [x: string]: string | {
            width: string;
            display?: undefined;
        } | {
            display: "none";
            width?: undefined;
        };
        width: string;
        marginTop: string;
        textAlign: "center";
        img: {
            width: string;
        };
    };
    newButton: {
        width: string;
        height: string;
        color: string;
        backgroundColor: string;
        borderColor: string;
    };
    cardAvatar: {
        width: string;
        height: string;
        borderRadius: string;
    };
    cardDescription: {
        overflow: "hidden";
        whiteSpace: "nowrap";
        textOverflow: "ellipsis";
        wordBreak: "break-all";
    };
    pageHeaderContent: {
        [x: string]: "relative" | {
            paddingBottom: string;
        };
        position: "relative";
    };
    contentLink: {
        [x: string]: string | {
            marginRight: string;
            img: {
                width: string;
                marginRight?: undefined;
            };
            verticalAlign?: undefined;
            a?: undefined;
            position?: undefined;
            bottom?: undefined;
            left?: undefined;
            width?: undefined;
        } | {
            marginRight: string;
            verticalAlign: string;
            img?: undefined;
            a?: undefined;
            position?: undefined;
            bottom?: undefined;
            left?: undefined;
            width?: undefined;
        } | {
            a: {
                marginRight: string;
            };
            marginRight?: undefined;
            img?: undefined;
            verticalAlign?: undefined;
            position?: undefined;
            bottom?: undefined;
            left?: undefined;
            width?: undefined;
        } | {
            position: "absolute";
            bottom: string;
            left: string;
            width: string;
            a: {
                marginRight: string;
            };
            img: {
                marginRight: string;
                width?: undefined;
            };
            marginRight?: undefined;
            verticalAlign?: undefined;
        };
        marginTop: string;
        a: {
            marginRight: string;
            img: {
                width: string;
            };
        };
        img: {
            marginRight: string;
            verticalAlign: string;
        };
    };
}>;
export default useStyles;
