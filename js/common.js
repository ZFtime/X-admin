(function(){
    var isLogin=sessionStorage.getItem('isLogin');
    if(isLogin==='false') {
        window.location.href='./login.html';
    }
})();