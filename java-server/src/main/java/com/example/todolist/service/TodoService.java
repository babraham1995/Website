package com.example.todolist.service;

import com.example.todolist.model.Account;
import com.example.todolist.model.Project;
import com.example.todolist.model.Task;

import java.util.List;
import java.util.Optional;

public interface TodoService {
//    Optional<Account> getTodo();
    String addTodo(Account account);
    List<Account> getAllTodo();
    String deleteTodo(Long id);
    Optional<Account> updateTodo(Account account);
    List<Task> getAllTask();
    List<Project> getAllProject();
    List<Account> getAllUser();

}
