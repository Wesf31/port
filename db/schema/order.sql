create table orders (
    orderid integer not null references orders (orderId),
    orderamount integer not null references orderamount (orderAmount),
    orderstatus text not null references orderstatus (orderStatus)
)