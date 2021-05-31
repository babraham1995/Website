package com.example.todolist.service;

import com.example.todolist.model.Account;

import java.util.Optional;

public interface TodoService {
    Optional<Account> getUser();
    String addUser(Account account);
}
