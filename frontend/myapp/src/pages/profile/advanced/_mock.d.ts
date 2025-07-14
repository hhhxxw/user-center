import type { Request, Response } from 'express';
declare function getProfileAdvancedData(req: Request, res: Response): Response<any, Record<string, any>>;
declare const _default: {
    'GET  /api/profile/advanced': typeof getProfileAdvancedData;
};
export default _default;
