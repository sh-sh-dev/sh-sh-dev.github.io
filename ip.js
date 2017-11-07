var IP = $.getJSON('//piorra.ir/sh_sh_dev/github/ip.php',{},function(data){
    setLanguageByIP();
    console.log(data);
});
function setLanguageByIP() {
    if (IP.Country == "IR") {
        if (l !== "fa") {
            var CHL = confirm("کشور شما ایران شناسایی شد ، آیا مایل هستید زبان را به فارسی تغییر دهید؟");
            if (CHL) {
                setCookie("language","fa",365);
                l = "fa";
                location.reload();
            }
        }
    }
}