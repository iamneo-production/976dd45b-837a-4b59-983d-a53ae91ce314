package com.examly.springapp.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.examly.springapp.Model.EventModel;
import com.examly.springapp.Service.EventService;

@RestController
@CrossOrigin(origins = "https://8081-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io")
@RequestMapping
public class EventBookingController 
{

  @Autowired
  private EventService eservice;

  @PostMapping("/user/bookTheme")
  public EventModel bookEvent(@RequestBody EventModel add)
  {
    eservice.bookEvent(add);
    return add;
  }

  @GetMapping("/user/getBookedTheme")
  public List<EventModel> viewEvent()
  {
    List<EventModel> events = eservice.viewAllEvent();
    return events;
  }
  
  @DeleteMapping("/user/deleteTheme/{themeId}")
  public String deleteEvent(@PathVariable int themeId)
  {
    eservice.deleteEvent(themeId);
    return "\"Event deleted\"";
  }

}