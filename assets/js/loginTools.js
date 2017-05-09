/*jshint esversion:6*/
var login_button = document.getElementById("auth");
login_button.onclick = function () {
    //Calls api login endpoint with data to check if they exist
    //Based on boolean return either allows them access or kicks them back
    $.ajax({
        type: 'GET',
        cache: false,
        async: true,
        dataType: 'json',
        url: 'proxy.php',
        data: {
            path: '/auth/login/?Username=' + document.getElementById("u-input1").value + '&Password='+document.getElementById("u-input2").value
        }
    }).done(function(response) {
        console.log(response);
       if (response){
           window.location.replace("/frontend/access/faculty/fsearch.php");
       }
       else {
           document.getElementById("u-input1").value="";
           document.getElementById("u-input2").value="";
           alert("Incorrect! No login for you.");
       }
    }).fail(function(xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
    });
};