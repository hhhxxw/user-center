import { request } from '@umijs/max';
export async function queryFakeList(params) {
    return request('/api/get_list', {
        params,
    });
}
export async function removeFakeList(params) {
    return request('/api/post_fake_list', {
        method: 'POST',
        data: {
            ...params,
            method: 'delete',
        },
    });
}
export async function addFakeList(params) {
    return request('/api/post_fake_list', {
        method: 'POST',
        data: {
            ...params,
            method: 'post',
        },
    });
}
export async function updateFakeList(params) {
    return request('/api/post_fake_list', {
        method: 'POST',
        data: {
            ...params,
            method: 'update',
        },
    });
}
