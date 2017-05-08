/*jshint esversion:6*/
var login_button = document.getElementById("auth");
login_button.onclick = function () {
    $.ajax({
        type: 'GET',
        cache: false,
        async: true,
        dataType: 'json',
        url: 'proxy.php',
        data: {
            path: '/auth/login/'
        }
    }).done(function(response) {
       if (response){
           window.location.replace("/frontend/access/faculty/fsearch.php");
       }
       else {
           document.getElementById("u-input1").value="";
           document.getElementById("u-input2").value="";
           alert("Incorrect! No login for you.")
       }
    });
};