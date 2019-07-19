package com.jared.gamewebapplication.Account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/account")
public class AccountController {

    private AccountService accountService;

    @Autowired
    public AccountController(AccountService accountService){
        this.accountService = accountService;
    }

    @GetMapping("/findAll")
    public List<Account> findAllAccount(){
        return this.accountService.findAllAccount();
    }

    @PutMapping("/add")
    public void addAccount(@RequestBody Account account){
        this.accountService.addAccount(account);
    }

    @PostMapping("/update")
    public void updateAccount(Account account){
        this.accountService.updateAccount(account);
    }

    @DeleteMapping("/deleteById")
    public void deleteAccountById(int accountId){
        this.accountService.deleteAccountById(accountId);
    }
}
