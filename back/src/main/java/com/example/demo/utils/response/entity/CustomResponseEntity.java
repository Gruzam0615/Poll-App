package com.example.demo.utils.response.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CustomResponseEntity {    
    private int status;
    private String message;
    private Object data;
}
