package com.sample.firstbackend;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sample.firstbackend.todos;

import java.net.Inet4Address;

public interface  Repository extends JpaRepository<todos, Integer> {
}
