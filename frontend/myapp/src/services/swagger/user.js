// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';
/** Create user This can only be done by the logged in user. POST /user */
export async function createUser(body, options) {
    return request('/user', {
        method: 'POST',
        data: body,
        ...(options || {}),
    });
}
/** Get user by user name GET /user/${param0} */
export async function getUserByName(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    const { username: param0, ...queryParams } = params;
    return request(`/user/${param0}`, {
        method: 'GET',
        params: { ...queryParams },
        ...(options || {}),
    });
}
/** Updated user This can only be done by the logged in user. PUT /user/${param0} */
export async function updateUser(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, body, options) {
    const { username: param0, ...queryParams } = params;
    return request(`/user/${param0}`, {
        method: 'PUT',
        params: { ...queryParams },
        data: body,
        ...(options || {}),
    });
}
/** Delete user This can only be done by the logged in user. DELETE /user/${param0} */
export async function deleteUser(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    const { username: param0, ...queryParams } = params;
    return request(`/user/${param0}`, {
        method: 'DELETE',
        params: { ...queryParams },
        ...(options || {}),
    });
}
/** Creates list of users with given input array POST /user/createWithArray */
export async function createUsersWithArrayInput(body, options) {
    return request('/user/createWithArray', {
        method: 'POST',
        data: body,
        ...(options || {}),
    });
}
/** Creates list of users with given input array POST /user/createWithList */
export async function createUsersWithListInput(body, options) {
    return request('/user/createWithList', {
        method: 'POST',
        data: body,
        ...(options || {}),
    });
}
/** Logs user into the system GET /user/login */
export async function loginUser(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    return request('/user/login', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}
/** Logs out current logged in user session GET /user/logout */
export async function logoutUser(options) {
    return request('/user/logout', {
        method: 'GET',
        ...(options || {}),
    });
}
