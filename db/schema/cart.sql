create table cart (
    cartid primary key integer not null,
    customerid integer references customerid (customerid),
    cartcontent text
)