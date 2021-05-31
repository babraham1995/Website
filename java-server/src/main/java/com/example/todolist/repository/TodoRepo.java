package com.example.todolist.repository;

import com.example.todolist.model.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TodoRepo extends CrudRepository<Account, Integer> {

            Optional<Account> findByAccountId(int id);

}



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

