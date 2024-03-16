package com.connectcartco.connectcart.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.connectcartco.connectcart.dto.User;
import com.connectcartco.connectcart.repository.UserRepository;

@Service
public class AuthService {

     private final UserRepository userRepository;

    @Autowired
    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public String registerUser(User user) {
        if(user == null){
            return "User Null";
        }
        userRepository.save(user);
        return "User registered";
    }

    public String loginUser(User user) {
        return "User logged in";
    }

    public String logoutUser() {
        return "User logged out";
    }

    // public User getUser() {
    //     return new User();
    // }

    public List<User> getUsers() {
        return new ArrayList<User>();
    }

    // public User getUserById(Long id) {
    //     return "USER";
    // }

    public String deleteUserById(Long id) {
        return "User deleted";
    }

    public String updateUserById(Long id, User user) {
        return "User updated";
    }

    public String updateUserPasswordById(Long id, User user) {
        return "User password updated";
    }

    
}
