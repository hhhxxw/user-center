package org.hxw.backend.common;

import lombok.Data;

/**
 * 返回工具类
 * @author 一只咸鱼的大厂梦-hxw
 * @date 2025-07-28 18:26
 */
public class ResultUtils {
    /**
     * 成功
     * @param data
     * @return
     * @param <T>
     */
    public static <T> BaseReponse<T> success(T data){
        return new BaseReponse<>(0, data, "success");
    }

    /**
     * 失败
     * @param errorCode
     * @return
     */
    public static BaseReponse error(ErrorCode errorCode){
        return new BaseReponse<>(errorCode);
    }
}
