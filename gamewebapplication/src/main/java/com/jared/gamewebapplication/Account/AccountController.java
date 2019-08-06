package com.jared.gamewebapplication.Account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
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
    public Account findByAccountId(@PathVariable(value="accountid")int accountid){
        return accountService.findAccountId(accountid);
    }

    @PostMapping("/add")
    public boolean addAccount(@RequestBody Account account){
        try {
            this.accountService.findByUsername(account.getUsername()).getUsername().equalsIgnoreCase(account.getUsername());
            return false;
        }
        catch(Exception e) {
            this.accountService.addAccount(account);
        }
        return true;
    }

    @PostMapping("/validate")
    public boolean validate(@RequestBody Password password){
        if(!password.getPassword().equals(password.getReTypePassword())){
            return false;
        }
        return true;
    }

    @PostMapping("/addMultipleAccount")
    public void addMultipleAccount(@RequestBody List<Account> accountList){
        this.accountService.addMultipleAccount(accountList);
    }

    @PutMapping("/update/{accountid}")
    public void updateAccount(@RequestBody Account account,@PathVariable(value="accountid")int accountid){
        this.accountService.updateAccount(account,accountid);
    }

    @DeleteMapping("/deleteById/{accountId}")
    public void deleteAccountById(@PathVariable(value="accountId")int accountId){
        this.accountService.deleteAccountById(accountId);
    }
}
