import type { Request, Response } from 'express';
declare function getProvince(_: Request, res: Response): Response<any, Record<string, any>>;
declare function getCity(req: Request, res: Response): Response<any, Record<string, any>>;
declare function getCurrentUse(req: Request, res: Response): Response<any, Record<string, any>>;
declare const _default: {
    'GET  /api/accountSettingCurrentUser': typeof getCurrentUse;
    'GET  /api/geographic/province': typeof getProvince;
    'GET  /api/geographic/city/:province': typeof getCity;
};
export default _default;
