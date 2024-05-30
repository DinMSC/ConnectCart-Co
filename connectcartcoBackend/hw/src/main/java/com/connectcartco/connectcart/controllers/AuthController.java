package com.connectcartco.connectcart.controllers;

import com.connectcartco.connectcart.dto.AuthenticationRequest;
import com.connectcartco.connectcart.dto.AuthenticationResponse;
import com.connectcartco.connectcart.dto.ProductChatGptDto;
import com.connectcartco.connectcart.dto.UserDto;
import com.connectcartco.connectcart.entity.ProductEntity;
import com.connectcartco.connectcart.entity.UserEntity;
import com.connectcartco.connectcart.services.AuthService;
import com.connectcartco.connectcart.services.ChatGPTService;
import com.connectcartco.connectcart.services.ProductService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.text.MessageFormat.format;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;
    private final ChatGPTService chatGPTService;
    private final ProductService productService;

    @PostMapping("/register")
    public AuthenticationResponse registerUser(@RequestBody UserDto user, HttpServletRequest request) {

        return authService.registerUser(user, request);
    }


    @PostMapping("/authenticate")
    public AuthenticationResponse authenticateUser(@RequestBody AuthenticationRequest request) {
        AuthenticationRequest authenticationRequest = new AuthenticationRequest(request.getUsername(), request.getPassword());
        AuthenticationResponse authenticationResponse = authService.authenticateUser(authenticationRequest);
        String initialMessageToChatGpt = getStartingMessage(request);
        chatGPTService.processSearch(initialMessageToChatGpt);
        return authenticationResponse;
    }


    private static String getStartingMessage(AuthenticationRequest request) {
        return format("Hi Chat! This is just to inform you about your job in this session so you know how to answer the questions," +
                "You will be assistant to our user: {0}, and you should respond to this message by saying: 'Hello {0}.'", request.getUsername());
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
