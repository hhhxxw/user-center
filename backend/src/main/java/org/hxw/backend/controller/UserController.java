package org.hxw.backend.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;
import org.hxw.backend.constant.UserConstant;
import org.hxw.backend.model.domain.User;
import org.hxw.backend.model.domain.request.UserLoginRequest;
import org.hxw.backend.model.domain.request.UserRegisterRequest;
import org.hxw.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 用户接口
 * @author hxw
 */
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    /**
     * 注册接口
     * @param userRegisterRequest
     * @return
     */
    @PostMapping("/register")
    public Long userRegister(@RequestBody UserRegisterRequest userRegisterRequest){
        if(userRegisterRequest == null){
            return  null;
        }
        String userPassword = userRegisterRequest.getUserPassword();
        String userAccount = userRegisterRequest.getUserAccount();
        String checkPassword = userRegisterRequest.getCheckPassword();
        if(StringUtils.isAnyBlank(userAccount, userPassword, checkPassword)){
            return null;
        }
        return userService.userRegister(userAccount, userPassword, checkPassword);
    }

    /**
     * 登陆接口
     * @param userLoginRequest
     * @param request
     * @return
     */

    @PostMapping("/login")
    public User userLogin(@RequestBody UserLoginRequest userLoginRequest, HttpServletRequest request){
        if(userLoginRequest == null){
            return null;
        }
        String userAccount = userLoginRequest.getUserAccount();
        String userPassword = userLoginRequest.getUserPassword();
        if(StringUtils.isAnyBlank(userAccount, userPassword)){
            return null;
        }
        return userService.userLogin(userAccount, userPassword, request);
    }

    /**
     * 根据用户姓名进行查询的接口
     * @param username
     * @return
     */
    @GetMapping("/search")
    public List<User> searchUsers(String username, HttpServletRequest request){
        // 仅管理员可以查询
//        Object userObj = request.getSession().getAttribute();

        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        if(StringUtils.isAnyBlank(username)){
            queryWrapper.like("username", username);
        }
        return userService.list(queryWrapper);
    }

    @PostMapping("/delete")
    public boolean deleteUser(@RequestBody long id){
        if(id < 0){
            return false;
        }
        return userService.removeById(id);
    }

}
