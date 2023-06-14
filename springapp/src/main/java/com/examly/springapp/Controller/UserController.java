package com.examly.springapp.Controller;

import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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
        UserModel updatedUser =userService.editUser(userId,  user);
        return ResponseEntity.ok(updatedUser);
    }
    @DeleteMapping("/deleteUser/{userId}")
    public String deleteUser(@PathVariable long userId) {
        userService.deleteUser(userId);
        return "User/Admin deleted";
    }
}
