package com.jared.gamewebapplication.Account;

import javax.persistence.*;

@Entity
@Table(name="Account")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int accountId;
    private String username;
    private String name;
    private String password;
    private String reTypePassword;

    public Account(String username, String name, String password, String reTypePassword){
        this.username = username;
        this.name = name;
        this.password = password;
        this.reTypePassword = reTypePassword;
    }

    public Account(){

    }

    public int getAccountId(){
        return this.accountId;
    }

    public String getUsername(){
        return this.username;
    }

    public String getName(){
        return this.name;
    }

    public String getPassword(){
        return this.password;
    }

    public String getReTypePassword(){
        return this.reTypePassword;
    }

    public boolean validate(){
        if(!this.password.equals(this.reTypePassword)){
            return false;
        }
        return true;
    }
}
