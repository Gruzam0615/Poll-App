package com.example.demo.poll.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class PollCandidateListEntity { 
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pollCandidateListIndex;

    private String pollCandidateName;

    @Column(columnDefinition = "integer default 0")
    private int pollCount;

    @ManyToOne
    @JoinColumn(name = "pollIndex", insertable = false, updatable = false)
    @JsonBackReference
    private PollEntity pollEntity;

    public void createPollCandidateListEntity(String pollCandidateName, int pollCount) {
        this.pollCandidateName = pollCandidateName;
        this.pollCount = pollCount;
    }
    
}
