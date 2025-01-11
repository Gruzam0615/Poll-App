package com.example.demo.poll.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.poll.entity.PollCandidateListEntity;

@Repository
public interface PollCandidateListRepository extends JpaRepository<PollCandidateListEntity, Long> {

}