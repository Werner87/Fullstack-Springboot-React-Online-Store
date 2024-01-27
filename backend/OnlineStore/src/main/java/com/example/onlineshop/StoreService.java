package com.example.onlineshop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StoreService {

    @Autowired
    private StoreRepository storeRepository;
    public List<OnlineStore> allProducts(){
        return storeRepository.findAll();
    }
}
