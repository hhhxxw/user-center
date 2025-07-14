import type { CardListItemDataType } from './data.d';
export declare function queryFakeList(params: {
    count: number;
}): Promise<{
    data: {
        list: CardListItemDataType[];
    };
}>;
