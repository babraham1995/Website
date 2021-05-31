package com.example.todolist.repository;

import com.example.todolist.model.Userb;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends CrudRepository<Userb, Integer> {
}

//        Optional<User> findById(ID primaryKey);


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

