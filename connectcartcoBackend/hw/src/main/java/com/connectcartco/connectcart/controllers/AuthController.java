package com.connectcartco.connectcart.controllers;

import com.connectcartco.connectcart.dto.AuthenticationRequest;
import com.connectcartco.connectcart.dto.AuthenticationResponse;
import com.connectcartco.connectcart.dto.UserDto;
import com.connectcartco.connectcart.entity.UserEntity;
import com.connectcartco.connectcart.services.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;


    @PostMapping("/register")
    public AuthenticationResponse registerUser(@RequestBody UserDto user, HttpServletRequest request) {

        return authService.registerUser(user, request);
    }


    @PostMapping("/authenticate")
    public AuthenticationResponse authenticateUser(@RequestBody AuthenticationRequest request) {
        AuthenticationRequest authenticationRequest = new AuthenticationRequest(request.getUsername(), request.getPassword());
        return authService.authenticateUser(authenticationRequest);
    }

    @GetMapping("/logout")
    public String logoutUser() {
        return authService.logoutUser();
    }

    @GetMapping("/users")
    public List<UserEntity> getUsers() {
        return authService.getUsers();
    }

    // @GetMapping("/user/{id}")
    // public User getUserById(@PathVariable Long id) {
    //     return authService.getUserById(id);
    // }

    @GetMapping("/user/{id}/delete")
    public String deleteUserById(@PathVariable Long id) {
        return authService.deleteUserById(id);
    }

    @GetMapping("/user/{id}/update")
    public String updateUserById(@PathVariable Long id, @RequestBody UserEntity user) {
        return authService.updateUserById(id, user);
    }

    @GetMapping("/user/{id}/update/password")
    public String updateUserPasswordById(@PathVariable Long id, @RequestBody UserEntity user) {
        return authService.updateUserPasswordById(id, user);
    }

}
