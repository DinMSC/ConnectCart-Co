package com.connectcartco.connectcart.services;

import com.connectcartco.connectcart.dto.Product;
import com.connectcartco.connectcart.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

import static java.text.MessageFormat.format;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Product getById(String id){
        return productRepository.findById(id).orElseThrow(
                ()->new NoSuchElementException(format("Product with id: {0} does not exist!", id))
        );
    }

    public void delete(String id){
        productRepository.deleteById(id);
    }

    public Product createProduct(Product product){
        return productRepository.save(product);
    }

    public Product updateProduct(String id, Product product) {
        Product existingProduct= productRepository.findById(id).orElseThrow(
                ()->new NoSuchElementException(format("Product with id: {0} does not exist!", id))
        );
        existingProduct.setName(product.getName());
        existingProduct.setPrice(product.getPrice());
        return productRepository.save(existingProduct);
    }
}
