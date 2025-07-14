/** Update an existing pet PUT /pet */
export declare function updatePet(body: API.Pet, options?: {
    [key: string]: any;
}): Promise<any>;
/** Add a new pet to the store POST /pet */
export declare function addPet(body: API.Pet, options?: {
    [key: string]: any;
}): Promise<any>;
/** Find pet by ID Returns a single pet GET /pet/${param0} */
export declare function getPetById(params: API.getPetByIdParams, options?: {
    [key: string]: any;
}): Promise<API.Pet>;
/** Updates a pet in the store with form data POST /pet/${param0} */
export declare function updatePetWithForm(params: API.updatePetWithFormParams, body: {
    name?: string;
    status?: string;
}, options?: {
    [key: string]: any;
}): Promise<any>;
/** Deletes a pet DELETE /pet/${param0} */
export declare function deletePet(params: API.deletePetParams & {
    api_key?: string;
}, options?: {
    [key: string]: any;
}): Promise<any>;
/** uploads an image POST /pet/${param0}/uploadImage */
export declare function uploadFile(params: API.uploadFileParams, body: {
    additionalMetadata?: string;
    file?: string;
}, file?: File, options?: {
    [key: string]: any;
}): Promise<API.ApiResponse>;
/** Finds Pets by status Multiple status values can be provided with comma separated strings GET /pet/findByStatus */
export declare function findPetsByStatus(params: API.findPetsByStatusParams, options?: {
    [key: string]: any;
}): Promise<API.Pet[]>;
/** Finds Pets by tags Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing. GET /pet/findByTags */
export declare function findPetsByTags(params: API.findPetsByTagsParams, options?: {
    [key: string]: any;
}): Promise<API.Pet[]>;
