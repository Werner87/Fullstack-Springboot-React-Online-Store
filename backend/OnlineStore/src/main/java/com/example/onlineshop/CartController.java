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
    @DeleteMapping("/{id}")
    public ResponseEntity<String> removeFromCart(@PathVariable String id) {
        cartService.removeFromCart(id);
        return new ResponseEntity<>("Deleted", HttpStatus.OK);
    }
}
