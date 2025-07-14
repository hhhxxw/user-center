/// <reference types="qs" />
import type { Request, Response } from 'express';
export type SearchDataType = {
    index: number;
    keyword: string;
    count: number;
    range: number;
    status: number;
};
declare const _default: {
    'GET  /api/project/notice': (_: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => void;
    'GET  /api/activities': (_: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => void;
    'GET  /api/fake_workplace_chart_data': (_: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => void;
};
export default _default;
