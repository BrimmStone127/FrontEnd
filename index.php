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
        <section class="loginSection">
            <form class="loginForm" id="login-form" name="LogMeIn" onsubmit="" method="post">
                <div class="form-group">
                    <input id="u-input1" type="text" name="user" form="login-form" placeholder="Username" required />
                    <br />
                    <input id="u-input2" type="text" name="pass" form="login-form" placeholder="Password" required />
                    <br />
                    <button class="s-input1 btn btn-primary white-text" type="button" id="auth" name="auth" form="login-form">Sign In</button>
                    <br />
                    <a href="access/general/psearch.php"><button class="s-input2 btn btn-primary white-text" type="button"  name="auth">Continue As Guest</button></a>
                </div>
            </form>
        </section>
        <script src="https://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
        <script src="assets/js/loginTools.js"></script>
    </body>
</html>
