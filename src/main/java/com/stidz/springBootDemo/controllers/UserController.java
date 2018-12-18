package com.stidz.springBootDemo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/users  ")
public class UserController {

    @GetMapping(value = "/getUser")
    public String getUser(){
        return "Hello world Mariusz";
    }
}
