import type { Request, Response } from 'express';
declare function getRule(req: Request, res: Response, u: string): Response<any, Record<string, any>>;
declare function postRule(req: Request, res: Response, u: string, b: Request): void;
declare const _default: {
    'GET /api/rule': typeof getRule;
    'POST /api/rule': typeof postRule;
    'DELETE /api/rule': typeof postRule;
    'PUT /api/rule': typeof postRule;
};
export default _default;
