package com.examly.springapp.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.examly.springapp.Model.EventModel;
import com.examly.springapp.Service.EventService;

@RestController
@CrossOrigin(origins = "https://8081-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io")
@RequestMapping
public class EventController 
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
  @GetMapping("/user/getBookedTheme/{themeId}")
  public EventModel viewEventbyId(@PathVariable int themeId)
  {
    EventModel add = eservice.viewEvent(themeId);
    return add;
  }
  //tc
  @GetMapping("/admin/event")
  public List<EventModel> viewAdminEvent()
  {
    List<EventModel> events = eservice.viewAllEvent();
    return events;
  }
  @GetMapping("/admin/event/{themeId}")
  public EventModel viewAdminEventbyId(@PathVariable int themeId)
  {
    EventModel add = eservice.viewEvent(themeId);
    return add;
  }
  //...
  @PutMapping("/user/editTheme/{themeId}")
  public String editEvent(@PathVariable int themeId,@RequestBody EventModel e)
  {

    EventModel event = eservice.findById(themeId);
    if(event==null)
    {
      return "\"No data Exist\" ";
    }
    event.setEventName(e.getEventName());
    event.setEventAddress(e.getEventAddress());
    event.setApplicantName(e.getApplicantName());
    event.setApplicantEmail(e.getApplicantEmail());
    event.setApplicantMobile(e.getApplicantMobile());
    event.setApplicantAddress(e.getApplicantAddress());
    event.setEventDate(e.getEventDate());
    event.setEventFromTime(e.getEventFromTime());
    event.setEventToTime(e.getEventToTime());
    event.setEventTime(e.getEventTime());
    event.setEventCost(e.getEventCost());
    event.setAddonId(e.getAddonId());
    event.setEventMenuId(e.getEventMenuId());
    event.setVegCount(e.getVegCount());
    event.setNonvegCount(e.getNonvegCount());
    eservice.editEvent(event);
   
    return "\"Updated Successfully\" ";

  }
  @DeleteMapping("/user/deleteTheme/{themeId}")
  public String deleteEvent(@PathVariable int themeId)
  {
    eservice.deleteEvent(themeId);
    return "\"Event deleted\"";
  }
  //unique
  @GetMapping("/mybooking/{userId}")
  public List<EventModel> getbookingById(@PathVariable long userId) {
    List<EventModel> booking = eservice.getbookingById(userId);
   return booking;
 }

}