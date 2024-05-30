package com.connectcartco.connectcart.dto;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Builder
public class ProductChatGptDto {
    private String name_price;
}
