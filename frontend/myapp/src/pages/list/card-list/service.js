import { request } from '@umijs/max';
export async function queryFakeList(params) {
    return request('/api/card_fake_list', {
        params,
    });
}
