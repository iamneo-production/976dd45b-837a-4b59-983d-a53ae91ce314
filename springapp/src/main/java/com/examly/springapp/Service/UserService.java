package com.examly.springapp.Service;


import java.util.List;

import com.examly.springapp.Model.LoginModel;
import com.examly.springapp.Model.UserModel;

public interface UserService {


    UserModel saveUser(UserModel user);
   
    UserModel saveAdmin(UserModel user);

    UserModel getbyEmailid(String email);

    // UserModel getbyPassword(String password);

    // UserModel findByEmailandUserRole(String email, String userRole);
    public Boolean checkUserbyEmail(String email) ;
    
    List<UserModel> getusers();
    //login
    public Boolean isUserPresent(LoginModel loginModel);

    Boolean isAdminPresent(LoginModel loginModel);

    String checkUserRolebyEmail(String email);
    // User CRUD Operation
    List<UserModel> getAllusers();
    void addUser(UserModel user);
    void editUser(String userId, UserModel user);
    void deleteUser(String userId);
}