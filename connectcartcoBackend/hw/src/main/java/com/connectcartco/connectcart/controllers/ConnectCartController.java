package com.connectcartco.connectcart.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class ConnectCartController {
    
    @GetMapping("/api/connectcart")
    public String getMethodName() {
        return "Hello from ConnectCart Co.!";
    }
    
}
