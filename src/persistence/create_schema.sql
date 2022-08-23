--DROP SCHEMA ablackmagic;
--DROP TABLE ablackmagic."ABM-Navigation";

create database sherry;

create table publications(
	pub_id SERIAL primary key,
	article varchar(255),
	journal varchar(255),
	authors varchar(255)
);

create table users(
	user_id SERIAL primary key,
	name varchar(255),
	email varchar(255),
	picture varchar(255)
);