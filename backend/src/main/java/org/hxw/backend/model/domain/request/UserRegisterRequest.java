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
