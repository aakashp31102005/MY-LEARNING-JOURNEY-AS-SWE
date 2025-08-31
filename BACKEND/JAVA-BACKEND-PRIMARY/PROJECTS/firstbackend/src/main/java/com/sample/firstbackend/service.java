package com.sample.firstbackend;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.awt.geom.RectangularShape;
import java.util.List;
@Data
@Service
public class service {

    @Autowired
    Repository r;

    public List<todos> home(){
        return r.findAll();
    }


    public todos findById(int id) throws CustomException {
        return r.findById(id)
                .orElseThrow(() -> new CustomException("Todo with id " + id + " not found"));
    }

}
