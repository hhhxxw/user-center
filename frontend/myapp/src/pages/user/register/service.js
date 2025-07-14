import { request } from '@umijs/max';
export async function fakeRegister(params) {
    return request('/api/register', {
        method: 'POST',
        data: params,
    });
}
