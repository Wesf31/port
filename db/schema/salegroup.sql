create table salegroup (
    salegroupid integer not null references salegroupnumber (salegroupid),
    groupproducts integer references groupproduct (groupproduct),
    saleduration text references salelength (salelength),
    salereason text references salereason (salereason)
)