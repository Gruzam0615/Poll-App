package com.example.demo.poll.dto;

import lombok.Data;

@Data
public class CreatePollDTO {

    private String pollName;
    private String[] pollCandidateList;
    
}
