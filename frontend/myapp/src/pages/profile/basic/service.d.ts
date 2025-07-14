import type { BasicGood, BasicProgress } from './data.d';
export declare function queryBasicProfile(): Promise<{
    data: {
        basicProgress: BasicProgress[];
        basicGoods: BasicGood[];
    };
}>;
