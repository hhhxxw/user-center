import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import type { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export declare function getInitialState(): Promise<{
    settings?: Partial<LayoutSettings>;
    currentUser?: API.CurrentUser;
    loading?: boolean;
    fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}>;
export declare const layout: RunTimeLayoutConfig;
/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export declare const request: RequestConfig;
