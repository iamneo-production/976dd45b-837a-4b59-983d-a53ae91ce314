package com.examly.springapp.Model;

import java.util.*;

import javax.persistence.*;

@Entity
@Table(name = "eventinfo")
public class EventModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int eventId;
    private long userId;
    private String eventName;
    private String applicantName;
    private String applicantAddress;
    private String applicantMobile;
    private String applicantEmail;
    private String eventAddress;
    private String eventDate;
    
    private String eventTime;
    
    @ElementCollection()
    @CollectionTable(name = "addon_ids")
    private List<Integer> addonId;
    @ElementCollection()
    @CollectionTable(name = "event_ids")
    
    private List<Integer> eventMenuId;

    
    

    private String eventCost;
    public int getEventId()
     {
        return eventId;
    }
    public void setEventId(int eventId)
     {
        this.eventId = eventId;
    }
    public String getEventName() 
    {
        return eventName;
    }
    public void setEventName(String eventName) 
    {
        this.eventName = eventName;
    }
    public String getApplicantName()
     {
        return applicantName;
    }
    public void setApplicantName(String applicantName) 
    {
        this.applicantName = applicantName;
    }
    public String getApplicantAddress()
     {
        return applicantAddress;
    }
    public void setApplicantAddress(String applicantAddress) 
    {
        this.applicantAddress = applicantAddress;
    }
    public String getApplicantMobile()
     {
        return applicantMobile;
    }
    public void setApplicantMobile(String applicantMobile)
     {
        this.applicantMobile = applicantMobile;
    }
    public String getApplicantEmail() 
    {
        return applicantEmail;
    }
    public void setApplicantEmail(String applicantEmail) 
    {
        this.applicantEmail = applicantEmail;
    }
    public String getEventAddress() 
    {
        return eventAddress;
    }
    public void setEventAddress(String eventAddress) 
    {
        this.eventAddress = eventAddress;
    }
    public String getEventDate() 
    {
        return eventDate;
    }
    public void setEventDate(String eventDate)
     {
        this.eventDate = eventDate;
    }
    public String getEventTime() 
    {
        return eventTime;
    }
    public void setEventTime(String eventTime)
     {
        this.eventTime = eventTime;
    }
    
    
    public String getEventCost() 
    {
        return eventCost;
    }
    public void setEventCost(String eventCost)
     {
        this.eventCost = eventCost;
    }
    public EventModel orElseThrow(Object object) 
    {
        return null;
    }
    
    public List<Integer> getAddonId() 
    {
        return this.addonId;
    }

    public void setAddonId(List<Integer> addonId)
     {
        this.addonId = addonId;
    }

    public List<Integer> getEventMenuId() 
    {
        return this.eventMenuId;
    }

    public void setEventMenuId(List<Integer> eventMenuId)
    {
        this.eventMenuId = eventMenuId;
    }

    public long getUserId() {
        return this.userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }


}