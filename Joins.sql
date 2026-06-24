create database college;
use college;
create table emp(id int, name varchar(20), sal int);
insert into emp values(101,'Anu',50000);
insert into emp values(102,'vijay',70000);
insert into emp values(103,'aji',30000);
insert into emp values(104,'shiva',60000);
create table Students(id int, name varchar(20), dept varchar(10));
insert into Students values(201,'hari','AIML');
insert into Students values(202,'Zara','CSE');
insert into Students values(103,'jeevi','CSD');
insert into Students values(104,'Vihaa','AIDS');
select*from emp;
select*from students;
select *from emp INNER JOIN Students on emp.id = Students.id;
select * from emp LEFT JOIN Students on emp.id = Students.id;
select * from emp RIGHT JOIN Students on emp.id = Students.id;
select * from emp LEFT JOIN Students on emp.id = Students.id UNION select * from emp RIGHT JOIN Students on emp.id = Students.id;
select *from emp CROSS JOIN Student;
select *from emp e1 JOIN emp e2 on e1.id <> e2.id;
select dept, COUNT(*) as total_students from Student GROUP BY dept;
select SUM(sal) as salary from emp;
SELECT dept, COUNT(*) from Student GROUP BY dept having COUNT(*) > 1;









