package com.connectcartco.connectcart.repository;

import com.connectcartco.connectcart.dto.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {

}
