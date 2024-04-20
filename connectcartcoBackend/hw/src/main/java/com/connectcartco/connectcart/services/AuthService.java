package com.connectcartco.connectcart.services;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.connectcartco.connectcart.JWT.JwtService;
import com.connectcartco.connectcart.dto.AuthenticationResponse;
import com.connectcartco.connectcart.dto.AuthenticationRequest;
import com.connectcartco.connectcart.entity.Role;
import com.connectcartco.connectcart.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.connectcartco.connectcart.entity.UserEntity;
import com.connectcartco.connectcart.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class AuthService {

     private final UserRepository userRepository;
     private final PasswordEncoder passwordEncoder;
     private final JwtService jwtService;
     private final AuthenticationManager authenticationManager;
    
    public AuthenticationResponse registerUser(UserDto user) {
        UserEntity userEntity= UserEntity
                .builder()
                .username(user.getUsername())
                .email(user.getEmail())
                .phone(user.getPhone())
                .password(passwordEncoder.encode(user.getPassword()))
                .role(Role.USER)
                .created(LocalDateTime.now())
                .build();
        userRepository.save(userEntity);
        String jwt= jwtService.generateToken(userEntity);
        return AuthenticationResponse.builder()
                .token(jwt)
                .build();
    }

    public AuthenticationResponse authenticateUser(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getUsername(),
                        authenticationRequest.getPassword()
                )
        );
        UserEntity user= userRepository.findByUsername(authenticationRequest.getUsername())
                .orElseThrow();
        String jwt= jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwt)
                .build();
    }

    public String loginUser(UserEntity user) {
        return "User logged in";
    }

    public String logoutUser() {
        return "User logged out";
    }

    // public User getUser() {
    //     return new User();
    // }

    public List<UserEntity> getUsers() {
        return new ArrayList<UserEntity>();
    }

    // public User getUserById(Long id) {
    //     return "USER";
    // }

    public String deleteUserById(Long id) {
        return "User deleted";
    }

    public String updateUserById(Long id, UserEntity user) {
        return "User updated";
    }

    public String updateUserPasswordById(Long id, UserEntity user) {
        return "User password updated";
    }

    
}
