package com.example.todolist.service;

import com.example.todolist.model.User;
import com.example.todolist.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepo userRepo;


    @Override
    public Optional<User> getUser() {
        return userRepo.findById(1);

    }

    @Override
    public String addUser(User user) {
        System.out.println("***" + user.toString());
        Object s = userRepo.save(user);
        System.out.println("***" + s);
        return "success";
    }

}
