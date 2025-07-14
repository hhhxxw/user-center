import { request } from '@umijs/max';
export async function queryFakeList(params) {
    return request('/api/fake_list', {
        params,
    });
}
