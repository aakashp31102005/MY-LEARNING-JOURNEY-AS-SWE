package com.sample.firstbackend;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class todos {
    @Id
    private int id;

    @Column
    private String task;

    @Column
    private boolean completed;
}
