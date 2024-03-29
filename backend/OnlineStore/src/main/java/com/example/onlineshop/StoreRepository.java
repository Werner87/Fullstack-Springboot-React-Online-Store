package com.example.onlineshop;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface StoreRepository extends MongoRepository<OnlineStore, ObjectId> {
}
