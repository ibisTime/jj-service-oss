/**
 * @Title SessionUser.java 
 * @Package com.hsnet.pz.session 
 * @Description 
 * @author miyb  
 * @date 2014-8-19 下午4:46:22 
 * @version V1.0   
 */
package com.xnjr.oss.session;

/** 
 * @author: miyb 
 * @since: 2014-8-19 下午4:46:22 
 * @history:
 */
public class SessionUser extends AUserDetail {
    private String userCode;

    private String userName;

    public SessionUser() {
    }

    public String getUserCode() {
        return userCode;
    }

    public void setUserCode(String userCode) {
        this.userCode = userCode;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public SessionUser(String userCode, String userName) {
        this.userCode = userCode;
        this.userName = userName;
    }
}
