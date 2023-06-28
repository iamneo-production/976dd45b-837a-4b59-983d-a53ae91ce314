package com.examly.springapp.Controller;

import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin(origins = "https://8081-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io")
@RequestMapping

public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/getUser")
    public List<UserModel> getAllUsers(){
        return userService.getAllusers();
    }
    @PostMapping("/addUser")
    public String addUser(@RequestBody UserModel user){

        userService.addUser(user);
        return "User/ Admin added";
    }

    @PutMapping("/editUser/{userId}")
    public ResponseEntity<UserModel> editUser(@PathVariable long userId, @RequestBody UserModel user){
        UserModel allUsers = userService.getElementsByuserId(userId);  
        allUsers.setEmail(user.getEmail());
        allUsers.setPassword(user.getPassword());
        allUsers.setUsername(user.getUsername());
        allUsers.setMobileNumber(user.getMobileNumber());
        allUsers.setUserRole(user.getUserRole());
        userService.editUser(allUsers);
        return ResponseEntity.ok(allUsers);
    }
    @DeleteMapping("/deleteUser/{userId}")
    public String deleteUser(@PathVariable long userId) {
        userService.deleteUser(userId);
        return "User/Admin deleted";
    }

    //unique
    @GetMapping("/login/getUserId/{email}")
    public long getUserIdbyEmail(@PathVariable String email)
    {
        long userId = userService.getUserIdbyEmail(email);
        return userId;
    }

    //get by  userId
    @GetMapping("/getUser/{userId}")
    public ResponseEntity<UserModel> getcustomerByuserId(@PathVariable long userId)
    {
        UserModel customer= userService.getElementsByuserId(userId);
        return ResponseEntity.ok(customer);
    }
}
