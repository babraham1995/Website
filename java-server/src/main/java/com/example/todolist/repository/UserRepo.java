package com.example.todolist.repository;

import com.example.todolist.model.User;
import org.springframework.data.repository.CrudRepository;

import java.io.Serializable;

public interface UserRepo <T, ID extends Serializable>
        extends CrudRepository<T, ID> {

//    <S extends T> S save(S entity);
//
//    User findOne(ID primaryKey);
//
//    Iterable<T> findAll();
//
//    long count();
//
//    void delete(T entity);
//
//    boolean exists(ID primaryKey);

//    User findOneUser(ID primaryKey);
//
//    String saveUser(User user);
//
//    List<User> findAll();
//
//    void deleteUser(User user);
//
//    void insertUser(User user);
//
//    void updateUser(User user);
}

