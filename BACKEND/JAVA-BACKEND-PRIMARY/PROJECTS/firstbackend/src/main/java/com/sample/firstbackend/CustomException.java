package com.sample.firstbackend;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


public class CustomException extends Exception {

    public CustomException(String e) {
        super(e);
    }
}
