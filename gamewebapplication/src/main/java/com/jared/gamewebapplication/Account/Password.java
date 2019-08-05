package com.jared.gamewebapplication.Account;

import javax.persistence.Entity;

@Entity
public class Password {

    private String password;
    private String reTypePassword;

    public Password(String password,String reTypePassword){
        this.password=password;
        this.reTypePassword=reTypePassword;
    }

    public String getPassword(){
        return this.password;
    }

    public String getReTypePassword(){
        return this.reTypePassword;
    }
}
