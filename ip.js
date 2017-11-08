var IP = $.getJSON('//github.piorra.ir/ghp/sh-sh-dev/ip',{},function(data){
    setLanguageByIP();
});
function setLanguageByIP() {
    if (IP.responseJSON.Country == "IR") {
        if (l !== "fa" && getCookie("chlbyip") != "false") {
            var CHL = confirm("کشور شما ایران شناسایی شد ، آیا مایل هستید زبان را به فارسی تغییر دهید؟");
            if (CHL) {
                setCookie("language","fa",365);
                setCookie("chlbyip","false",7);
                l = "fa";
                location.reload();
            }
            else {
                setCookie("chlbyip","false",365);
            }
        }
    }
}