import { request } from '@umijs/max';
export async function fakeSubmitForm(params) {
    return request('/api/stepForm', {
        method: 'POST',
        data: params,
    });
}
