package com.connectcartco.connectcart.services;

import com.connectcartco.connectcart.JWT.JwtService;
import com.connectcartco.connectcart.dto.AuthenticationRequest;
import com.connectcartco.connectcart.dto.AuthenticationResponse;
import com.connectcartco.connectcart.dto.UserDto;
import com.connectcartco.connectcart.entity.Role;
import com.connectcartco.connectcart.entity.UserEntity;
import com.connectcartco.connectcart.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class AuthService {

     private final UserRepository userRepository;
     private final PasswordEncoder passwordEncoder;
     private final JwtService jwtService;
     private final AuthenticationManager authenticationManager;
    
    public AuthenticationResponse registerUser(UserDto user, HttpServletRequest request) {
        String requestRoute = request.getHeader("Route-Header");
        Role role = requestRoute.contains("/admin") ? Role.ADMIN : Role.USER;


        UserEntity userEntity= UserEntity
                .builder()
                .username(user.getUsername())
                .email(user.getEmail())
                .phone(user.getPhone())
                .password(passwordEncoder.encode(user.getPassword()))
                .role(role)
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

    public String logoutUser() {
        return "User logged out";
    }

    public List<UserEntity> getUsers() {
        return new ArrayList<UserEntity>();
    }


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
