package org.hxw.backend.model.domain.request;

import lombok.Data;
import org.apache.ibatis.annotations.Delete;

import java.io.Serial;
import java.io.Serializable;

/**
 * 用户注册发请求体
 * @author hxw
 */
@Data
public class UserRegisterRequest implements Serializable {
    @Serial
    private static final long serialVersionUID = -1595015387232640803L;

    private String userAccount;

    private String userPassword;

    private String checkPassword;
}
