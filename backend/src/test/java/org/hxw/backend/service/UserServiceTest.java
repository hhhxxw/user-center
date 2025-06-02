package org.hxw.backend.service;
import java.util.Date;

import jakarta.annotation.Resource;
import org.hxw.backend.mapper.UserMapper;
import org.hxw.backend.model.domain.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * 用户服务测试
 * @author hxw
 */
@SpringBootTest
public class UserServiceTest {

    @Resource
    private UserService userService;

    @Autowired
    UserMapper userMapper;
    @Test
    public void testAddUser(){
        User user = new User();
        user.setUsername("hxw");
        user.setUserAccount("123");
        user.setAvatarUrl("https://gitee.com/static/images/logo-black.svg?t=158106664");
        user.setGender(0);
        user.setUserPassword("hxw123");
        user.setPhone("123");
        user.setEmail("456");
        boolean result = userService.save(user);
        System.out.println(user.getId());
        // 断言用来测试，实际结果是否等于真实结果
        Assertions.assertTrue(result);

    }

    @Test
    void userRegister() {
        // 定义几个测试参数
        String userAccount = "hxwhhh";
        String userPassword = "77587587758258";
        String checkPassword = "77587587758258";
        long result = userService.userRegister(userAccount, userPassword, checkPassword);
//
//        userAccount = "yu";
//        result = userService.userRegister(userAccount, userPassword, checkPassword);
//        Assertions.assertEquals(-1, result);
//
//        userAccount = "hxw666";
//        userPassword = "123456";
//        result = userService.userRegister(userAccount, userPassword, checkPassword);
//        Assertions.assertEquals(-1, result);
//
//        userAccount = "yu pi";
//        userPassword="12345678";
//        result = userService.userRegister(userAccount, userPassword, checkPassword);
//        Assertions.assertEquals(-1, result);
//
//
//        userAccount = "hxw666";
//        checkPassword = "123456789";
//        result = userService.userRegister(userAccount, userPassword, checkPassword);
//        Assertions.assertEquals(-1, result);
//
//        userAccount = "hxw666";
//        userPassword = "123456789";
//        checkPassword = "123456789";
//        result = userService.userRegister(userAccount, userPassword, checkPassword);
//        Assertions.assertEquals(-1, result);


    }
}