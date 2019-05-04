SELECT * FROM jersey;

SELECT jersey.*, brand.brand_name
FROM jersey INNER JOIN brand
ON jersey.brand = brand.id;