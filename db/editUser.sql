UPDATE users 
SET username = $1 
WHERE username = $2
RETURNING username;

