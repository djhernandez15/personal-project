SELECT * FROM helmet;

SELECT helmet.*, brand.brand_name
FROM helmet INNER JOIN brand
ON helmet.brand = brand.id;
