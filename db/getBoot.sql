SELECT * FROM boot;

SELECT boot.*, brand.brand_name
FROM boot INNER JOIN brand
ON boot.brand = brand.id;
