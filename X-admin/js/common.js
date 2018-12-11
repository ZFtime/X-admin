(function(){
    var isLogin=sessionStorage.getItem('isLogin');
    if(isLogin!=='true') {
        window.location.href='/';
    }
})();