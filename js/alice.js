var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/favicon1.jpg");
        document.title = '(つェ⊂)';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "/images/favicon1.jpg");
        document.title = '(*´∇｀*)' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});
//隐藏首页图
var full_page = document.getElementsByClassName("full_page");
if (full_page.length != 0) {
    full_page[0].style.background = "transparent";
}
