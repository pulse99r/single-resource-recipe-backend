DROP DATABASE IF EXISTS recipes_dev;
CREATE DATABASE recipes_dev;

\c recipes_dev

DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    img TEXT,
    ingredients TEXT[],
    instructions VARCHAR,
    cooking_time DECIMAL,
    nationality TEXT[],
    is_Favorite BOOLEAN
    );