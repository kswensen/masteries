CREATE TABLE users(
	user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    auth_id TEXT
);

CREATE TABLE chores(
    chore_id SERIAL PRIMARY KEY,
	chore VARCHAR(40)
);

-- Different datatypes affect databases because depending on what is chosen, only that type can go into that column. For example, if you put
-- Integer as one of your datatypes for a column, only integers can be stored in that column. I chose varchar(40) for my column first_name 
-- because I wanted to limit how many characters a first name will be.