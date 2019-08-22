package com.jared.gamewebapplication.Account;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Username {

    @Id
    private String username;

    public Username(String username){
        this.username = username;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public String getUsername(){
        return this.username;
    }
}
