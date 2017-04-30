<main class="delete-form-container">
    <form class="deleteForm" id="delete-form">
        <div class="form-group">
            <?php include 'existingDocuments.php';?>
            <br />
            <button type="button" class="btn btn-primary" onclick="deleteEntry();" form="delete-form">Delete Entry</button>
        </div>
    </form>
</main>