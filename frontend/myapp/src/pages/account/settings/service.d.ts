import type { CurrentUser, GeographicItemType } from './data';
export declare function queryCurrent(): Promise<{
    data: CurrentUser;
}>;
export declare function queryProvince(): Promise<{
    data: GeographicItemType[];
}>;
export declare function queryCity(province: string): Promise<{
    data: GeographicItemType[];
}>;
export declare function query(): Promise<any>;
