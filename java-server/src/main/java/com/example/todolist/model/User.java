package com.example.todolist.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
@Entity
public class User {

    @Id
    @GeneratedValue
    private Long userId;

    @OneToMany(mappedBy = "projectId")
    private List<Project> project;

    @Column(nullable = false)
    private String name;

    //serialized, hashed, encrypted?
    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;
}
