package org.hxw.backend.service.impl;
import java.util.Date;

import ch.qos.logback.core.util.StringUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.repository.AbstractRepository;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.hxw.backend.mapper.UserMapper;
import org.hxw.backend.model.domain.User;
import org.hxw.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.hxw.backend.constant.UserConstant.USER_LOGIN_STATE;


/**
* @author Hanxuewei
* @description 针对表【user(用户)】的数据库操作Service实现
* @createDate 2025-05-27 19:17:05
*/
@Service
// 方便编写日志
@Slf4j
public class UserServiceImpl extends ServiceImpl<UserMapper, User>
    implements UserService {
    @Autowired
    private UserMapper userMapper;



    final String SALT = "hxw";

    @Override
    public long userRegister(String userAccount, String userPassword, String checkPassword) {
        /**
         * 1. 校验
         */
        if(StringUtils.isAnyBlank(userAccount, userPassword, checkPassword)){
            return -1;
        }
        if(userAccount.length() < 4){
            return -1;
        }
        if(userPassword.length() < 8 || checkPassword.length() < 8){
            return -1;
        }
        // 账号不能包含特殊字符
        String validateRegExp = "[^a-zA-Z0-9]";
        Matcher matcher = Pattern.compile(validateRegExp).matcher(userAccount);
        if(matcher.find()){
            return -1;
        }

        if(!userPassword.equals(checkPassword)){
            return -1;
        }

        // 加密

        String encryptPassword = DigestUtils.md5DigestAsHex((SALT + userPassword).getBytes());

        // 插入数据
        User user = new User();
        user.setUserAccount(userAccount);
        // 使用加密之后的密码
        user.setUserPassword(encryptPassword);
        boolean saveResult = this.save(user);
        if(!saveResult){
            return -1;
        }
        return user.getId();
    }

    /**
     *
     * @param userAccount
     * @param userPassword
     * @return
     * 用户信息就是用户对象
     */
    @Override
    public User doLogin(String userAccount, String userPassword, HttpServletRequest request) {
        if(StringUtils.isAnyBlank(userAccount, userPassword)){
            return null;
        }
        if(userAccount.length() < 4){
            return null;
        }
        if(userPassword.length() < 8){
            return null;
        }

        // 不包含特殊字符
        Pattern pattern = Pattern.compile("^[a-zA-Z0-9]+$");
        Matcher matcher = pattern.matcher(userAccount);
        if (!matcher.matches()) {
            // 包含特殊字符
            return null;
        }
        // 加密
        String encryptPassword  = DigestUtils.md5DigestAsHex((SALT + userPassword).getBytes());
        // 查询用户是否存在
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("userAccount", userAccount);
        queryWrapper.eq("userPassword", encryptPassword);
        User user = userMapper.selectOne(queryWrapper);
        if(user == null){
//            log.info("user login failed, userAccount cannot match userPassword");
            return null;
        }
       // 脱敏
        User safetyUser = getSafetyUser(user);
        request.getSession().setAttribute(USER_LOGIN_STATE, safetyUser);
        return safetyUser;
    }
    @Override
    public User getSafetyUser(User originUser){
        if(originUser == null){
            return null;
        }
        User safetyUser = new User();
        safetyUser.setId(originUser.getId());
        safetyUser.setUsername(originUser.getUsername());
        safetyUser.setUserAccount(originUser.getUserAccount());
        safetyUser.setAvatarUrl(originUser.getAvatarUrl());
        safetyUser.setGender(originUser.getGender());
        safetyUser.setPhone(originUser.getPhone());
        safetyUser.setEmail(originUser.getEmail());
        safetyUser.setUserRole(originUser.getUserRole());
        safetyUser.setUserStatus(originUser.getUserStatus());
        safetyUser.setCreateTime(originUser.getCreateTime());
        return safetyUser;
    }

    @Override
    public int userLogout(HttpServletRequest request) {
        // 移除用户登陆态
        request.getSession().removeAttribute(USER_LOGIN_STATE);
        return 1;
    }
}





