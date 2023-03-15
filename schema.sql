SHOW TABLES;
SELECT * FROM user;
SHOW DATABASES;

INSERT INTO user (name, email)
VALUES ('Kev', 'kev@gmail.com');

INSERT INTO user (name, email)
VALUES ('Kelly', 'kelly@gmail.com');

SELECT * FROM user;

DESCRIBE TABLE user;

ALTER TABLE user MODIFY COLUMN role ENUM('admin', 'client') NOT NULL DEFAULT 'client';

CREATE TRIGGER before_user_insert
BEFORE INSERT ON user
FOR EACH ROW
SET NEW.role = IFNULL(NEW.role, 'client');

SHOW TRIGGERS;