package org.hxw.backend.common;


/**错误码
 * @author 一只咸鱼的大厂梦-hxw
 * @date 2025-07-29 18:15
 */
public enum ErrorCode {
    SUCCESS(0, "success", ""),
    PARAMS_ERROR(4000, "请求参数错误", ""),
    NULL_ERROR(4001, "请求参数为空", ""),
    NO_LOGIN(40100, "未登录", ""),
    NO_AUTH(40101, "无权限", "");


    private final int code;
    /**
     * 状态码信息
     */
    private final String message;

    /**
     * 状态码描述
     */
    private final String description;
    /**
     * 构造函数
     * @param code
     * @param message
     * @param description
     */
    ErrorCode(int code, String message, String description) {
        this.code = code;
        this.message = message;
        this.description = description;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    public String getDescription() {
        return description;
    }
}

