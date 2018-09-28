create table customer(
    customerId integer not null references id(id),
    username text not null references customer(email)
)