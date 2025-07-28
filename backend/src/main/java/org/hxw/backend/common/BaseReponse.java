package org.hxw.backend.common;

import java.io.Serializable;

/**
 *
 * @author 一只咸鱼的大厂梦-hxw
 * @date 2025-07-28 18:15
 */
public class BaseReponse<T> implements Serializable {
    private int code;
    private T data;
    private String message;

    public BaseReponse() {
    }

    /**
     * 构造函数
     * @param code 响应状态码， 请求处理结果
     * @param data 泛型类型，用于承载具体的业务数据
     * @param message 响应消息，描述响应的状态信息或错误详情
     */

    public BaseReponse(int code, T data, String message) {
        this.code = code;
        this.data = data;
        this.message = message;
    }
    public BaseReponse(int code, T data) {
       this(code, data, "");
    }

}
