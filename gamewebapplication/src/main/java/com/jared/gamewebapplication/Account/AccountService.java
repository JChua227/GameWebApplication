package com.jared.gamewebapplication.Account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    private AccountRepository accountRepository;

    @Autowired
    public AccountService(AccountRepository accountRepository){
        this.accountRepository = accountRepository;
    }

    public List<Account> findAllAccount(){
        return this.accountRepository.findAll();
    }

    public Account findAccountId(int accountId){
        return this.accountRepository.findByAccountId(accountId);
    }

    public void addAccount(Account account){
        this.accountRepository.save(account);
    }

    public void addMultipleAccount(List<Account> accountList){
        for(Account a:accountList){
            this.accountRepository.save(a);
        }
    }

    public void updateAccount(int accountId,Account account){
        for(int x=0; x<this.accountRepository.findAll().size(); x++){
            if(this.accountRepository.findAll().get(x).getAccountId()==accountId){
                this.accountRepository.findAll().set(x,account);
                return;
            }
        }
    }

    public void deleteAccountById(int accountId){
        for(Account a : this.accountRepository.findAll()) {
            if(a.getAccountId()==accountId){
                this.accountRepository.delete(a);
                return;
            }
        }
    }

}
