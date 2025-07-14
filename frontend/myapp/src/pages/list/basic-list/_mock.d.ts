import type { Request, Response } from 'express';
declare function getFakeList(req: Request, res: Response): Response<any, Record<string, any>>;
declare function postFakeList(req: Request, res: Response): Response<any, Record<string, any>>;
declare const _default: {
    'GET  /api/get_list': typeof getFakeList;
    'POST  /api/post_fake_list': typeof postFakeList;
};
export default _default;
