package com.example.demo.poll.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class PollEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pollIndex;

    private String pollName;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name= "pollIndex")
    @JsonManagedReference
    private List<PollCandidateListEntity> pollCandidateList;

    private String pollCreatedDate;

    public void addPollCandidateList(List<PollCandidateListEntity> pollCandidateList) {
        this.pollCandidateList = pollCandidateList;
    }
}
