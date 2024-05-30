package com.connectcartco.connectcart.services;

import com.connectcartco.connectcart.controllers.AuthController;
import com.connectcartco.connectcart.dto.ChatGPTRequest;
import com.connectcartco.connectcart.dto.ChatGPTResponse;
import com.connectcartco.connectcart.dto.ProductChatGptDto;
import com.connectcartco.connectcart.entity.ProductEntity;
import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.text.MessageFormat.format;

@Service
@Slf4j
@RequiredArgsConstructor
public class ChatGPTService {

    @Value("${OPEN_AI_URL}")
    private String OPEN_AI_URL;

    @Value("${OPEN_AI_KEY}")
    private String OPEN_AI_KEY;

    private final ProductService productService;

    public String processSearch(String query) {

        ChatGPTRequest chatGPTRequest = new ChatGPTRequest();
        chatGPTRequest.setPrompt(query);


        String url = OPEN_AI_URL;

        HttpPost post = new HttpPost(url);
        post.addHeader("Content-Type", "application/json");
        post.addHeader("Authorization", "Bearer " + OPEN_AI_KEY);

        Gson gson = new Gson();

        String body = gson.toJson(chatGPTRequest);

        log.info("body: " + body);

        try {
            final StringEntity entity = new StringEntity(body);
            post.setEntity(entity);

            try (CloseableHttpClient httpClient = HttpClients.custom().build();
                 CloseableHttpResponse response = httpClient.execute(post)) {

                String responseBody = EntityUtils.toString(response.getEntity());

                log.info("responseBody: " + responseBody);

                ChatGPTResponse chatGPTResponse = gson.fromJson(responseBody, ChatGPTResponse.class);

                return chatGPTResponse.getChoices().get(0).getText();
            } catch (Exception e) {
                return "failed";
            }
        } catch (Exception e) {
            return "failed";
        }


    }


    @NotNull
    private String getListOfProductsAsString() {
        List<String> listOfProducts = productService
                .getAllProducts()
                .stream()
                .map(this::getProductChatGptDto)
                .map(ProductChatGptDto::getName_price)
                .toList();
        return String.join(", ", listOfProducts);
    }

    private  ProductChatGptDto getProductChatGptDto(ProductEntity productEntity) {
        return ProductChatGptDto.builder().name_price(productEntity.getName() + " - " + productEntity.getPrice()).build();
    }

    public  String createInitialMessageToChatGpt() {
        String listOfPruductsString= getListOfProductsAsString();
        return format("Dont send following text to the user. THis is just for you. I want to inform you inform you about the shop so if someone asks you something you know how to answer. This is shop called ConnectCart!" +
                        "Here are the list of products with their prices that are available in our ConnectCart: {0} " +
                        " You can only answer questions related to ConnectCart shop. If question is not related to it, just respond with:" +
                        "'Sorry, I am just assistant for ConnectCart and I cannot give answers that are out of that scope. " +
                        "But always assume that the question is related to ConnectCart and try to answer it in terms of ConnectCart." +
                        "The following text is users question to you:   '"
                , listOfPruductsString);
    }
}