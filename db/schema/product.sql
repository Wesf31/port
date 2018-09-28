create table products (
    productid integer not null references productid (productid),
    photourl text references photourl (photourl),
    info text references productinfo (productinfo),
    productname text references productname (productname),
    productprice integer references productprice (productprice),
    productsale integer references saleamount (saleamount)
)