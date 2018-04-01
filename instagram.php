<?
if($_GET["max"])
$response = file_get_contents('https://api.instagram.com/v1/users/3920794552/media/recent/?access_token=3920794552.1677ed0.79b294b858c14ce6b798e98fb45006b6&count=15&max_id='.$_GET["max"]);
else
$response = file_get_contents('https://api.instagram.com/v1/users/3920794552/media/recent/?access_token=3920794552.1677ed0.79b294b858c14ce6b798e98fb45006b6&count=15');	
echo json_encode(json_decode($response), JSON_UNESCAPED_UNICODE);

?>