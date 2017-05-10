<!--
This include is a form that is used to delete entries form the database
-->
<div class="splashHeader">
    <h2>Delete A Paper</h2>
</div>
<form class="deleteForm" id="delete-form">
    <div class="form-group">
        <?php include 'existingDocuments.php';?>
        <br />
        <button type="button" class="btn btn-primary" onclick="deleteDocument();" form="delete-form">Delete Document</button>
    </div>
</form>
