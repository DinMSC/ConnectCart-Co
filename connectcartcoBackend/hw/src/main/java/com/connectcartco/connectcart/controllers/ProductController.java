package com.connectcartco.connectcart.controllers;

import com.connectcartco.connectcart.dto.Product;
import com.connectcartco.connectcart.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @DeleteMapping("/products/product/{id}")
    public String deleteProduct(@PathVariable String id) {
        productService.delete(id);
        return "Successfully deleted product!";
    }

    @PutMapping("/products/product/{id}")
    public Product updateProduct(@PathVariable String id, @RequestBody Product product) {
        return productService.updateProduct(id, product);
    }
}
