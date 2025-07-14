import type { Request, Response } from 'express';
declare function getFakeList(req: Request, res: Response): Response<any, Record<string, any>>;
declare const _default: {
    'GET  /api/fake_list': typeof getFakeList;
};
export default _default;
