create table customer(
    customerId integer primary key not null references id(id),
    username text not null references customer(email),
    loginpassword text not null references password(password),
    balance integer not null references accountBalance(balance)
)