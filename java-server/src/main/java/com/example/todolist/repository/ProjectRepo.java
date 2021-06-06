package com.example.todolist.repository;

import com.example.todolist.model.Account;
import com.example.todolist.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepo extends JpaRepository<Project, Long> {

    @Override
    List<Project> findAll();

}