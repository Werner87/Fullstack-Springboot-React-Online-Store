package com.example.onlineshop;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cart")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cart {
    @JsonProperty("product_id")
    @Id
    private String id;
    @JsonProperty("product_name")
    private String name;
    @JsonProperty("product_price")
    private Double price;
    @JsonProperty("user_id")
    private String userId;
    @JsonProperty("product_photo")
    private String photo;
    @JsonProperty("quantity")
    private Double quantity;
}
