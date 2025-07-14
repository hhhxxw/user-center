package org.hxw.backend.service;
import java.util.Date;

import jakarta.annotation.Resource;
import org.hxw.backend.mapper.UserMapper;
import org.hxw.backend.model.domain.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.servlet.HandlerMapping;

/**
 * 用户服务测试
 * @author hxw
 */
@SpringBootTest
public class UserServiceTest {

    @Resource
    private UserService userService;

    @Test
    public void testAddUser(){
        User user = new User();
        user.setUsername("hxw1");
        user.setUserAccount("123");
        user.setAvatarUrl("https://profile-avatar.csdnimg.cn/45bac5e9c72f4168bc41842705d7b70f_qq_46221992.jpg!1");
        user.setGender(0);
        user.setUserPassword("hxw123");
        user.setPhone("123");
        user.setEmail("456");
        user.setUserStatus(0);
        user.setCreateTime(new Date());
        user.setUpdateTime(new Date());
        user.setIsDelete(0);
        user.setUserRole(0);

        boolean result = userService.save(user);
        System.out.println(user.getId());
        Assertions.assertTrue(result);
    }


    @Test
    void userRegister() {
        // 密码违规
        String userAccount = "hanxuewei";
        String userPassword = "";
        String checkPassword = "123456";
        long result = userService.userRegister(userAccount, userPassword, checkPassword);
        System.out.println(result);
        Assertions.assertEquals(-1, result);

        // 用户名违规
        // TODO 这里包含空格非法字符，但是可以正常插入数据
        userAccount = "yu pi~";
        userPassword = "12345678";
        checkPassword = "12345678";
        result = userService.userRegister(userAccount, userPassword, checkPassword);
        System.out.println(result);

    }
}