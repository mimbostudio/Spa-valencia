<?
//$response = file_get_contents('https://www.instagram.com/choco.fountain.spb/media/');
$response = file_get_contents('http://api.instagram.com/v1/users/5662408513/media/recent/?access_token=5662408513.1677ed0.3fd05ccbbad943d992089b0fe96cefee&count=150');
echo json_encode(json_decode($response), JSON_UNESCAPED_UNICODE);
?>