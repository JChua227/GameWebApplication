package com.jared.gamewebapplication.Account;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account,Integer> {
    public Account findByAccountId(Integer accountId);
}
