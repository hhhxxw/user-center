import { TableListItem } from './data';
/** 获取规则列表 GET /api/rule */
export declare function rule(params: {
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
}, options?: {
    [key: string]: any;
}): Promise<{
    data: TableListItem[];
    /** 列表的内容总数 */
    total?: number | undefined;
    success?: boolean | undefined;
}>;
/** 新建规则 PUT /api/rule */
export declare function updateRule(data: {
    [key: string]: any;
}, options?: {
    [key: string]: any;
}): Promise<TableListItem>;
/** 新建规则 POST /api/rule */
export declare function addRule(data: {
    [key: string]: any;
}, options?: {
    [key: string]: any;
}): Promise<TableListItem>;
/** 删除规则 DELETE /api/rule */
export declare function removeRule(data: {
    key: number[];
}, options?: {
    [key: string]: any;
}): Promise<Record<string, any>>;
