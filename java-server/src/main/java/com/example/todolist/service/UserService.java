package com.example.todolist.service;

import com.example.todolist.model.Userb;

import java.util.Optional;

public interface UserService {
    Optional<Userb> getUser();
    String addUser(Userb userb);
}
