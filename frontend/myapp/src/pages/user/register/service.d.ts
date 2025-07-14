export interface StateType {
    status?: 'ok' | 'error';
    currentAuthority?: 'user' | 'guest' | 'admin';
}
export interface UserRegisterParams {
    mail: string;
    password: string;
    confirm: string;
    mobile: string;
    captcha: string;
    prefix: string;
}
export declare function fakeRegister(params: UserRegisterParams): Promise<any>;
