/** 发送验证码 POST /api/login/captcha */
export declare function getFakeCaptcha(params: {
    /** 手机号 */
    phone?: string;
}, options?: {
    [key: string]: any;
}): Promise<API.FakeCaptcha>;
