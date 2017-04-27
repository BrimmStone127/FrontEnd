<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8' /> 
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
        <link rel="stylesheet" property='stylesheet' type="text/css" href="assets/css/bootstrap.min.css"/>
        <link rel="stylesheet" property='stylesheet' type="text/css" href="assets/css/Custom.css"/>
        <style>@import url('https://fonts.googleapis.com/css?family=Muli|Raleway|Roboto');</style>
        <title>Easy B+ Login</title>
    </head>

    <body class="splash">

        <div class="splashHeader">
            <h2>Welcome To Easy B+</h2>
        </div>

        <div class="loginSection">
            <form class="loginForm" name="LogMeIn" onsubmit="return validateForm();" method="post">
                <input id="u-input" type="text" name="user" placeholder="Username" />
                <br>
                <input id="u-input" type="text" name="pass" placeholder="Password" />
                <br>
                <input id="s-input1" type="submit"  name="auth"  value="Sign In"  />
                <br>
                <input id="s-input2" type="submit"  name="auth"  value="Continue As Guest"  />
            </form>
        </div>


    </body>

</html>
