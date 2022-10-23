package com.ucsc.vwsbackend.controllers;


import com.ucsc.vwsbackend.dto.EventDetail;
import com.ucsc.vwsbackend.dto.NewCoordinateEventDetail;
import com.ucsc.vwsbackend.dto.NewProjectDetail;
import com.ucsc.vwsbackend.dto.ParticipateEvent;
import com.ucsc.vwsbackend.entities.Announcement;
import com.ucsc.vwsbackend.entities.Event;
import com.ucsc.vwsbackend.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class EventController {
    @Autowired
    EventService eventService;

    @GetMapping("/getUpcomingEvents")
    public List<EventDetail> getUpcomingEvents() {
        return eventService.getUpcomingEvents();
    }

    @GetMapping("/getPreviousEvents")
    public List<EventDetail> getPreviousEvents() {
        return eventService.getPreviousEvents();
    }



    //Volunteer

    @GetMapping("/getOngoingEvents")
    public List<EventDetail> getOngoingEvents() {
        return eventService.getOngoingEvents();
    }

    @GetMapping("/getCompletedEvents")
    public List<EventDetail> getCompletedEvents() {
        return eventService.getCompletedEvents();
    }

    @GetMapping("/getCoordinatedEventById/{id}")
    public Event getCoordinatedEventById(@PathVariable(value = "id") long id) {
        return eventService.getCoordinatedEventById(id);
    }
    @PostMapping("/addCoordinatedEvents")
    public long addCoordinatedEvents(@RequestBody NewCoordinateEventDetail newCoordinateEventDetail){
        return eventService.addCoordinatedEvents(newCoordinateEventDetail);
    }

    @GetMapping("/getCoordinatedEvents")
    public List<EventDetail> getCoordinatedEvents() {
        return eventService.getCoordinatedEvents();
    }

    @GetMapping("/getApprovedCoordinatedEvents")
    public List<EventDetail> getApprovedCoordinatedEvents() {
        return eventService.getApprovedCoordinatedEvents();
    }

    @PutMapping("/editMyCoordinatedEvents")
//    {
//            "annId": 6,
//            "title": "Update Announcement 1",
//            "content": "content",
//            "category": "guest",
//            "date": "2022-07-09T06:40:00.000+00:00"
//    }
    public long editMyCoordinatedEvents(@RequestBody Event event){
        return eventService.editMyCoordinatedEvents(event);
    }

    @PutMapping("/updateCoordinatedEventStatus")
    public long updateCoordinatedEventStatus(@RequestBody Event event){
        return eventService.updateCoordinatedEventStatus(event);
    }

    @PostMapping("/participateToEvent")
    public long participateToEvent(@RequestBody ParticipateEvent participateEvent) {
        return eventService.participateToEvent(participateEvent);
    }

    @DeleteMapping("/leaveEvent")
    public long leaveEvent(@RequestBody ParticipateEvent participateEvent) {
        return eventService.leaveEvent(participateEvent);
    }

//    @DeleteMapping("/leaveEvent/{volunteer_id}")
////    public int leaveEvent(@PathVariable Long volunteer_id)
////    {
////        int status = eventService.leaveEvent(volunteer_id);
////        return status;
////    }

    @GetMapping("/joinedEvent")
    public List<ParticipateEvent> joinedEvent() {
        return eventService.joinedEvent();
    }

//    @DeleteMapping("/leaveEvent/{volunteer_id}")
//    public int leaveEvent(@PathVariable Long volunteer_id)
//    {
//        int status = eventService.leaveEvent(volunteer_id);
//        return status;
//    }
}
