import type { BasicListItemDataType } from './data.d';
type ParamsType = {
    count?: number;
} & Partial<BasicListItemDataType>;
export declare function queryFakeList(params: ParamsType): Promise<{
    data: {
        list: BasicListItemDataType[];
    };
}>;
export declare function removeFakeList(params: ParamsType): Promise<{
    data: {
        list: BasicListItemDataType[];
    };
}>;
export declare function addFakeList(params: ParamsType): Promise<{
    data: {
        list: BasicListItemDataType[];
    };
}>;
export declare function updateFakeList(params: ParamsType): Promise<{
    data: {
        list: BasicListItemDataType[];
    };
}>;
export {};
