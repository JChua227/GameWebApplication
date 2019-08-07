package com.jared.gamewebapplication.Account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sun.security.util.Password;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
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
    public Check addAccount(@RequestBody Account account){
        Check check = new Check();
        try{
            if(this.accountService.findByUsername(account.getUsername()).getUsername().equalsIgnoreCase(account.getUsername())) {
                check.setUsername(true);
            }
        }
        catch(NullPointerException e){

        }

        if(!account.validate()){
            check.setPassword(true);
        }

        if(check.getPassword().equals("") && check.getUsername().equals("")) {
            this.accountService.addAccount(account);
        }

        return check;
    }

    @PostMapping("/addMultipleAccount")
    public void addMultipleAccount(@RequestBody List<Account> accountList) {
        this.accountService.addMultipleAccount(accountList);
    }

    @DeleteMapping("/deleteById/{accountId}")
    public void deleteAccountById(@PathVariable(value="accountId")int accountId){
        this.accountService.deleteAccountById(accountId);
    }
}
