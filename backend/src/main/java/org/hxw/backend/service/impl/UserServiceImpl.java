package org.hxw.backend.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.hxw.backend.mapper.UserMapper;
import org.hxw.backend.model.domain.User;
import org.hxw.backend.service.UserService;
import org.springframework.stereotype.Service;

/**
* @author Hanxuewei
* @description 针对表【user(用户)】的数据库操作Service实现
* @createDate 2025-05-27 19:17:05
*/
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User>
    implements UserService {

}




