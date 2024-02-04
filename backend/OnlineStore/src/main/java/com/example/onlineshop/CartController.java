package com.example.onlineshop;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping
    public ResponseEntity<List<Cart>> getAllCart() {
        return new ResponseEntity<>(cartService.allCart(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Cart> addToCart(@RequestBody Cart cart) {
        cartService.addToCart(cart);
        return new ResponseEntity<>(cart, HttpStatus.CREATED);
    }
    @GetMapping("/{idS}")
    public ResponseEntity<List<Cart>> removeFromCart(@PathVariable String idS) {
        ObjectId productId = new ObjectId(idS);
        cartService.removeFromCart(productId);
        String userId = "123421";
        List<Cart> updatedCart = cartService.getCartItemsByUserId(userId);
        return new ResponseEntity<>(updatedCart, HttpStatus.OK);
    }
}
