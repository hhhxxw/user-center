// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';
/** 发送验证码 POST /api/login/captcha */
export async function getFakeCaptcha(params, options) {
    return request('/api/login/captcha', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}
