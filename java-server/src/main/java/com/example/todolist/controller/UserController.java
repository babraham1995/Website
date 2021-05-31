package com.example.todolist.controller;


import com.example.todolist.model.Userb;
import com.example.todolist.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/getUser")
    public @ResponseBody Optional<Userb> getUsers() {
        return userService.getUser();
    }

    @PostMapping("/addUser")
    public String addUsers(@RequestBody Userb userb) {

        return userService.addUser(userb);
    }

    // get/post/delete/update users

}