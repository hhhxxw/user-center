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
     * 用户注册
     * @param userAccount 用户账户
     * @param userPassword 用户密码
     * @param checkPassword 校验密码
     * @return 新用户id
     */
    long userRegister(String userAccount, String userPassword, String checkPassword);

    /**
     * 用户登陆
     * @param userAccount 用户账户
     * @param userPassword 用户密码
     * @return 脱敏后的用户信息
     */
    User userLogin(String userAccount, String userPassword, HttpServletRequest request);
    /**
     * 用户脱敏
     *
     * @param originUser
     * @return
     */
    User getSafetyUser(User originUser);
}
