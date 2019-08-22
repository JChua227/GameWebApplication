package com.jared.gamewebapplication.Repository;

import com.jared.gamewebapplication.Account.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account,Integer> {
    public Account findByAccountId(int accountId);
    public Account findByUsername(String name);
}
