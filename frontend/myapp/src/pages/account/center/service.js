import { request } from '@umijs/max';
export async function queryCurrent() {
    return request('/api/currentUserDetail');
}
export async function queryFakeList(params) {
    return request('/api/fake_list_Detail', {
        params,
    });
}
