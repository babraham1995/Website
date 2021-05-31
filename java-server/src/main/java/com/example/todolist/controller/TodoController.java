package com.example.todolist.controller;


import com.example.todolist.model.Account;
import com.example.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class TodoController {

    @Autowired
    TodoService userService;

    @GetMapping("/getUser")
    public @ResponseBody Optional<Account> getUsers() {
        return userService.getUser();
    }

    @PostMapping("/addUser")
    public String addUsers(@RequestBody Account account) {

        return userService.addUser(account);
    }

    // get/post/delete/update users

}