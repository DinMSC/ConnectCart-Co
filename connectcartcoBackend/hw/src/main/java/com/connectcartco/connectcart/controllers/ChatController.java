package com.connectcartco.connectcart.controllers;

import com.connectcartco.connectcart.dto.SearchRequest;
import com.connectcartco.connectcart.services.ChatGPTService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
@Slf4j
public class ChatController {

    private final ChatGPTService chatGPTService;


    @PostMapping("/searchChatGPT")
    public String searchChatGPT(@RequestBody SearchRequest searchRequest) {

        log.info("searchChatGPT Started query: " + searchRequest.getQuery());

        return chatGPTService.processSearch(chatGPTService.createInitialMessageToChatGpt()+ searchRequest.getQuery());
    }
}
