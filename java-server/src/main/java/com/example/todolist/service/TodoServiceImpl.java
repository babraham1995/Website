package com.example.todolist.service;

import com.example.todolist.model.Account;
import com.example.todolist.model.Project;
import com.example.todolist.model.Task;
import com.example.todolist.repository.ProjectRepo;
import com.example.todolist.repository.TaskRepo;
import com.example.todolist.repository.TodoRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService {

    @Autowired
    private final TodoRepo todoRepo;
    @Autowired
    private final TaskRepo taskRepo;
    @Autowired
    private final ProjectRepo projectRepo;


//    @Override
//    public Optional<Account> getTodo() {
//        Optional<Account> s = todoRepo.findByAccountId(1);
//        System.out.println(s);
//        return s;
//
//    }

    public List<Account> getAllUser() {

        return  todoRepo.findAll();

    }

    public List<Project> getAllProject() {

        return  projectRepo.findAll();

    }

    public List<Task> getAllTask() {

        return  taskRepo.findAll();


    }

    @Override
    public String deleteTodo(Long id) {
        todoRepo.deleteById(id);
        return "success";

    }

    @Override
    public Optional<Account> updateTodo(Account account) {
//        Optional<Account> s = todoRepo.updateAccount(account);
//        System.out.println(s);
//        return s;
        return null;
    }

    @Override
    public String addTodo(Account account) {
//        System.out.println("***s" + account.toString());
        Account s = todoRepo.save(account);
//        System.out.println("***" + s.toString());
        return "success";
    }

    @Override
    public List<Account> getAllTodo() {
        return null;
    }

}
