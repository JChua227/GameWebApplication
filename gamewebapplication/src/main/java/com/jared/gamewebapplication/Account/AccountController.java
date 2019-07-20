package com.jared.gamewebapplication.Account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/findById/{accountid}")
    public Account findByAccountAccountId(@PathVariable(value="accountid")int accountid){
        return accountService.findAccountId(accountid);
    }

    @PutMapping("/add")
    public void addAccount(@RequestBody Account account){
        this.accountService.addAccount(account);
    }

    @PostMapping("/update")
    public void updateAccount(@RequestBody Account account){
        this.accountService.updateAccount(account);
    }

    @DeleteMapping("/deleteById/{accountid}")
    public void deleteAccountById(@PathVariable(value="accountId")int accountId){
        this.accountService.deleteAccountById(accountId);
    }
}
