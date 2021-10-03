--DROP SCHEMA ablackmagic;
--DROP TABLE ablackmagic."ABM-Navigation";

CREATE SCHEMA ablackmagic AUTHORIZATION root;

CREATE TABLE ablackmagic."ABM-Navigation" (
	id SERIAL primary KEY,
	titles varchar NULL
);