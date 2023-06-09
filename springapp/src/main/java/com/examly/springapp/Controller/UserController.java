package com.examly.springapp.Controller;

import com.testing.springAngular.bean.UserModel;
import com.testing.springAngular.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin(origins = "https://8081-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io")
@RestController

public class UserController {
    @Autowired
    private UserServices userService;

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
    public void editUser(@PathVariable String userId, @RequestBody UserModel user){
        userService.editUser(userId,  user);

    }
    @DeleteMapping("/deleteUser/{userId}")
    public String deleteUser(@PathVariable String userId) {
        userService.deleteUser(userId);
        return "User/Admin deleted";
    }
}
