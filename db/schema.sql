DROP DATABASE IF EXISTS recipes;
CREATE DATABASE recipes_dev;

\c recipes_dev

DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
    id INTEGER SERIAL NOT NULL,
    name VARCHAR NOT NULL,
    img CHAR,
    ingredients TEXT,
    instructions TEXT,
    cooking_time DECIMAL,
    nationality ARRAY,
    is_Favorite BOOLEAN
    );