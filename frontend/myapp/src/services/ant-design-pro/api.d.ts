/** 获取当前的用户 GET /api/currentUser */
export declare function currentUser(options?: {
    [key: string]: any;
}): Promise<{
    data: API.CurrentUser;
}>;
/** 退出登录接口 POST /api/login/outLogin */
export declare function outLogin(options?: {
    [key: string]: any;
}): Promise<Record<string, any>>;
/** 登录接口 POST /api/login/account */
export declare function login(body: API.LoginParams, options?: {
    [key: string]: any;
}): Promise<API.LoginResult>;
/** 此处后端没有提供注释 GET /api/notices */
export declare function getNotices(options?: {
    [key: string]: any;
}): Promise<API.NoticeIconList>;
/** 获取规则列表 GET /api/rule */
export declare function rule(params: {
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
}, options?: {
    [key: string]: any;
}): Promise<API.RuleList>;
/** 更新规则 PUT /api/rule */
export declare function updateRule(options?: {
    [key: string]: any;
}): Promise<API.RuleListItem>;
/** 新建规则 POST /api/rule */
export declare function addRule(options?: {
    [key: string]: any;
}): Promise<API.RuleListItem>;
/** 删除规则 DELETE /api/rule */
export declare function removeRule(options?: {
    [key: string]: any;
}): Promise<Record<string, any>>;
