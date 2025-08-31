CREATE TABLE numbers (
    id INT PRIMARY KEY,
    num INT
);
update numbers set 
num=case
when id=1 then 1
when id=2 then 1
when id=3 then 1
when id=4 then 2
when id=5 then 1
when id=6 then 2
when id=7 then 2 
else num
end;

SELECT n1.id, n1.num, n2.id AS next_id, n2.num AS next_num
FROM numbers n1
JOIN numbers n2 ON n1.id = n2.id -1;



select num as consecutiveNums from(select *from(
		select num,lag(num)over() as bvalue,lead(num)over() as avalue from numbers) `outer`
        where bvalue=avalue and bvalue=num and avalue=num) b;
 
 select lag(num)over() as bvalue,lead(num)over() as avalue from numbers;
        
select *from numbers;


















drop table employees;
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    department VARCHAR(50),
    salary INT,
    hire_date DATE
);

INSERT INTO employees (emp_id, emp_name, department, salary, hire_date) VALUES
(1, 'Alice', 'HR', 50000, '2020-03-15'),
(2, 'Bob', 'HR', 60000, '2019-06-20'),
(3, 'Charlie', 'IT', 70000, '2018-07-10'),
(4, 'David', 'IT', 75000, '2017-09-05'),
(5, 'Eve', 'Finance', 80000, '2021-01-25'),
(6, 'Frank', 'Finance', 90000, '2022-02-15'),
(7, 'Grace', 'IT', 72000, '2019-04-12'),
(8, 'Hank', 'HR', 62000, '2018-08-19'),
(9, 'Ivy', 'Finance', 85000, '2020-11-11'),
(10, 'Jack', 'IT', 71000, '2021-05-23');

select lag(emp_id) over(order by emp_id desc) as 
prevvalue from employees;


CREATE TABLE product_prices (
    product_id INT,
    new_price INT,
    change_date DATE,
    PRIMARY KEY (product_id, change_date)
);

INSERT INTO product_prices (product_id, new_price, change_date) VALUES
(1, 20, '2019-08-14'),
(2, 50, '2019-08-14'),
(1, 30, '2019-08-15'),
(1, 35, '2019-08-16'),
(2, 65, '2019-08-17'),
(3, 20, '2019-08-18');



select distinct a.product_id,CASE 
        WHEN b.product_id IS NULL THEN 10  -- ✅ Assign 10 directly
        ELSE b.new_price  -- ✅ Use correct column name
    END AS price 
from product_prices  a
left join 
(select  n1.product_id, n1.new_price, n1.change_date, n2.lastdate
from product_prices n1
left join  
(select product_id ,max(change_date) as lastdate
from (select *from product_prices where change_date <="2019-08-16")n2
group by product_id) n2
on n1.product_id=n2.product_id where n1.change_date=n2.lastdate)
b on a.product_id=b.product_id




;
SELECT DISTINCT product_id, 10 AS price 
FROM Product_prices 
WHERE product_id NOT IN (
    SELECT DISTINCT product_id 
    FROM Product_prices 
    WHERE change_date <= '2019-08-16'
)
UNION 
SELECT product_id, new_price AS price 
FROM Product_prices 
WHERE (product_id, change_date) IN (
    SELECT product_id, MAX(change_date) 
    FROM Product_prices 
    WHERE change_date <= '2019-08-16' 
    GROUP BY product_id);  
    
    
 SELECT DISTINCT product_id 
    FROM Product_prices 
    WHERE change_date <= '2019-08-16';
    
    
drop table people;
CREATE TABLE Queue (
    person_id INT PRIMARY KEY,
    person_name VARCHAR(100),
    weight INT,
    turn INT
);
INSERT INTO Queue (person_id, person_name, weight, turn) VALUES
(5, 'Alice', 250, 1),
(4, 'Bob', 175, 5),
(3, 'Alex', 350, 2),
(6, 'John Cena', 400, 3),
(1, 'Winston', 500, 6),
(2, 'Marie', 200, 4);


select Name  from (select Turn,person_id as ID,person_Name as Name ,Weight,
sum(weight) over(order by turn asc )as Total_Weight from
 queue)a where Total_Weight<=1000  order by total_weight desc limit 1 ;


select Turn,person_id as ID,person_Name as Name ,Weight,
sum(weight) 
over(order by turn asc rows between 2 preceding and current row)as Total_Weight from
 queue;
 
 create table accounts(
 account_id int primary key,
 income int
 );
 insert into accounts values(3,108939),(2,12747),(8,87709),(6,91796);
 
 
select category,count(category) as count from (select account_id,income,
 case
 when income <20000 then'lowsalary'
 when income>=20000 and income< 50000 then 'average salarry'
 when income>=50000 then 'high salary'
 else 0
 end as category from accounts)a group by category ;
 
 
 create table temp(
 category varchar(20)
 );
 insert into temp values('Low Salary'),('Average salary'),('High salary');
 
 select *from temp a
 left join (
 select account_id,income,
 case
 when income <20000 then'lowsalary'
 when income>=20000 and income< 50000 then 'average salarry'
 when income>=50000 then 'high salary'
 else 0
 end as category from accounts) b 
 on a.category=b.category;
 



 
 
 
 
 
 
select category,count(category) as cout from( select category from(
 select 'Low Salary' as category from accounts where income <20000)
 a 
 union all
 (select 'Average Salary' as category 
 from accounts where income>=20000 and income< 50000) 
 union all
 (select 'High Salary' as category
 from accounts where income>=50000))ou group by category;
 
 
 
 
 
 insert into temp values('Low Salary'),('Average Salarry'),('High Salary');
 
select ifnull(category,'Average Salary'),count as accounts_count from (select category,count(category) as count from (select n2.category  from temp n1
left join  
(select account_id,income,
 case
 when income <20000 then'LowSalary'
 when income>=20000 and income< 50000 then 'Average Salarry'
 when income>=50000 then 'High Salary'
 else 0
 end as category from accounts) n2 
 on n1.category=n2.category)o group by category)out2;

 
 select n2.category from temp n1
left join 
 (select account_id,income,
 case
 when income <20000 then'lowsalary'
 when income>=20000 and income< 50000 then 'average salarry'
 when income>=50000 then 'high salary'
 else 0
 end as category from accounts) n2 
 on n1.category=n2.category;
 
 
 
 CREATE TABLE Seat (
    id INT PRIMARY KEY,
    student VARCHAR(50)
);

INSERT INTO Seat (id, student) VALUES
(1, 'Abbot'),
(2, 'Doris'),
(3, 'Emerson'),
(4, 'Green'),
(5, 'Jeames');


select id,
case
when mod(id,2) <>0 then `lead`
when mod(id,2) =0 then `lag`
else 0
end as students from(
select id, ifnull(lead(student) over(),student) as `lead` ,lag(student) over() as `lag` 
from seat)a order by id asc ;

select mod(2,2);

select id, ifnull(lead(student) over() ,student) as `lead` ,lag(student) over() as `lag` 
from seat;