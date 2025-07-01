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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
@CrossOrigin(origins = {"http://localhost:4399"}, allowCredentials = "true")
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
        if(!isAdmin(request)){
            return new ArrayList<>();
        }

        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        if(StringUtils.isAnyBlank(username)){
            queryWrapper.like("username", username);
        }
        List<User> userList = userService.list(queryWrapper);
        return userList.stream().map(user -> {
            user.setUserPassword(null);
            return user;
        }).collect(Collectors.toList());
    }

    @PostMapping("/delete")
    public boolean deleteUser(@RequestBody long id, HttpServletRequest request){
        if(!isAdmin(request)){
            return false;
        }
        if(id < 0){
            return false;
        }
        return userService.removeById(id);
    }

    /**
     * 是否为管理员
     * @param request
     * @return
     */
    private boolean isAdmin(HttpServletRequest request){

        Object userObj = request.getSession().getAttribute(USER_LOGIN_STATE);
        User user = (User) userObj;
        if(user == null || user.getUserRole() != ADMIN_ROLE){
            return false;
        }
        return true;
    }
    /**
     * 获取当前用户
     *
     * @param request
     * @return
     */
//    @GetMapping("/current")
//    public User getCurrentUser(HttpServletRequest request) {
//        Object userObj = request.getSession().getAttribute(USER_LOGIN_STATE);
//        // 这里出现了空指针异常
//        User currentUser = (User) userObj;
//        long userId = currentUser.getId();
//        User user = userService.getById(userId);
//        User safetyUser = userService.getSafetyUser(user);
//        return safetyUser;
//    }
    @GetMapping("/current")
    public ResponseEntity<?> getCurrentUser(HttpServletRequest request) {
        Object userObj = request.getSession().getAttribute(USER_LOGIN_STATE);
        if (userObj == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("用户未登录");
        }

        User currentUser = (User) userObj;
        User user = userService.getById(currentUser.getId());
        User safetyUser = userService.getSafetyUser(user);
        return ResponseEntity.ok(safetyUser);
    }


}
