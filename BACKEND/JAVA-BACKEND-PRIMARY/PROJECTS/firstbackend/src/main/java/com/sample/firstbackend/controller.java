package com.sample.firstbackend;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@Data
@RestController
public class controller {

    @Autowired
    private service serviceo;

    @GetMapping("/home")
    public List<todos> home(){
        return serviceo.home();
    }
    @GetMapping("/task/{id}")
    public ResponseEntity<?> task(@PathVariable int id)  {
        todos t;
        try {
             t = serviceo.findById(id);
        }catch(CustomException e){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(t);
    }
}
