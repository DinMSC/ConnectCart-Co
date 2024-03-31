package com.connectcartco.connectcart.dto;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Builder
@Getter
@Setter
@Document("product")
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    private String id;
    private String name;
    private double price;
    private String description;
    private String image;
    private LocalDateTime created;
}
