package com.connectcartco.connectcart.controllers;

import com.connectcartco.connectcart.entity.ProductEntity;
import com.connectcartco.connectcart.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping("/products")
    public List<ProductEntity> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping("/products")
    public ProductEntity createProduct(@RequestBody ProductEntity product) {
        return productService.createProduct(product);
    }

    @PostMapping("/users/{userId}/products/cart/add/{productId}")
public List<ProductEntity> addToCart(@PathVariable String userId, @PathVariable String productId) {
    return productService.addToCart(productId, userId);
}

    @PostMapping("/users/{userId}/products/cart/remove/{productId}")
    public List<ProductEntity> removeFromCart(@PathVariable String productId , @PathVariable String userId) {
        return productService.removeFromCart(productId, userId);
    }

    @PostMapping("/users/{userId}/products/cart/empty")
    public List<ProductEntity> emptyCart(@PathVariable String userId) {
        return productService.emptyCart(userId);
    }

    @DeleteMapping("/products/product/{id}")
    public String deleteProduct(@PathVariable String id) {
        productService.delete(id);
        return "Successfully deleted product!";
    }

    @PutMapping("/products/product/{id}")
    public ProductEntity updateProduct(@PathVariable String id, @RequestBody ProductEntity product) {
        return productService.updateProduct(id, product);
    }
}
