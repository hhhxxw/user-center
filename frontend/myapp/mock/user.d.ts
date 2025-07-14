import { Request, Response } from 'express';
declare function getFakeCaptcha(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    'GET /api/currentUser': (req: Request, res: Response) => void;
    'GET /api/users': {
        key: string;
        name: string;
        age: number;
        address: string;
    }[];
    'POST /api/login/account': (req: Request, res: Response) => Promise<void>;
    'POST /api/login/outLogin': (req: Request, res: Response) => void;
    'POST /api/register': (req: Request, res: Response) => void;
    'GET /api/500': (req: Request, res: Response) => void;
    'GET /api/404': (req: Request, res: Response) => void;
    'GET /api/403': (req: Request, res: Response) => void;
    'GET /api/401': (req: Request, res: Response) => void;
    'GET  /api/login/captcha': typeof getFakeCaptcha;
};
export default _default;
