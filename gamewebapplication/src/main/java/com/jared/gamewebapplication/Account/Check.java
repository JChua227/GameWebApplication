package com.jared.gamewebapplication.Account;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;

@Entity
public class Check {

    @Id
    private String password;
    private String username;
    private String comma;
    private String success;

    public Check(String username, String password,String comma){
        this.username = username;
        this.password = password;
        this.comma = comma;
    }

    public Check(){

    }

    public void setUsername(boolean username){
        if(username){
            this.username = "Sorry, this username is already taken.";
        }
        else{
            this.username = "";
        }
    }

    public void setPassword(boolean password){
        if(password){
            this.password = "Your passwords are not identical.";
        }
        else{
            this.password = "";
        }
    }

    public void setComma(List<String> list){
        if(list.size()>4){
            this.comma = "Error: Cannot contain \",\"";
        }
        else{
            this.comma = "";
        }
    }

    public String getUsername(){
        return this.username;
    }

    public String getPassword(){
        return this.password;
    }

    public String getComma(){
        return this.comma;
    }

    public void setSuccess(){
        this.success = "Successfully Created Account!";
    }

    public String getSuccess(){
        return this.success;
    }
}
