-- Full updated code

-- Task 1

-- Insert new record
INSERT INTO account (first_name, last_name, email, password)
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');

-- Update account type  
UPDATE account
SET account_type = 'Admin' 
WHERE account_id = (SELECT account_id FROM account WHERE email = 'tony@starkent.com');

-- Delete record
DELETE FROM account
WHERE account_id = (SELECT account_id FROM account WHERE email = 'tony@starkent.com');

-- Update description
UPDATE inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_id = (SELECT inv_id FROM inventory WHERE inv_make = 'GM' AND inv_model = 'Hummer');

-- Inner join query
SELECT inventory.inv_make, inventory.inv_model, classification.classification_name
FROM inventory
INNER JOIN classification ON inventory.classification_id = classification.classification_id
WHERE classification.classification_name = 'Sport';

-- Update file paths
UPDATE inventory  
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');

-- Task 2

-- Copy queries 4 and 6 from Task 1 to rebuild file

UPDATE inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_id = (SELECT inv_id FROM inventory WHERE inv_make = 'GM' AND inv_model = 'Hummer');

UPDATE inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),  
inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
