package com.example.onlineshop;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public List<Cart> allCart() {
        return cartRepository.findAll();
    }

    public void addToCart(Cart cart) {
        cartRepository.save(cart);
    }

    public void removeFromCart(String id){
        cartRepository.deleteById(id);
    }
}