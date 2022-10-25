create database controle;

create table public.user(
  id serial primary key,
  name varchar(255),
   actived boolean,
   created_at Date,
   updated_at Date
);

select * from public.user;


create table public.revenue(
 id serial primary key,
 name_revenue varchar(255),
 value_revenue int,
 descripption varchar(255),
 actived boolean,
 created_at Date,
 updated_at Date,
 user_id int,
 foreign key (user_id)
 references public.user(id)
); 

select * from public.revenue;

create table public.fixedExpenses(
 id serial primary key,
 name_expenses varchar(255),
 descripption varchar(255),
 actived boolean,
 created_at Date,
 updated_at Date,
 user_id int,
 foreign key (user_id)
 references public.user(id)
); 

select * from public.fixedExpenses;