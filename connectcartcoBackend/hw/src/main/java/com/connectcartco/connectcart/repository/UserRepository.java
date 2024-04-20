package com.connectcartco.connectcart.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.connectcartco.connectcart.entity.UserEntity;

import java.util.Optional;

public interface UserRepository extends MongoRepository<UserEntity, String> {

    Optional<UserEntity> findByUsername(String username);
    
}
