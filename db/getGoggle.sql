SELECT * FROM goggle;

SELECT goggle.*, brand.brand_name
FROM goggle INNER JOIN brand
ON goggle.brand = brand.id;