package com.example.demo.poll.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.poll.entity.PollEntity;

@Repository
public interface PollRepository extends JpaRepository<PollEntity, Long> {
    
}
