CREATE DATABASE authtodolist;

--users table
CREATE TABLE users(
    user_id UUID DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);


--todos table

CREATE TABLE todos(
    todo_id SERIAL,
    user_id UUID,
    description VARCHAR(255) NOT NULL,
    PRIMARY KEY (todo_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


--fake users data

insert into users (user_name, user_email, user_password) values ('ahmet','ahmet@g.com','123456');

--fake todos data

insert into todos (user_id, description) values ('e2b20fbc-03ee-4969-8b3b-f1f06066f4b9','hello world');