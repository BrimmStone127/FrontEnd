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
            <form class="loginForm" name="LogMeIn" onsubmit="" method="post">
                <div class="form-group">
                    <input id="u-input" type="text" name="user" placeholder="Username" required />
                    <br>
                    <input id="u-input" type="text" name="pass" placeholder="Password" required />
                    <br>
                    <input id="s-input1" class="btn btn-primary" type="submit"  name="auth"  value="Sign In"  />
                    <br>
                    <button id="s-input2" class="btn btn-secondary" type="submit"  name="auth"  value="Continue As Guest">Continue As Guest</button>
                </div>
            </form>
        </section>


    </body>

</html>
