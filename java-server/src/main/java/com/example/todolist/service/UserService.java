package com.example.todolist.service;

import com.example.todolist.model.User;

import java.util.Optional;

public interface UserService {
    Optional<User> getUser();
    String addUser(User user);
}
