package com.example.todolist.controller;


import com.example.todolist.model.Account;
import com.example.todolist.model.Project;
import com.example.todolist.model.Task;
import com.example.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TodoController {

    @Autowired
    private TodoService todoService;

//    @GetMapping("/getTodo")
//    public @ResponseBody Optional<Account> getTodos() {
//        return todoService.getTodo();
//    }

    @GetMapping("/getAllUser")
    public @ResponseBody
    List<Account> getAllTodos() {
        return todoService.getAllUser();
    }

    @GetMapping("/getAllProject")
    public @ResponseBody
    List<Project> getAllProjects() {
        return todoService.getAllProject();
    }

    @GetMapping("/getAllTask")
    public @ResponseBody
    List<Task> getAllTasks() {
        return todoService.getAllTask();
    }

    @DeleteMapping("/deleteTodo/{id}")
    public @ResponseBody String deleteTodos(@PathVariable Long id) {
        return todoService.deleteTodo(id);
    }

    @GetMapping("/updateTodo")
    public @ResponseBody Optional<Account> updateTodos(@RequestBody Account account) {
        return todoService.updateTodo(account);
    }


    @PostMapping("/addTodo")
    public String addTodos(@RequestBody Account account) {

        return todoService.addTodo(account);
    }

    // get/post/delete/update users

}