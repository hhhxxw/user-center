/** Create user This can only be done by the logged in user. POST /user */
export declare function createUser(body: API.User, options?: {
    [key: string]: any;
}): Promise<any>;
/** Get user by user name GET /user/${param0} */
export declare function getUserByName(params: API.getUserByNameParams, options?: {
    [key: string]: any;
}): Promise<API.User>;
/** Updated user This can only be done by the logged in user. PUT /user/${param0} */
export declare function updateUser(params: API.updateUserParams, body: API.User, options?: {
    [key: string]: any;
}): Promise<any>;
/** Delete user This can only be done by the logged in user. DELETE /user/${param0} */
export declare function deleteUser(params: API.deleteUserParams, options?: {
    [key: string]: any;
}): Promise<any>;
/** Creates list of users with given input array POST /user/createWithArray */
export declare function createUsersWithArrayInput(body: API.User[], options?: {
    [key: string]: any;
}): Promise<any>;
/** Creates list of users with given input array POST /user/createWithList */
export declare function createUsersWithListInput(body: API.User[], options?: {
    [key: string]: any;
}): Promise<any>;
/** Logs user into the system GET /user/login */
export declare function loginUser(params: API.loginUserParams, options?: {
    [key: string]: any;
}): Promise<string>;
/** Logs out current logged in user session GET /user/logout */
export declare function logoutUser(options?: {
    [key: string]: any;
}): Promise<any>;
