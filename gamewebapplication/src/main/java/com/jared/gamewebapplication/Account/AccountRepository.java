package com.jared.gamewebapplication.Account;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account,Integer> {
    public Account findByAccountId(int accountId);
    public Account findByUsername(String name);
}
