import { request } from '@umijs/max';
export async function queryBasicProfile() {
    return request('/api/profile/basic');
}
