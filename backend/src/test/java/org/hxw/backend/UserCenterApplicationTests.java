package org.hxw.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.DigestUtils;

/**
 * @author 一只咸鱼的大厂梦-hxw
 * @date 2025-07-13 10:56
 */
@SpringBootTest
public class UserCenterApplicationTests {
    @Test
    void testDigest(){
        String newPassword = DigestUtils.md5DigestAsHex(("abcd" + "mypassword").getBytes());
        System.out.println(newPassword);
    }
}
