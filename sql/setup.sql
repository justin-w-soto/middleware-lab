DROP TABLE IF EXISTS character;    

CREATE TABLE character (
id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
name TEXT NOT NULL,
status TEXT NOT NULL,
species TEXT NOT NULL
);


