<!--
This is the delete page that is used for faculty members only
-->
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
        <link rel="stylesheet" property='stylesheet' type="text/css" href="../../assets/css/bootstrap.min.css"/>
        <link rel="stylesheet" property='stylesheet' type="text/css" href="../../assets/css/Custom.css"/>
        <style>@import url('https://fonts.googleapis.com/css?family=Muli|Raleway|Roboto');</style>
        <title>Easy B+ Delete Page</title>
    </head>
    <body class="background">
        <?php // This is the include for a faculty navigation bar
        include '../../assets/includes/facultyNav.php';?>
        <?php // This is the include for the delete paper form
        include '../../assets/includes/deleteForm.php';?>
        <?php // This is the include for the footer
        include '../../assets/includes/footer.php';?>
        <script src="https://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
        <script src="../../assets/js/deleteTools.js"></script>
    </body>
</html>
