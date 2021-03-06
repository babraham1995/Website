package com.example.todolist.repository;

import com.example.todolist.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface TodoRepo extends JpaRepository<Account, Long> {

    @Override
    List<Account> findAll();

}

