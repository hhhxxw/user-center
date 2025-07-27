package org.hxw.backend.model.domain;

import lombok.Data;

import java.io.Serial;
import java.io.Serializable;

/**
 * @author 一只咸鱼的大厂梦-hxw
 * @date 2025-07-16 09:44
 */
@Data
public class UserRegisterRequest implements Serializable {
    @Serial
    private static final long serialVersionUID = 5916036764171694762L;

    private String userAccount;
    private String userPassword;
    private String checkPassword;
    private String planetCode;

}
