package com.example.onlineshop;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.sql.Timestamp;

@Document(collection = "cart")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cart {
    @JsonProperty("product_id")
    @Id
    private ObjectId id;
    @JsonProperty("product_name")
    private String name;
    @JsonProperty("product_price")
    private Double price;
    @JsonProperty("user_id")
    private String user_id;
    @JsonProperty("product_photo")
    private String photo;
}
