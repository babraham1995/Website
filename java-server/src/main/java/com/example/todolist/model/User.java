package com.example.todolist.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "user")
@ToString
public class User {

    @Id
    @GeneratedValue
    private Long userId;

    @OneToMany(mappedBy = "projectId")
    private List<Project> project;

    @Column()
    private String name;

    //serialized, hashed, encrypted?
    @Column()
    private String username;

    @Column()
    private String password;
}
