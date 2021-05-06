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
public class Project {

    @Id
    @GeneratedValue
    private int projectId;

    @Column()
    @OneToMany(mappedBy = "taskId")
    private List<Task> task;

    @Column()
    private String projectName;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
}
