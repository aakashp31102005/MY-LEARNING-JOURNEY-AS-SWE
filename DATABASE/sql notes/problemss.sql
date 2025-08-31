CREATE TABLE Queries (
    query_name VARCHAR(50),
    result VARCHAR(100),
    position INT,
   rating INT
);

INSERT INTO Queries (query_name, result, position, rating) VALUES
('Dog', 'Golden Retriever', 1, 5),
('Dog', 'German Shepherd', 2, 5),
('Dog', 'Mule', 200, 1),
('Cat', 'Shirazi', 5, 2),
('Cat', 'Siamese', 3, 3),
('Cat', 'Sphynx', 7, 4);
select *from Queries;

select query_name,round((nominator/denominator),2) as quality ,round((nominator2/denominator)*100,2) as poor_query_percentage from(
select query_name,sum(`rating`/`position`) as `nominator`,count(`queries`.`query_name`) as `denominator` ,
count(case when `rating` < 3 then 1 end) as `nominator2`
from `rdb`.`queries` 
group by `query_name`)in1;


CREATE TABLE Customer (
    customer_id INT,
    product_key INT
);

INSERT INTO Customer (customer_id, product_key) VALUES
(1, 5),
(2, 6),
(3, 5),
(3, 6),
(1, 6);

CREATE TABLE Product (
    product_key INT
);

INSERT INTO Product (product_key) VALUES
(5),
(6);

set @a=(select count(*) as total from product);



select customer_id from
(select customer_id,count(distinct product_key)  as valid from customer group by customer_id) `one`
join
(select count(*) as total from product) `two`
on  `one`.valid=`two`.total;

select count(distinct product_key) as total from customer;

CREATE TABLE Person (
    id INT,
    email VARCHAR(100)
);

INSERT INTO Person (id, email) VALUES
(1, 'john@example.com'),
(2, 'bob@example.com'),
(3, 'john@example.com');

select min(id),email from person group by email;

select *from person;
set sql_safe_updates=0;
delete p1 from person p1 join
person p2 on p1.email=p2.email and p1.id>p2.id;

-- Create the Employee table
CREATE TABLE Employee (
    id INT PRIMARY KEY,
    salary INT
);

-- Insert rows into Employee table
INSERT INTO Employee (id, salary) VALUES
(1, 100);





truncate  employee;
select(select distinct salary from
(select id,salary,dense_rank() over(order by salary desc) as `rank` from employee)`out`
where `rank`=2) as SecondHighestSalary;



create table s(
a int
);

select(select *from s) as ss;


select(select salary from employee order by salary desc limit 1 offset 1) as SecondHighestSalary;