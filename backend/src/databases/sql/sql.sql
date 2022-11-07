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
 value_revenue float,
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


//Contas pagas
create table public.paidBills(
 id serial primary key,
 name_Paid_Bills varchar(255),
 value_paidBills int,
 descripption varchar(255),
 created_at Date,
 updated_at Date,
 revenue_id int,
 foreign key (revenue_id)
 references public.revenue(id)
);

create table public.wallet(
 id serial primary key,
 total float,
 user_id int,
 foreign key (user_id)
 references public.user(id)
);

select * from public.wallet;