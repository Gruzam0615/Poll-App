package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.utils.response.entity.CustomResponseEntity;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class MainController {
    
    @GetMapping("/ping")
    public CustomResponseEntity PingPongCheck() {
        CustomResponseEntity result = new CustomResponseEntity(HttpStatus.OK.value(), "OK", "true");
        return result;
    }    

}
