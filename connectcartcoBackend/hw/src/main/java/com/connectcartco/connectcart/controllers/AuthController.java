package com.connectcartco.connectcart.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.connectcartco.connectcart.dto.User;
import com.connectcartco.connectcart.services.AuthService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public String registerUser(@ModelAttribute User user) {
    return authService.registerUser(user);
}
    

    @PostMapping("/login")
   public String loginUser(@RequestBody User user) {
        return authService.loginUser(user);
    }

    @GetMapping("/logout")
    public String logoutUser() {
        return authService.logoutUser();
    }

    @GetMapping("/user")
    public User getUser() {
        return authService.getUser();
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return authService.getUsers();
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id) {
        return authService.getUserById(id);
    }

    @GetMapping("/user/{id}/delete")
    public String deleteUserById(@PathVariable Long id) {
        return authService.deleteUserById(id);
    }

    @GetMapping("/user/{id}/update")
    public String updateUserById(@PathVariable Long id, @RequestBody User user) {
        return authService.updateUserById(id, user);
    }

    @GetMapping("/user/{id}/update/password")
    public String updateUserPasswordById(@PathVariable Long id, @RequestBody User user) {
        return authService.updateUserPasswordById(id, user);
    }

}
