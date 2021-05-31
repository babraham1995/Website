package com.example.todolist.service;

import com.example.todolist.model.Account;
import com.example.todolist.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepo userRepo;


    @Override
    public Optional<Account> getUser() {
        return userRepo.findById(1);

    }

    @Override
    public String addUser(Account account) {
        System.out.println("***s" + account.toString());
        Account s = userRepo.save(account);
        System.out.println("***" + s.toString());
        return "success";
    }

}
