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