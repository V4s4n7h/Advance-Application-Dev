package com.example.appdev.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class BookingDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;
    private String bEventName;
    private String bEmail;
    private String bUserName;
    private String bBookingdate;
    private String bEventDate;
    private String bDescription;
    private String bLocation;
    private int bHeadCount;
    private double bTotal;
    
    
    


}
