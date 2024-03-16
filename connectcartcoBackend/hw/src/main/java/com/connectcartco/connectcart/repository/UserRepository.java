package com.connectcartco.connectcart.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.connectcartco.connectcart.dto.User;

public interface UserRepository extends MongoRepository<User, String> {

    
    
}
