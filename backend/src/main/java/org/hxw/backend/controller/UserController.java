package org.hxw.backend.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;
import org.hxw.backend.common.BaseReponse;
import org.hxw.backend.common.ResultUtils;
import org.hxw.backend.model.domain.User;
import org.hxw.backend.model.domain.UserLoginRequest;
import org.hxw.backend.model.domain.UserRegisterRequest;
import org.hxw.backend.service.UserService;
import org.hxw.backend.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static org.hxw.backend.constant.UserConstant.ADMIN_ROLE;
import static org.hxw.backend.constant.UserConstant.USER_LOGIN_STATE;


/**
 * 用户接口
 * @author hxw
 */
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    /**
     *
     * @param userRegisterRequest
     * @return
     */
    @PostMapping("/register")
    public BaseReponse<Long> userRegister(@RequestBody UserRegisterRequest userRegisterRequest ){
        if(userRegisterRequest == null){
            return null;
        }
        String userAccount = userRegisterRequest.getUserAccount();
        String userPassword = userRegisterRequest.getUserPassword();
        String checkPassword = userRegisterRequest.getCheckPassword();
        String planetCode = userRegisterRequest.getPlanetCode();

        if(StringUtils.isAnyBlank(userAccount,userPassword,checkPassword, planetCode)){
            return null;
        }
        long result =  userService.userRegister(userAccount,userPassword,checkPassword, planetCode);
//        return new BaseReponse<>(0, result, "ok");
        return ResultUtils.success(result);
    }

    /**
     * 用户登陆
     * @param userLoginRequest
     * @param request
     * @return
     */
    @PostMapping("/login")
    public BaseReponse<User> userLogin(@RequestBody UserLoginRequest userLoginRequest, HttpServletRequest request){
        if(userLoginRequest == null){
            return null;
        }
        String userAccount = userLoginRequest.getUserAccount();
        String userPassword = userLoginRequest.getUserPassword();
        if(StringUtils.isAnyBlank(userAccount, userPassword)){
            return null;
        }
        User user = userService.doLogin(userAccount, userPassword, request);
//        return new BaseReponse<>(0, user, "ok");
        return ResultUtils.success(user);

    }


    /**
     * 用户登出
     * @param request
     * @return
     */
    @PostMapping("/logout")
    public BaseReponse<Integer> userLogout(HttpServletRequest request){
       if(request == null){
           return null;
       }
       int result = userService.userLogout(request);
       return ResultUtils.success(result);
    }

    /**
     * 查询用户列表
     * @param username
     * @param request HttpServletRequest request 是javaweb中的常见对象，代表客户端的HTTP请求，这里用来获取Session，从而得到当前用户的信息
     * @return
     */
    @GetMapping("/search")
    public BaseReponse<List<User>> searchUsers(String username, HttpServletRequest request){
        if(!isAdmin(request)){
            return null;
        }
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        if(StringUtils.isNotBlank(username)){
            queryWrapper.like("username", username);
        }
        List<User> userList = userService.list(queryWrapper);
        List<User> list = userList.stream().map(user -> {
            return userService.getSafetyUser(user);
        }).collect(Collectors.toList());
        return ResultUtils.success(list);
    }

    /**
     * 删除用户
     * @param id
     * @return
     */
    @PostMapping("/delete")
    public BaseReponse<Boolean> deleteUser(@RequestBody long id, HttpServletRequest request){
        if(!isAdmin(request)){
            return null;
        }
        if(id <= 0){
            return null;
        }
        boolean b = userService.removeById(id);
        return ResultUtils.success(b);
    }

    /**
     * 判断是否为管理员
     * @param request
     * @return
     */
    private boolean isAdmin(HttpServletRequest request){
        Object userObj = request.getSession().getAttribute(UserService.USER_LOGIN_STATE);
        User user = (User) userObj;
        return user != null && user.getUserRole() == ADMIN_ROLE;
    }

    /**
     * 获取当前登陆态，信息
     * @param request
     * @return
     */
    @GetMapping("/currentUser")
    public BaseReponse<User> getCurrentUser(HttpServletRequest request){
        Object userObj = request.getSession().getAttribute(USER_LOGIN_STATE);
        User currentUser = (User)  userObj;
        if(currentUser == null){
            return null;
        }
        long userId = currentUser.getId();
        //TODO 校验用户是否合法(是否被封号)
        User user = userService.getById(userId);
        User safetyUser = userService.getSafetyUser(user);
        return ResultUtils.success(safetyUser);
    }


}
