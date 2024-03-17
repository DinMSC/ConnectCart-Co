package com.connectcartco.connectcart.dto;

import java.time.LocalDateTime;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;




@Document
@Data
public class User {
    @Id
    private String id;
    private String username;
    private String password;
    private String email;
    private String phone;
    private LocalDateTime created;


    public User(String username, String password, String email, String phone) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.created = LocalDateTime.now(); 
    }

}
