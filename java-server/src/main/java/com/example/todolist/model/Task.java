package com.example.todolist.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@AllArgsConstructor
@Getter
@Setter
@Entity
public class Task {

    @Id
    @GeneratedValue
    private int taskId;

    @Column()
    private String title;

    @Column()
    private String content;

    @Column()
    private boolean checked;

    @ManyToOne
    @JoinColumn(name="project_id")
    private Project project;

}
