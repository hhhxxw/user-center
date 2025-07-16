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

    public String getCheckPassword() {
        return checkPassword;
    }

    public void setCheckPassword(String checkPassword) {
        this.checkPassword = checkPassword;
    }
}
