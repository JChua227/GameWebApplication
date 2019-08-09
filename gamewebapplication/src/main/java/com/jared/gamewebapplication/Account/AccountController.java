package com.jared.gamewebapplication.Account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/createaccount/{list}")
    public Check createAccount(@PathVariable(value="list")List<String>list){
        Check check = new Check();
        check.setComma(list);

        Account account = new Account(list.get(0),list.get(1),list.get(2));

        try{
            if(this.accountService.findByUsername(account.getUsername()).getUsername().equalsIgnoreCase(account.getUsername())) {
                check.setUsername(true);
            }
        }
        catch(NullPointerException e){
            check.setUsername(false);
        }

        if(!account.validate(list.get(3))){
            check.setPassword(true);
        }
        else{
            check.setPassword(false);
        }

        if(check.getPassword().equals("") && check.getUsername().equals("") && check.getComma().equals("")) {
            this.accountService.addAccount(account);
            check.setSuccess();
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

    @GetMapping("/login/{login}")
    public boolean login(@PathVariable(value = "login")List<String> list){
        try {
            if (!this.accountService.findByUsername(list.get(0)).getPassword().equals(list.get(1))) {
                return false;
            }
        }
        catch(Exception e){
            return false;
        }
        return true;
    }
}
