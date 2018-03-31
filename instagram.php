<?
if($_GET["max"])
$response = file_get_contents('https://www.instagram.com/valencia.spahotel/?__a=1&count=15&max_id='.$_GET["max"]);
else
$response = file_get_contents('https://www.instagram.com/valencia.spahotel/?__a=1&count=15');	
echo json_encode(json_decode($response), JSON_UNESCAPED_UNICODE);

/*
if($_GET["max"])
$response = file_get_contents('https://api.instagram.com/v1/users/3920794552/media/recent/?access_token=3920794552.1677ed0.7b704721025c4af6a328329d93298852&count=15&max_id='.$_GET["max"]);
else
$response = file_get_contents('https://api.instagram.com/v1/users/3920794552/media/recent/?access_token=3920794552.1677ed0.7b704721025c4af6a328329d93298852&count=15');	
echo json_encode(json_decode($response), JSON_UNESCAPED_UNICODE);
/*
?>