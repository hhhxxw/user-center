import { request } from '@umijs/max';
export async function fakeSubmitForm(params) {
    return request('/api/advancedForm', {
        method: 'POST',
        data: params,
    });
}
