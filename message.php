<?php
header("Access-Control-Allow-Origin: https://sh-sh-dev.github.io");
function strip_tags_content($text, $tags = '', $invert = FALSE) {
    preg_match_all('/<(.+?)[\s]*\/?[\s]*>/si', trim($tags), $tags);
    $tags = array_unique($tags[1]);
    if(is_array($tags) AND count($tags) > 0) {
        if($invert == FALSE) {
            return preg_replace('@<(?!(?:'. implode('|', $tags) .')\b)(\w+)\b.*?>.*?</\1>@si', '', $text);
        }
        else {
            return preg_replace('@<('. implode('|', $tags) .')\b.*?>.*?</\1>@si', '', $text);
        }
    }
    elseif($invert == FALSE) {
        return preg_replace('@<(\w+)\b.*?>.*?</\1>@si', '', $text);
    }
    return $text;
}
function xss_clean($data) {
    $data = str_replace(array('&amp;','&lt;','&gt;'), array('&amp;amp;','&amp;lt;','&amp;gt;'), $data);
    $data = preg_replace('/(&#*\w+)[\x00-\x20]+;/u', '$1;', $data);
    $data = preg_replace('/(&#x*[0-9A-F]+);*/iu', '$1;', $data);
    $data = html_entity_decode($data, ENT_COMPAT, 'UTF-8');
    $data = preg_replace('#(<[^>]+?[\x00-\x20"\'])(?:on|xmlns)[^>]*+>#iu', '$1>', $data);
    $data = preg_replace('#([a-z]*)[\x00-\x20]*=[\x00-\x20]*([`\'"]*)[\x00-\x20]*j[\x00-\x20]*a[\x00-\x20]*v[\x00-\x20]*a[\x00-\x20]*s[\x00-\x20]*c[\x00-\x20]*r[\x00-\x20]*i[\x00-\x20]*p[\x00-\x20]*t[\x00-\x20]*:#iu', '$1=$2nojavascript...', $data);
    $data = preg_replace('#([a-z]*)[\x00-\x20]*=([\'"]*)[\x00-\x20]*v[\x00-\x20]*b[\x00-\x20]*s[\x00-\x20]*c[\x00-\x20]*r[\x00-\x20]*i[\x00-\x20]*p[\x00-\x20]*t[\x00-\x20]*:#iu', '$1=$2novbscript...', $data);
    $data = preg_replace('#([a-z]*)[\x00-\x20]*=([\'"]*)[\x00-\x20]*-moz-binding[\x00-\x20]*:#u', '$1=$2nomozbinding...', $data);
    $data = preg_replace('#(<[^>]+?)style[\x00-\x20]*=[\x00-\x20]*[`\'"]*.*?expression[\x00-\x20]*\([^>]*+>#i', '$1>', $data);
    $data = preg_replace('#(<[^>]+?)style[\x00-\x20]*=[\x00-\x20]*[`\'"]*.*?behaviour[\x00-\x20]*\([^>]*+>#i', '$1>', $data);
    $data = preg_replace('#(<[^>]+?)style[\x00-\x20]*=[\x00-\x20]*[`\'"]*.*?s[\x00-\x20]*c[\x00-\x20]*r[\x00-\x20]*i[\x00-\x20]*p[\x00-\x20]*t[\x00-\x20]*:*[^>]*+>#iu', '$1>', $data);
    $data = preg_replace('#</*\w+:\w[^>]*+>#i', '', $data);
    do {
        $old_data = $data;
        $data = preg_replace('#</*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|i(?:frame|layer)|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|title|xml)[^>]*+>#i', '', $data);
    }
    while ($old_data !== $data);
    return $data;
}
function Clean($text) {
    $textn = strip_tags_content(xss_clean($text));
    return $textn;
}
function bot($Method,$data = null,$ok = false,$Token = null) {
    if (empty($Token)) {
        $Token = '415491030:AAEjo9OtcevCNzD0ykwsq2RaQBl6SVmLAhI';
    }
    $url = "https://api.telegram.org/bot".$Token."/".$Method;
    $ch = curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    if (!empty($data)) {
        curl_setopt($ch,CURLOPT_POSTFIELDS,http_build_query($data));
    }
    $res = curl_exec($ch);
    if(curl_error($ch)){
        var_dump(curl_error($ch));
    }
    else{
        if ($ok) {
            $res = json_decode($res);
            return $res->ok;
        }
        else {
            $res = json_decode($res);
            return $res;
        }
    }
}
$name = Clean($_POST["name"]);
$subject = Clean($_POST["subject"]);
$email = Clean($_POST["email"]);
$message = $_POST["message"];
$language = Clean($_POST["language"]);
$error = "مشکلی پیش آمد";
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    if ($language == "fa") {
        $error = "ایمیل معتبر نیست";
//        $error = 1;
    }
    else {
        $error = "Email is not valid";
//        $error = 1;
    }
    header("Location:https://sh-sh-dev.github.io/contact?error=$error&l=$language");
    die();
}
else if (empty($name) || empty($subject) || empty($email) || empty($message) || empty($language)) {
    if ($language == "fa") {
        $error = "لطفا همه فیلد ها را پر کنید";
    }
    else {
        $error = "Please Fill all inputs.";
    }
    header("Location:https://sh-sh-dev.github.io/contact?error=$error&l=$language");
    die();
}
if ($language == "fa") $language2 = "فارسی";
else $language2 = "انگلیسی";
$error = "ارسال شد";
//$error = 2;
bot('sendMessage',[
    'chat_id'=>342727359,
    'text'=>"پیام جدید از بازدید کننده های صفحه گیتهاب ! \n نام : $name \n موضوع : $subject \n ایمیل : $email \n زبان : $language2 \n پیام : $message"
]);
header("Location:https://sh-sh-dev.github.io/contact?error=$error&l=$language")
?>