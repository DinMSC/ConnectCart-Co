package com.connectcartco.connectcart.repository;

import com.connectcartco.connectcart.dto.Product;
import com.connectcartco.connectcart.dto.Test;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TestRepository extends MongoRepository<Test, String> {
}
