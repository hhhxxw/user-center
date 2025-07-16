package org.hxw.backend.model.domain;

import lombok.Data;

import java.io.Serial;
import java.io.Serializable;

/**
 * @author 一只咸鱼的大厂梦-hxw
 * @date 2025-07-16 10:31
 */
@Data
public class UserLoginRequest implements Serializable {
    @Serial
    private static final long serialVersionUID = -2277642946560067603L;
    private String userAccount;
    private String userPassword;

    public String getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(String userAccount) {
        this.userAccount = userAccount;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }
}
