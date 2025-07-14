/**
 * @name 代理的配置
 * @see 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 *
 * @doc https://umijs.org/docs/guides/proxy
 */
declare const _default: {
    /**
     * @name 详细的代理配置
     * @doc https://github.com/chimurai/http-proxy-middleware
     */
    test: {
        '/api/': {
            target: string;
            changeOrigin: boolean;
            pathRewrite: {
                '^': string;
            };
        };
    };
    pre: {
        '/api/': {
            target: string;
            changeOrigin: boolean;
            pathRewrite: {
                '^': string;
            };
        };
    };
};
export default _default;
