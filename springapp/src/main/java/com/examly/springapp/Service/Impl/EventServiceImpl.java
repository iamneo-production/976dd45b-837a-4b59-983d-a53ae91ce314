package com.examly.springapp.Service.Impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.Model.EventModel;
import com.examly.springapp.Repository.EventRepository;
import com.examly.springapp.Service.EventService;

@Service
public class EventServiceImpl implements EventService{
    @Autowired
    private EventRepository eRepo;
     
    @Override
    public EventModel bookEvent(EventModel add)
    {
        return eRepo.save(add);
    }
    @Override
    public EventModel viewEvent(int eventid) 
    {
        return eRepo.findById(eventid).orElse(new EventModel());
    }
    @Override
    public List<EventModel> viewAllEvent()
    {
        return eRepo.findAll();
    }
    @Override
    public  void deleteEvent(int eventid)
    {
        eRepo.deleteById(eventid);
        
    }
    @Override
    public  void editEvent(EventModel event)
    {
        eRepo.save(event);
    }

    @Override
    public EventModel findById(int eventid) 
    {
        return eRepo.findById(eventid).orElse(null);
    }
    //unique
    @Override
    public List<EventModel> getbookingById(long userId) {
        return eRepo.findByuserId(userId);
    }
}