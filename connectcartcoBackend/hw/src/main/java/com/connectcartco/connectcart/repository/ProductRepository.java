package com.connectcartco.connectcart.repository;

import com.connectcartco.connectcart.entity.ProductEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<ProductEntity, String> {

}
