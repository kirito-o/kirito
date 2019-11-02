var obj = JSON.parse($response.body);
obj.body = null;
$done({body: JSON.stringify(obj)}); 
/**
* @supported E428A9C8
*/