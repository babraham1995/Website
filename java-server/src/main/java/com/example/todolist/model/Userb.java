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
@Table(name = "userb")
@ToString
public class Userb {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;

    @OneToMany(mappedBy = "userb")
    private List<Project> project;

    @Column()
    private String name;

    //serialized, hashed, encrypted?
    @Column()
    private String username;

    @Column()
    private String password;
}
