package com.example.backend.controllers;

import com.example.backend.model.Customer;
import com.example.backend.repo.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hmz")
@CrossOrigin()
public class CustomerController {
    @Autowired
    CustomerRepository repository;

    @PostMapping("/newCustomer")
    public Customer createCust(@RequestBody Customer customer){
        repository.save(customer);
        return customer;

    }
}
