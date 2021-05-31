package com.example.todolist.service;

import com.example.todolist.model.Account;
import com.example.todolist.repository.TodoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    TodoRepo userRepo;


    @Override
    public Optional<Account> getUser() {
        Optional<Account> s = userRepo.findByAccountId(1);
        System.out.println(s);
        return s;

    }

    @Override
    public String addUser(Account account) {
        System.out.println("***s" + account.toString());
        Account s = userRepo.save(account);
        System.out.println("***" + s.toString());
        return "success";
    }

}
