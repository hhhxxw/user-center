import React from 'react';
type ArticleListContentProps = {
    data: {
        content: React.ReactNode;
        updatedAt: number;
        avatar: string;
        owner: string;
        href: string;
    };
};
declare const ArticleListContent: React.FC<ArticleListContentProps>;
export default ArticleListContent;
