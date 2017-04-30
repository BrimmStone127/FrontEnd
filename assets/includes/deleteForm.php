<main class="delete-form-container">
    <form class="deleteForm" id="delete-form">
        <div class="form-group">
            <?php include 'existingDocuments.php';?>
            <br />
            <button type="button" class="btn btn-primary" onclick="deleteDocument();" form="delete-form">Delete Document</button>
        </div>
    </form>
</main>