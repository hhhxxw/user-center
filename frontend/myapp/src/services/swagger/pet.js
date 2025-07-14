// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';
/** Update an existing pet PUT /pet */
export async function updatePet(body, options) {
    return request('/pet', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** Add a new pet to the store POST /pet */
export async function addPet(body, options) {
    return request('/pet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
/** Find pet by ID Returns a single pet GET /pet/${param0} */
export async function getPetById(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    const { petId: param0, ...queryParams } = params;
    return request(`/pet/${param0}`, {
        method: 'GET',
        params: { ...queryParams },
        ...(options || {}),
    });
}
/** Updates a pet in the store with form data POST /pet/${param0} */
export async function updatePetWithForm(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, body, options) {
    const { petId: param0, ...queryParams } = params;
    const formData = new FormData();
    Object.keys(body).forEach((ele) => {
        const item = body[ele];
        if (item !== undefined && item !== null) {
            formData.append(ele, typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item);
        }
    });
    return request(`/pet/${param0}`, {
        method: 'POST',
        params: { ...queryParams },
        data: formData,
        ...(options || {}),
    });
}
/** Deletes a pet DELETE /pet/${param0} */
export async function deletePet(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    const { petId: param0, ...queryParams } = params;
    return request(`/pet/${param0}`, {
        method: 'DELETE',
        headers: {},
        params: { ...queryParams },
        ...(options || {}),
    });
}
/** uploads an image POST /pet/${param0}/uploadImage */
export async function uploadFile(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, body, file, options) {
    const { petId: param0, ...queryParams } = params;
    const formData = new FormData();
    if (file) {
        formData.append('file', file);
    }
    Object.keys(body).forEach((ele) => {
        const item = body[ele];
        if (item !== undefined && item !== null) {
            formData.append(ele, typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item);
        }
    });
    return request(`/pet/${param0}/uploadImage`, {
        method: 'POST',
        params: { ...queryParams },
        data: formData,
        requestType: 'form',
        ...(options || {}),
    });
}
/** Finds Pets by status Multiple status values can be provided with comma separated strings GET /pet/findByStatus */
export async function findPetsByStatus(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    return request('/pet/findByStatus', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}
/** Finds Pets by tags Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing. GET /pet/findByTags */
export async function findPetsByTags(
// 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
params, options) {
    return request('/pet/findByTags', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}
