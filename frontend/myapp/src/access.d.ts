/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: {
    currentUser?: API.CurrentUser;
} | undefined): {
    canAdmin: boolean | undefined;
};
