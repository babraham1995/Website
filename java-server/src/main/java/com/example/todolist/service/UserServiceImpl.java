package com.example.todolist.service;

import com.example.todolist.model.Userb;
import com.example.todolist.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepo userRepo;


    @Override
    public Optional<Userb> getUser() {
        return userRepo.findById(1);

    }

    @Override
    public String addUser(Userb userb) {
        System.out.println("***s" + userb.toString());
        Userb s = userRepo.save(userb);
        System.out.println("***" + s.toString());
        return "success";
    }

}
