package com.examly.springapp.Service.Impl;



import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.LoginModel;
import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Repository.Userrepository;
import com.examly.springapp.Service.UserService;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private Userrepository userRepo;

    @Override
    public UserModel saveUser(UserModel user)
    {
        return userRepo.save(user);
    }

    @Override
    public UserModel saveAdmin(UserModel user)
    {
        return userRepo.save(user);
    }

    

    @Override
    public List<UserModel> getusers() {
        return userRepo.findAll();
    }

    @Override
    public UserModel getbyEmailid(String email) {
        return userRepo.findByEmail(email);
    }
    
    @Override
    public Boolean checkUserbyEmail(String email) {

        UserModel user = userRepo.findByEmail(email);
        if(user!=null ) {
            return true;//if email is exist already
        }
        else
        return false;
    }
 

    //Login
    @Override
    public Boolean isUserPresent(LoginModel loginModel) {
        
        UserModel user=userRepo.findByEmail(loginModel.getEmail());

        if(user!=null && user.getPassword().equals(loginModel.getPassword()) && user.getUserRole().equals("User")){
            return true;
        }
        else 
        return false;
    }

    @Override
    public Boolean isAdminPresent(LoginModel loginModel) {
        
        UserModel user=userRepo.findByEmail(loginModel.getEmail());

        if(user!=null && user.getPassword().equals(loginModel.getPassword()) && user.getUserRole().equals("Admin")){
            return true;
        }
        else 
        return false;
    }

    //Checking userRole
    @Override
    public String checkUserRolebyEmail(String email){
        UserModel user=userRepo.findByEmail(email);
        if(user != null)
            return user.getUserRole();
        else
            return "Email ID not found";
    }
    // USER CRUD Operation
    @Override
    public List<UserModel> getAllusers(){
        List<UserModel> users = new ArrayList<>();
        userRepo.findAll().forEach(users::add);
        return users;
    }
    @Override
    public void addUser(UserModel user) {
        userRepo.save(user);
    }
    @Override
    public void editUser(long userId, UserModel user) {
        userRepo.save(user);
    }
    @Override
    public void deleteUser(long userId) {
        userRepo.deleteById(userId);
    }

}