INSERT INTO account (first_name, last_name, email, password)
VALUES (
        'Tony',
        'Stark',
        'tony@starkent.com',
        'Iam1ronM@n'
    );
UPDATE account
SET account_type = 'Admin'
WHERE account_id = (
        SELECT account_id
        FROM account
        WHERE email = 'tony@starkent.com'
    );