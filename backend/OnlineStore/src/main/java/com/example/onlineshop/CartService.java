package com.example.onlineshop;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

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

    public Cart updateCart(String id, Cart updatedCart) {
        Optional<Cart> existingCartOptional = cartRepository.findById(id);

        if (existingCartOptional.isPresent()) {
            Cart existingCart = existingCartOptional.get();
            existingCart.setQuantity(updatedCart.getQuantity());
            return cartRepository.save(existingCart);
        } else {
            return null;
        }
    }
}