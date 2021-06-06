package com.example.todolist.repository;

import com.example.todolist.model.Account;
import com.example.todolist.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepo extends JpaRepository<Task, Long> {

    @Override
    List<Task> findAll();
}