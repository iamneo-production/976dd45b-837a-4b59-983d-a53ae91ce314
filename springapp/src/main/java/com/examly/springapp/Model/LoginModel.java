package com.examly.springapp.Model;

public class LoginModel {

    private String email;
    private String password;


    public LoginModel() {
    }


    public LoginModel(String email, String password) {
        this.email = email;
        this.password = password;
    }


    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }



    
}