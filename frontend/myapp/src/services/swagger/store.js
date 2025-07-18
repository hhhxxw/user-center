// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';
/** Returns pet inventories by status Returns a map of status codes to quantities GET /store/inventory */
export async function getInventory(options) {
    return request('/store/inventory', {
        method: 'GET',
        ...(options || {}),
    });
}
/** Place an order for a pet POST /store/order */
export async function placeOrder(body, options) {
    return request('/store/order', {
        method: 'POST',
        data: body,
        ...(options || {}),
    });
}
/** Find purchase order by ID For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions GET /store/order/${param0} */
export async function getOrderById(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    const { orderId: param0, ...queryParams } = params;
    return request(`/store/order/${param0}`, {
        method: 'GET',
        params: { ...queryParams },
        ...(options || {}),
    });
}
/** Delete purchase order by ID For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors DELETE /store/order/${param0} */
export async function deleteOrder(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    const { orderId: param0, ...queryParams } = params;
    return request(`/store/order/${param0}`, {
        method: 'DELETE',
        params: { ...queryParams },
        ...(options || {}),
    });
}
