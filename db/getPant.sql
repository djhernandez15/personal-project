SELECT * FROM pant;

SELECT pant.*, brand.brand_name
FROM pant INNER JOIN brand
ON pant.brand = brand.id;
