SELECT * FROM glove;

SELECT glove.*, brand.brand_name
FROM glove INNER JOIN brand
ON glove.brand = brand.id;
