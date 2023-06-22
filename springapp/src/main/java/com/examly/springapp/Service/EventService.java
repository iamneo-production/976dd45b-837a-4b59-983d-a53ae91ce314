package com.examly.springapp.Service;

import java.util.List;


import com.examly.springapp.Model.EventModel;


public interface EventService {
   EventModel bookEvent(EventModel add); 

   EventModel viewEvent(int eventid);

    List<EventModel> viewAllEvent();

     void deleteEvent(int eventid);

    void editEvent(EventModel event);

    EventModel findById(int eventid);

    //unique
   List<EventModel> getbookingById(long userId);
   
}