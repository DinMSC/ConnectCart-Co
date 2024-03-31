package com.connectcartco.connectcart.dto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@Builder
@Getter
@Setter
@Document
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    private String id;
    private String username;
    private String password;
    private String email;
    private String phone;
    private LocalDateTime created;
    private List<Product> cart = new ArrayList<Product>();
}
