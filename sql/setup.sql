DROP TABLE IF EXISTS /*Table name goes here*/

CREATE TABLE /*table name*/ (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    /*table name*/ VARCHAR(512) NOT NULL
);

INSERT INTO /*Table name*/ (some object that I have chosen from the api)
    VALUES ($1);
    [objectIchosefromapi.tablename];


