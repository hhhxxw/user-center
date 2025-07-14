import type { ListItemDataType, Params } from './data.d';
export declare function queryFakeList(params: Params): Promise<{
    data: {
        list: ListItemDataType[];
    };
}>;
