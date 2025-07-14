import { request } from '@umijs/max';
export async function fakeSubmitForm(params) {
    return request('/api/basicForm', {
        method: 'POST',
        data: params,
    });
}
