import React from 'react';
export type ApplicationsProps = {
    data: {
        content?: string;
        updatedAt?: any;
        avatar?: string;
        owner?: string;
        href?: string;
    };
};
declare const ArticleListContent: React.FC<ApplicationsProps>;
export default ArticleListContent;
