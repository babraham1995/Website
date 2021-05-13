package com.example.todolist.repository;

import org.springframework.data.repository.CrudRepository;

import java.io.Serializable;
import java.util.Optional;

public interface UserRepo <User, ID extends Serializable>
        extends CrudRepository<User, ID> {

        Optional<User> findById(ID primaryKey);


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

