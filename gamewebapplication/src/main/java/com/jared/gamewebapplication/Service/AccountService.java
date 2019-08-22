package com.jared.gamewebapplication.Service;

import com.jared.gamewebapplication.Repository.AccountRepository;
import com.jared.gamewebapplication.Account.Account;
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

    public Account findByUsername(String name){
        return this.accountRepository.findByUsername(name);
    }

    public void addAccount(Account account){
        this.accountRepository.save(account);
    }

    public void addMultipleAccount(List<Account> accountList){
        for(Account a:accountList){
            this.accountRepository.save(a);
        }
    }

    public void updateAccount(Account account, int accountId){
        for(Account a:this.accountRepository.findAll()){
            if(a.getAccountId()==accountId){
                this.accountRepository.delete(a);
                break;
            }
        }
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
