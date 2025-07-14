import type { ListItemDataType, Params } from './data';
export declare function queryFakeList(params: Params): Promise<{
    data: {
        list: ListItemDataType[];
    };
}>;
