package org.hxw.backend.service;

import com.baomidou.mybatisplus.extension.service.IService;
import jakarta.servlet.http.HttpServletRequest;
import org.hxw.backend.model.domain.User;

import java.net.http.HttpClient;

/**
 * 用户服务
 * @author  hxw
 */
public interface UserService extends IService<User> {
    /**
     * 用户登陆状态
     */
    String USER_LOGIN_STATE = "userLoginState";

    /**
     * 用户注册
     * @param userAccount
     * @param userPassword
     * @param checkPassword
     * @return 用户id
     */
    public long userRegister(String userAccount, String userPassword, String checkPassword, String planetCode);


    /**
     *
     * @param userAccount
     * @param userPassword
     * @return
     */
    User doLogin(String userAccount, String userPassword, HttpServletRequest request);

    User getSafetyUser(User originUser);


    int userLogout(HttpServletRequest request);
}
