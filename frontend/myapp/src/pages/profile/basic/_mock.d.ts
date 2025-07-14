import type { Request, Response } from 'express';
declare function getProfileBasic(_: Request, res: Response): Response<any, Record<string, any>>;
declare const _default: {
    'GET  /api/profile/basic': typeof getProfileBasic;
};
export default _default;
