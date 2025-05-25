package org.hxw.backend.model;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * 和数据库中的表进行映射
 */
@Data
@TableName("`user`")
public class User {
    private Long id;
    private String name;
    private Integer age;
    private String email;
}
