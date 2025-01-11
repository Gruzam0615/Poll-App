package com.example.demo.poll.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.poll.dto.CreatePollDTO;
import com.example.demo.poll.dto.DoPollDTO;
import com.example.demo.poll.entity.PollCandidateListEntity;
import com.example.demo.poll.entity.PollEntity;
import com.example.demo.poll.service.PollCandidateListService;
import com.example.demo.poll.service.PollService;
import com.example.demo.utils.response.entity.CustomResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/poll")
public class PollController {
    private final Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName());
    @Autowired
    private PollService pollService;
    @Autowired
    private PollCandidateListService pollCandidateListService;
    
    @GetMapping("/test1")
    public CustomResponseEntity test1() {
        CustomResponseEntity data = new CustomResponseEntity(HttpStatus.OK.value(), "OK", "true");
        return data;
    }

    @PostMapping("/createPoll")
    public CustomResponseEntity CreatePoll(@RequestBody CreatePollDTO body) {
        log.info("/poll/createPoll Requested");
        // log.info("{}", body.getPollName());
        // log.info("{}", body.getPollCandidateList().toString());
        
        PollEntity entity = new PollEntity();
        List<PollCandidateListEntity> subEntity = new ArrayList<>();
        String[] requestCandidateList = body.getPollCandidateList();

        for(int i = 0; i < requestCandidateList.length; i++) {
            PollCandidateListEntity e = new PollCandidateListEntity();
            e.createPollCandidateListEntity(requestCandidateList[i], 0);
            subEntity.add(e);
        }

        entity.setPollName(body.getPollName());
        entity.addPollCandidateList(subEntity);
        pollService.save(entity);

        CustomResponseEntity data = new CustomResponseEntity(HttpStatus.OK.value(), "OK", "true");
        return data;
    }

    @GetMapping("/findAll")
    public CustomResponseEntity FindAllPoll() {
        CustomResponseEntity result = new CustomResponseEntity(HttpStatus.OK.value(), "OK", null);
        List<PollEntity> data = pollService.findAll();
        result.setData(data);
        return result;
    }

    @GetMapping("/findByPollIndex")
    public CustomResponseEntity FindByPollIndex(@RequestParam(value = "pollIndex") String pollIndex) {
        log.info("/findByPollIndex Requested");
        // log.info("{}", pollIndex);
        CustomResponseEntity result = new CustomResponseEntity(HttpStatus.OK.value(), "OK", null);
        Optional<PollEntity> data = pollService.findById(Long.parseLong(pollIndex));
        result.setData(data);
        return result;
    }    

    @PutMapping("/doPoll")
    public CustomResponseEntity DoPoll(@RequestBody DoPollDTO entity) {
        log.info("/doPoll Requested");
        log.info("{}", entity.toString());
       
        Optional<PollEntity> data = pollService.findById(entity.getPollIndex());
        List<PollCandidateListEntity> list = data.get().getPollCandidateList();
        PollCandidateListEntity queryData = null;
        PollCandidateListEntity queryResult = null;
        for(int i = 0; i < list.size(); i++) {
            if(list.get(i).getPollCandidateName().equals(entity.getPollCandidateName())) { 
                queryData = list.get(i);
                int count = queryData.getPollCount();
                queryData.setPollCount(count + 1);
                queryResult = pollCandidateListService.save(queryData); 
                break;
            }
        }
        CustomResponseEntity result = new CustomResponseEntity(HttpStatus.OK.value(), "OK", null);
        result.setData(queryResult);

        return result;
    }
    
    
    
    

}
