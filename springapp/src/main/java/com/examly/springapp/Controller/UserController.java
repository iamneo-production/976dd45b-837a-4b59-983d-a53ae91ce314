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
    private UserService userService;

    @RequestMapping("/getUser")
    public List<User> getAllUsers(){
        return userService.getAllusers();
    }
    @RequestMapping(method = RequestMethod.POST, value = "/addUser")
    public void addUser(@RequestBody User user){
        userService.addUser(user);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/editUser/{id}")
    public void editUser(@PathVariable String id, @RequestBody User user){
        userService.editUser(id,  user);
    }
    @RequestMapping(method = RequestMethod.DELETE, value = "/deleteUser/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
    }
    
}
