package com.examly.springapp.Controller;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.Model.LoginModel;
import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Service.UserService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping
public class AuthController {
    @Autowired
    private UserService userService;

    @GetMapping("/user/signup/{email}")
    public Boolean checkUserbyEmail(@PathVariable String email)
    {
        Boolean flag = userService.checkUserbyEmail(email);
        return flag;
    }
    @PostMapping("/user/signup")
    public String saveUser(@RequestBody UserModel user)
    {
        UserModel u=userService.getbyEmailid(user.getEmail());
        if(u!=null){
            return "User already exists";
        }
         else{
            
            userService.saveUser(user);
            return "User added";
         }
    }

    @PostMapping("/admin/signup")
    public String saveAdmin(@RequestBody UserModel user)
    {
        UserModel u=userService.getbyEmailid(user.getEmail());
        if(u==null){
            userService.saveAdmin(user);
            return "Admin user added";
        }
         else{
            return "Admin User already exists";
         }
    }

    //login

    @PostMapping("/user/login")
    public Boolean isUserPresent(@RequestBody LoginModel loginModel)
    {
        Boolean flag = userService.isUserPresent(loginModel);
        return flag;
        
    }

    @PostMapping("/admin/login")
    public Boolean isAdminPresent(@RequestBody LoginModel loginModel)
    {
        Boolean flag = userService.isAdminPresent(loginModel);
        return flag;
        
    }

    //Checking userRole
    @GetMapping("/login/checkUserRole/{email}")
    public String checkUserRolebyEmail(@PathVariable String email)
    {
        String userRole = userService.checkUserRolebyEmail(email);
        return userRole;
    }

}
