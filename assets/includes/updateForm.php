<!--
This include is a form that is used to update the the entries in the database
-->
<main class="update-form-container">
    <div class="splashHeader">
        <h2>Update A Paper</h2>
    </div>
    <form class="updateForm" id="update-form">
        <div class="form-group">
            <div class="leftUpdate">
                <?php include 'existingDocuments.php';?>
            </div>
            <div class="rightUpdate">
                <input type="search" class="form-control" form="update-form" id="update-title" placeholder="New Title"/>
                <br />
                <textarea class="form-control" id="update-keywords" form="update-form" placeholder="New Keywords and Search Terms"></textarea>
                <br />
                <textarea class="form-control" id="update-abstract" form="update-form" placeholder="New Abstract"></textarea>
                <br />
                <textarea class="form-control" id="update-citation" form="update-form" placeholder="New Citation"></textarea>
                <br />
                <button type="submit" class="btn btn-primary" onclick="updateEntry();" form="update-form">Update Entry</button>
            </div>
        </div>
    </form>
</main>
