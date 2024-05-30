package com.connectcartco.connectcart.services;

import com.connectcartco.connectcart.entity.ProductEntity;
import com.connectcartco.connectcart.entity.UserEntity;
import com.connectcartco.connectcart.repository.ProductRepository;
import com.connectcartco.connectcart.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import static java.text.MessageFormat.format;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    public List<ProductEntity> getAllProducts(){
        return productRepository.findAll();
    }

    public ProductEntity getById(String id){
        return productRepository.findById(id).orElseThrow(
                ()->new NoSuchElementException(format("Product with id: {0} does not exist!", id))
        );
    }

    public void delete(String id){
        productRepository.deleteById(id);
    }

    public ProductEntity createProduct(ProductEntity product){
        return productRepository.save(product);
    }

    public ProductEntity updateProduct(String id, ProductEntity product) {
        ProductEntity existingProduct= productRepository.findById(id).orElseThrow(
                ()->new NoSuchElementException(format("Product with id: {0} does not exist!", id))
        );
        existingProduct.setName(product.getName());
        existingProduct.setPrice(product.getPrice());
        return productRepository.save(existingProduct);
    }

    public List<ProductEntity> addToCart(String productId, String userId) {
        ProductEntity product= productRepository.findById(productId).orElseThrow(
                ()-> new NoSuchElementException(format("Product with id: {0} does not exist! ", productId)));
        UserEntity user= userRepository.findById(userId).orElseThrow();
        user.getCart().add(product);
        userRepository.save(user);
        return user.getCart();
     }

     public List<ProductEntity> removeFromCart(String productId, String userId){
         ProductEntity product= productRepository.findById(productId).orElseThrow(
                 ()-> new NoSuchElementException(format("Product with id: {0} does not exist! ", productId)));
         UserEntity user= userRepository.findById(userId).orElseThrow();
         user.getCart().remove(product);
         userRepository.save(user);
         return user.getCart();
     }

     public List<ProductEntity> emptyCart(String userId){
         UserEntity user= userRepository.findById(userId).orElseThrow();
         user.setCart(new ArrayList<>());
         userRepository.save(user);
         return user.getCart();
     }
}
