package com.jared.gamewebapplication.Account;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Check {

    @Id
    private String password;
    private String username;

    public Check(String username, String password){
        this.username = username;
        this.password = password;
    }

    public Check(){

    }

    public void setUsername(boolean username){
        if(username){
            this.username = "Sorry, this username is already taken.";
        }
    }

    public void setPassword(boolean password){
        if(password){
            this.password = "Your passwords are not identical.";
        }
    }

    public String getUsername(){
        return this.username;
    }

    public String getPassword(){
        return this.password;
    }
}
