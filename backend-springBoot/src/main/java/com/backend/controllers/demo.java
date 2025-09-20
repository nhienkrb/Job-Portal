package com.backend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class demo {
    @GetMapping("/")
    public ResponseEntity<?> getDemo(){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("OK");
    }
}
