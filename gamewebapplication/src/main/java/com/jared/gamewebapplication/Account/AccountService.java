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

    public Account findByAccountId(int accountId){
        return this.accountRepository.findByAccountId(accountId);
    }

    public void addAccount(Account account){
        this.accountRepository.save(account);
    }

    public void updateAccount(Account account){
        this.accountRepository.save(account);
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