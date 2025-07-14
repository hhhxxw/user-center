import type { CurrentUser, ListItemDataType } from './data.d';
export declare function queryCurrent(): Promise<{
    data: CurrentUser;
}>;
export declare function queryFakeList(params: {
    count: number;
}): Promise<{
    data: {
        list: ListItemDataType[];
    };
}>;
