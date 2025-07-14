import type { Request, Response } from 'express';
declare function getFakeList(req: Request, res: Response): Response<any, Record<string, any>>;
declare function getCurrentUser(req: Request, res: Response): Response<any, Record<string, any>>;
declare const _default: {
    'GET  /api/fake_list_Detail': typeof getFakeList;
    'GET  /api/currentUserDetail': typeof getCurrentUser;
};
export default _default;
